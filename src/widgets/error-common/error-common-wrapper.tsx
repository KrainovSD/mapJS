import { Flex } from "antd";
import type { JSX } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { ErrorBoundary } from "react-error-boundary";
import { ErrorContent } from "@/shared/ui";
import * as styles from "./styles";

interface ErrorCommonWrapperProps {
  children: React.ReactNode;
}

export const ErrorCommonWrapper = (props: ErrorCommonWrapperProps): JSX.Element => {
  const { children } = props;
  const renderFallback = () => {
    return (
      <Flex className={styles.errorContent}>
        <ErrorContent />;
      </Flex>
    );
  };

  return (
    <ErrorBoundary
      FallbackComponent={renderFallback}
      // eslint-disable-next-line no-console
      onError={(e) => console.log("Error: ", e.message)}
    >
      {children}
    </ErrorBoundary>
  );
};
