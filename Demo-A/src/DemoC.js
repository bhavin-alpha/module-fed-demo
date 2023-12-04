import React, { Suspense, lazy } from "react";
const DemoC = lazy(() => import("DemoC/DemoFromCApp"));

function DemoCComp() {
    return (
        <Suspense fallback={<div>Loading Democ...</div>}>{DemoC}</Suspense>
    )
}

export default DemoCComp;