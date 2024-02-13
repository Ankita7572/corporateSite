import React from "react";
import VoIPBillingNav from "./VoIPBillingNav";
import VoIpBillingDetail from "./VoIpBillingDetail";
import Footer from "../../Footer";

function VoIPBilling() {
  return (
    <div>
      <VoIPBillingNav />
      <VoIpBillingDetail />
      <Footer />
    </div>
  );
}

export default VoIPBilling;
