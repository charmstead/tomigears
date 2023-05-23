import { getSession } from "@/actions/getCurrentUser";
import Container from "@/components/Repair/Create/Container";
import React from "react";

export default async function page() {
  const session = await getSession();

  return (
    <div>
      <Container session={session} />
    </div>
  );
}
