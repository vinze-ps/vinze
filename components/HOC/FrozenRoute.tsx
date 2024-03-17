import { useContext, useRef } from "react";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";

const FrozenRoute = (props: { children: React.ReactNode }) => {
  const context = useContext(LayoutRouterContext ?? {});
  const frozen = useRef(context).current;

  return <LayoutRouterContext.Provider value={frozen}>{props.children}</LayoutRouterContext.Provider>;
};

export default FrozenRoute;
