import { getSession } from "@/actions/getCurrentUser";
import RegisterGrid from "@/components/Auth/Register/Grid";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Register",
};

const Register = async () => {
  const session = await getSession();

  if (session?.user?.username) {
    redirect("/home");
  }

  return (
    <>
      <RegisterGrid />
    </>
  );
};

export default Register;
