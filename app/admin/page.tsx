"use client";
import NoSSR from "@/components/NoSSR/NoSSR";
import React, { useMemo, useState } from "react";
import useLocalStorage from "use-local-storage";
// import VinzeReactAdmin from "vinze-react-admin";
// import { IVRAAuth, IVRAModule, IVRAPost, IVRAUserData } from "vinze-react-admin/src/lib/types/VinzeAdminPanel.types";

const Admin = () => {
  // const [userData, setUserData] = useLocalStorage<IVRAUserData | null>("vra-user-data", null);
  // const [postsData, setPostsData] = useState<IVRAPost[]>([]);

  // const postsModule: IVRAModule<IVRAPost> = useMemo(
  //   () => ({
  //     id: "POSTS",
  //     config: {
  //       data: postsData,
  //       content: [
  //         {
  //           type: "DISPLAY",
  //         },
  //       ],
  //     },
  //   }),
  //   [postsData]
  // );

  // const modules: IVRAModule[] = useMemo(() => [postsModule], [postsModule]);
  // const baseInfo = useMemo(() => ({ companyName: "VINZE" }), []);

  // const auth: IVRAAuth = useMemo(
  //   () => ({
  //     userData,
  //     config: {
  //       googleAuth: true,
  //     },
  //     onSubmit: (data) => setTimeout(() => setUserData({ name: data.username }), 1000),
  //     onSubmitGoogle: () => {},
  //     onLogout: () => setUserData(null),
  //   }),
  //   [setUserData, userData]
  // );

  return (
    <></>
    // <NoSSR>
    // <VinzeReactAdmin modules={modules} auth={auth} baseInfo={baseInfo} />
    // </NoSSR>
  );
};

export default Admin;
