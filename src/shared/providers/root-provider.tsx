import type { ReactNode } from "react";
import { NavigationProvider, type NavigationState } from "@/shared/providers/navigation-provider";
import { QueryProvider } from "@/shared/providers/query-provider";
import { ThemeProvider } from "@/shared/providers/theme-provider";

type RootProviderProps = {
  children: ReactNode;
} & NavigationState;

export function RootProvider(props: RootProviderProps) {
  const { children, params, push, replace } = props;

  return (
    <QueryProvider>
      <ThemeProvider>
        <NavigationProvider push={push} replace={replace} params={params}>
          {children}
        </NavigationProvider>
      </ThemeProvider>
    </QueryProvider>
  );
}
