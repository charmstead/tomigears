import getCurrentUser from "@/actions/getCurrentUser";
import SideBar from "@/components/Nav/SideBar";
import RepairHeading from "@/components/Repair/RepairHeading";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Home",
  description: "Software Development and Gadget Repairs.",
};

export default async function Layout({ children, params }) {
  const currentUser = await getCurrentUser();

  if (!currentUser?._id) {
    return redirect("/");
  }

  return (
    <>
      <SideBar />
      <section className={"push-layout uk-padding"}>
        <RepairHeading />
        {children}
      </section>
    </>
  );
}
