import type { ReactNode } from "react";
import { I18Provider } from "@/shared/providers/i18-provider";
import { QueryProvider } from "@/shared/providers/query-provider";
import { ThemeProvider } from "@/shared/providers/theme-provider";

interface RootProviderProps {
  children: ReactNode;
}

export function RootProvider(props: RootProviderProps) {
  const { children } = props;

  return (
    <I18Provider>
      <QueryProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </QueryProvider>
    </I18Provider>
  );
}
