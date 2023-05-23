import { getSession } from "@/actions/getCurrentUser";
import ListView from "@/components/Repair/ListView";
import { redirect } from "next/navigation";
import React from "react";
import RepairRepository from "../../Repository/RepairRepo";

export async function getRepairs(storeId) {
  return RepairRepository.getStoreRepairs(storeId);
}

const page = async () => {
  const session = await getSession();

  if (!session?.user?._id) {
    return redirect("/");
  }

  const store = session.user.stores[0];

  const repairs = await getRepairs(store._id);

  return (
    <div>
      <ListView repairs={repairs} />
    </div>
  );
};

export default page;
