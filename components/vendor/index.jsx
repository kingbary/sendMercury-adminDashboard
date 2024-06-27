import React, { useState } from "react";
import InnerCard from "../universal/InnerCard";
import VendorsDetails from "./VendorsDetails";
import PlanSelect from "../universal/PlanSelect";
import StatusSelect from "../universal/StatusSelect";

export default function Vendors() {
  const [plan, setPlanChange] = useState("basic");
  const [status, setStatus] = useState("active");

  return (
    <div>
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mx-4 md:mx-8">
        <InnerCard
          cardHeading={"Basic Plan Vendors"}
          value={"4,659,000"}
          percentageIncrease={"29.09"}
          increaseAmount={"+ 10,000"}
          percentage
        />
        <InnerCard
          cardHeading={"Silver plan Vendors"}
          value={"2,999,987"}
          percentageIncrease={"29.09"}
          increaseAmount={"- 10,000"}
          percentage
        />
        <InnerCard
          cardHeading={"Gold Plan Vendors"}
          value={"234,989"}
          percentageIncrease={"29.09"}
          increaseAmount={"+1,234"}
          percentage
        />
        <InnerCard
          cardHeading={"Platinum Plan Vendors"}
          value={"23,456"}
          percentageIncrease={"29.09"}
          increaseAmount={"+12,456"}
          percentage
        />
      </div>
      <div className="flex gap-4 mx-4 my-8 md:m-8">
        <PlanSelect handlePlanChange={setPlanChange} />
        <StatusSelect handleStatusChange={setStatus} />
      </div>

      <VendorsDetails plan={plan} status={status} />
    </div>
  );
}
