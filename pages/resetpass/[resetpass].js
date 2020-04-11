import React from "react";

import { useRouter } from "next/router";
import "../../style/style.scss";
import ResetPassword from "../../components/regAuth/resetPassword/resetPassword";
// import "../style/bootstrap.scss";
// import Recovery from "../../../components/passwordRecovery/passwordRecovery";
import BaceLayout from "../../components/baceLayout/baceLayout";
const resetPass = () => {
  const router = useRouter();
  const { resetpass: token } = router.query;
  return (
    <BaceLayout>
      <ResetPassword token={token} />
    </BaceLayout>
  );
};
//

export default resetPass;
