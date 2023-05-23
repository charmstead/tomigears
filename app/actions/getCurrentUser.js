import { getServerSession } from "next-auth/next";
import connectMongo from "../../lib/connectDB";

import { authOptions } from "../../pages/api/auth/[...nextauth]";
import AccountRepository from "../../Repository/AccountRepo";

export async function getSession() {
  return await getServerSession(authOptions);
}

export default async function getCurrentUser() {
  try {
    const session = await getSession();

    if (!session?.user?.username) {
      return null;
    }

    await connectMongo();
    const currentUser = await AccountRepository.findByUsername(session.user.username);

    if (!currentUser) {
      return null;
    }

    return currentUser;
  } catch (error) {
    return null;
  }
}
