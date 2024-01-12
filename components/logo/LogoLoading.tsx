import React from "react";
import Logo from "@/components/logo/Logo";
import styles from "@/components/logo/LogoLoading.module.scss";

const LogoLoading = () => {
  return <Logo className={styles["logo"]} />;
};

export default LogoLoading;
