/* eslint-disable jsx-a11y/no-autofocus */

/* eslint-disable import/no-extraneous-dependencies */

/* eslint-disable jsx-a11y/no-static-element-interactions */

/* eslint-disable jsx-a11y/click-events-have-key-events */

/* eslint-disable no-console */
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { ErrorCommonAsync } from "@/widgets/error-common/error-common-async";
import { SingleLayout } from "@/shared/layouts/core-layouts";
import { NavigationProvider } from "../providers";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        element={
          <NavigationProvider>
            <SingleLayout />
          </NavigationProvider>
        }
      >
        <Route
          path="/"
          lazy={async () => {
            try {
              const { MapPage } = await import("@/pages/map-page");

              return {
                element: <MapPage />,
              };
            } catch (e) {
              console.log("Error: ", e);

              return { Component: ErrorCommonAsync };
            }
          }}
        />
        <Route
          path="/error"
          lazy={async () => {
            const { ErrorPage } = await import("@/pages/error-page");

            return { Component: ErrorPage };
          }}
        />
        <Route
          path="/*"
          lazy={async () => {
            const { NotFoundPage } = await import("@/pages/not-found-page");

            return { Component: NotFoundPage };
          }}
        />
      </Route>
    </>,
  ),
);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
