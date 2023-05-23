import getCurrentUser, { getSession } from "@/actions/getCurrentUser";
import SideBar from "@/components/Nav/SideBar";
import { redirect } from "next/navigation";
import classes from "./page.module.css";

export const metadata = {
  title: "Home",
  description: "Software Development and Gadget Repairs.",
};

export default async function Layout({ children }) {
  const currentUser = await getCurrentUser();

  if (!currentUser?._id) {
    return redirect("/");
  }

  return (
    <>
      <SideBar />
      <section className={"push-layout uk-padding"}>{children}</section>
    </>
  );
}
