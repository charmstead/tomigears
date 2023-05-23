import { getSession } from "@/actions/getCurrentUser";
import TopPane from "@/components/Dashboard/Toppane";
import ListView from "@/components/Repair/ListView";
import { redirect } from "next/navigation";
import RepairRepository from "../../Repository/RepairRepo";

const Home = async () => {
  const session = await getSession();

  if (!session?.user?._id) {
    return redirect("/");
  }

  const store = session.user.stores[0];

  const repairs = await RepairRepository.getStoreRepairs(store._id);

  return (
    <>
      <section className="uk-padding">
        <TopPane />
      </section>
      <ListView repairs={repairs} />
    </>
  );
};

export default Home;
