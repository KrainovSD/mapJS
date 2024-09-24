import "./global-styles";
import { RootProvider } from "./providers";
import { AppRouter } from "./routers";

export function App() {
  return (
    <RootProvider>
      <AppRouter />
    </RootProvider>
  );
}
