import React from "react";

type UseInputFocusOptions = {
  componentId?: string;
  inputRef?: HTMLInputElement | null;
  autoFocus: boolean;
  value: string;
};

export function useInputFocus(props: UseInputFocusOptions) {
  const { componentId, inputRef, autoFocus, value } = props;
  const isHasBeenFocusedRef = React.useRef(false);
  const isHasBeenFocusedZeroRef = React.useRef(false);

  React.useLayoutEffect(() => {
    const valueLength = value?.length || 0;

    // Enter text after zero focus
    if (isHasBeenFocusedZeroRef.current && valueLength === 1) isHasBeenFocusedRef.current = true;

    // Check is has been focused
    if (
      !autoFocus ||
      isHasBeenFocusedRef.current ||
      (isHasBeenFocusedZeroRef.current && valueLength === 0) ||
      (!inputRef && !componentId)
    )
      return;

    // Initial render
    if (!isHasBeenFocusedZeroRef.current && valueLength === 0)
      isHasBeenFocusedZeroRef.current = true;

    // Not initial render
    if (valueLength > 0) isHasBeenFocusedRef.current = true;

    try {
      const input: HTMLInputElement | null =
        inputRef ||
        (componentId ? (document.getElementById(componentId) as HTMLInputElement | null) : null);
      if (!input) return;

      input.focus();
      input.setSelectionRange(input.value.length, input.value.length);
      input.scrollTo({ left: input.scrollWidth });

      // eslint-disable-next-line no-empty
    } catch (error) {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
}
