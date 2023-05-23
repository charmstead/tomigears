"use client";
import { usePathname } from "next/navigation";

export default function RepairHeading() {
  const a = usePathname();

  return (
    <div>
      <h3>{/\/create/.test(a) ? "Create Repair" : "Repairs"}</h3>
    </div>
  );
}
