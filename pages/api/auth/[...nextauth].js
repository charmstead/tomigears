import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import connectMongo from "../../../lib/connectDB";
import AccountRepo from "../../../Repository/AccountRepo";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      id: "credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Invalid credentials");
        }

        await connectMongo();
        const { user } = await AccountRepo.login(credentials.email, credentials.password);

        if (!user) throw new Error("Invalid credentials");

        const { salt, hash, ...account } = user.toObject();

        return account;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { user, ...token };
    },
    async session({ session, token }) {
      return { ...session, user: token.user };
    },
  },
  pages: {
    signIn: "/",
  },
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
