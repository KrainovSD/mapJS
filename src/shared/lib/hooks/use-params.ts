import React from "react";
import { NavigationContext } from "@/shared/providers/navigation-provider";

export function useParams(): Readonly<Record<string, string | string[] | undefined>> {
  const navigation = React.useContext(NavigationContext);

  if (!navigation) throw new Error("Hasn't navigation provider");

  return navigation.params || {};
}
