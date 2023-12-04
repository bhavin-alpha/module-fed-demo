import React, { Suspense, lazy } from "react";
const DemoD = lazy(() => import("DemoD/Demo"));

function DemoDComp() {
  return (
    <Suspense fallback={<div>Loading Demo D...</div>}>
      <DemoD />
    </Suspense>
  );
}

export default DemoDComp;
