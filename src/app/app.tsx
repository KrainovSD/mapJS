import { ErrorCommonWrapper } from "@/widgets/error-common/error-common-wrapper";
import "./global-styles";
import { RootProvider } from "./providers";
import { AppRouter } from "./routers";

export function App() {
  return (
    <ErrorCommonWrapper>
      <RootProvider>
        <AppRouter />
      </RootProvider>
    </ErrorCommonWrapper>
  );
}
