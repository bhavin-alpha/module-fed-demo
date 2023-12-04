import React, { Suspense, lazy } from "react";
const DemoB = lazy(() => import("DemoB/DemoFromBApp"));

function DemoBComp() {
    return (
        <Suspense fallback={<div>Loading DemoB...</div>}>{DemoB}</Suspense>
    )
}

export default DemoBComp;