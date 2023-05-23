import { getSession } from "@/actions/getCurrentUser";
import LoginContainer from "@/components/Auth/Login/Container";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Login",
};

const Auth = async ({ params }) => {
  const session = await getSession();

  if (session?.user?.username) {
    redirect("/home");
  }

  return (
    <>
      <LoginContainer />
    </>
  );
};

export default Auth;
