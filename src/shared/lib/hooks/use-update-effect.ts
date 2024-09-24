import React from "react";

export function useUpdateEffect(cb: () => void, deps?: React.DependencyList | undefined) {
  const firstRender = React.useRef(true);
  React.useEffect(
    () => {
      if (firstRender.current) {
        firstRender.current = false;

        return;
      }

      cb();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    deps,
  );
}
