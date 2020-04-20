import React from "react";

import { useRouter } from "next/router";
import "../../style/style.scss";

import CarInnerFluid from "../../components/CarrInner/CarrInnerFluid";

// import ResetPassword from "../../components/regAuth/resetPassword/resetPassword";
// import "../style/bootstrap.scss";
// import Recovery from "../../../components/passwordRecovery/passwordRecovery";
import BaceLayout from "../../components/baceLayout/baceLayout";
const id = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <BaceLayout>
      <CarInnerFluid id={id} />
    </BaceLayout>
  );
};
//

export default id;
