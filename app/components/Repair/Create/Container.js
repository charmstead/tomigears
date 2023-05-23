"use client";
import React, { useState } from "react";
import RepairForm from "./RepairForm";
import StepSwitch from "./StepSwitch";

const Container = ({ session }) => {
  const [step, setstep] = useState(1);

  return (
    <section className="">
      <div className="uk-background-muted uk-padding-small uk-margin-small">
        <StepSwitch step={step} />
      </div>
      <div className="uk-background-muted uk-padding-small">
        <RepairForm session={session} store={session.user.stores[0]._id} technician={session.user._id} />
      </div>
    </section>
  );
};

export default Container;
