"use client";
import NoSSR from "@/components/NoSSR/NoSSR";
import React, { useMemo, useState } from "react";
import useLocalStorage from "use-local-storage";
import { IVRAAuth, IVRAModule, IVRAPost, IVRAUserData } from "vinze-react-admin";
import VinzeAdminPanel from "vinze-react-admin/src/lib/VinzeAdminPanel/VinzeAdminPanel";

const Admin = () => {
  const [userData, setUserData] = useLocalStorage<IVRAUserData | null>("vra-user-data", null);
  const [postsData, setPostsData] = useState<IVRAPost[]>([]);

  const postsModule: IVRAModule<IVRAPost> = useMemo(
    () => ({
      id: "POSTS",
      config: {
        data: postsData,
        content: [
          {
            type: "DISPLAY",
          },
        ],
      },
    }),
    [postsData]
  );

  const modules: IVRAModule[] = useMemo(() => [postsModule], [postsModule]);
  const baseInfo = useMemo(() => ({ companyName: "VINZE" }), []);

  const auth: IVRAAuth = useMemo(
    () => ({
      userData,
      config: {
        googleAuth: true,
      },
      onSubmit: (data) => setTimeout(() => setUserData({ name: data.username }), 1000),
      onSubmitGoogle: () => {},
      onLogout: () => setUserData(null),
    }),
    [setUserData, userData]
  );

  return (
    <></>
    // <NoSSR>
    //   <VinzeAdminPanel modules={modules} auth={auth} baseInfo={baseInfo} />
    // </NoSSR>
  );
};

export default Admin;
