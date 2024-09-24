import React from "react";
import { NavigationContext } from "@/shared/providers/navigation-provider";

type NavigateOptions = {
  replace?: boolean;
};
type Navigate = (url: string, options?: NavigateOptions) => void;

export function useNavigate() {
  const externalNavigate = React.useContext(NavigationContext);

  if (!externalNavigate) throw new Error("Hasn't navigate context");

  const navigate = React.useCallback<Navigate>(
    (url, options = {}) => {
      if (options?.replace) return void externalNavigate.replace(url);

      externalNavigate.push(url);
    },
    [externalNavigate],
  );

  return navigate;
}
