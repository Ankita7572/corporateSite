import React from "react";
import CallCenteNav from "./CallCenteNav";
import CallCenterDetail from "./CallCenterDetail";
import Footer from "../../Footer";

function CallCenter() {
  return (
    <div>
      <CallCenteNav />
      <CallCenterDetail />
      <Footer />
    </div>
  );
}

export default CallCenter;
