import type { UseQueryResult } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import type { OptionListType } from "@/shared/types";
import { useNotification } from "./use-notification";

interface UseInputOptionsOnLoadParams<T, V> {
  request: (enabled: boolean, value?: V) => UseQueryResult<T, Error>;
  errorMessage: string;
  value?: V;
}

export function useInputOptionsOnload<T = OptionListType, V = unknown>(
  params: UseInputOptionsOnLoadParams<T, V>,
) {
  const { request, value, errorMessage } = params;
  const { showNotification } = useNotification();
  const [isFocused, setIsFocused] = useState(false);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const {
    data: options,
    isLoading,
    isError,
    isSuccess,
    refetch,
  } = request(isFocused && !isDataLoaded, value);

  useEffect(() => {
    if (isError) {
      showNotification("error", {
        message: errorMessage,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError]);

  useEffect(() => {
    setIsDataLoaded(isSuccess);
  }, [isSuccess]);

  const handleFocus = () => {
    setIsFocused(true);

    if (!isDataLoaded) {
      refetch();
    }
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return { isFocused, isLoading, handleFocus, handleBlur, options };
}
