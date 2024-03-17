import { AppContextProvider } from "@/store/app-context";
import { NextUIProvider } from "@nextui-org/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <AppContextProvider>{children}</AppContextProvider>
    </NextUIProvider>
  );
}
