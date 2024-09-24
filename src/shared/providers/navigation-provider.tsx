import React from "react";

export type NavigationState = {
  push: (url: string) => void;
  replace: (url: string) => void;
  params: Readonly<Record<string, string | string[] | undefined>>;
};

export const NavigationContext = React.createContext<NavigationState | null>(null);

export function NavigationProvider(props: React.PropsWithChildren<NavigationState>) {
  const { push, replace, params, children } = props;

  return (
    <NavigationContext.Provider
      value={{
        push,
        replace,
        params,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
}
