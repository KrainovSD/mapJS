import type { ReactNode } from "react";
import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { useNavigate, useParams } from "react-router-dom";
import { NavigationProvider as NavigationProviderShared } from "@/shared/providers/navigation-provider";

interface RootProviderProps {
  children: ReactNode;
}

export function NavigationProvider(props: RootProviderProps) {
  const { children } = props;
  const navigate = useNavigate();
  const navigatePush = React.useCallback(
    (url: string) => {
      navigate(url);
    },
    [navigate],
  );
  const navigateReplace = React.useCallback(
    (url: string) => {
      navigate(url, { replace: true });
    },
    [navigate],
  );
  const params = useParams();

  return (
    <NavigationProviderShared push={navigatePush} replace={navigateReplace} params={params}>
      {children}
    </NavigationProviderShared>
  );
}
