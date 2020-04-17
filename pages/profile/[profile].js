import React from "react";
import "../../style/style.scss";
// import "../style/bootstrap.scss";
import Recovery from "../../components/passwordRecovery/passwordRecovery";
import BaceLayout from "../../components/baceLayout/baceLayout";
import ProfileFluid from "../../components/profile/profileFluid";
import Router from "next/router";

import ProfileLayout from "../../components/profile/profileLayout";

import { useRouter } from "next/router";

const profile = () => {
  const router = useRouter();
  const { profile: pageType } = router.query;

  return (
    <BaceLayout>
      <ProfileLayout pageType={pageType} />
    </BaceLayout>
  );
};
//

export default profile;
