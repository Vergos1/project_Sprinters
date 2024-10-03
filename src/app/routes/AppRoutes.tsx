import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
//import component
import AppLayout from "../AppLayout.tsx";
//import types
import { RoutesList } from "./routes.types.ts";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage.tsx"));
const TermsPage = lazy(() => import("../../pages/AdminPage/AdminPage.tsx"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Routes>
        <Route path={RoutesList.home} element={<AppLayout />}>
          {/*=== home page ===*/}
          <Route index element={<HomePage />} />
          {/*=== settings pages ===*/}
          <Route path={`${RoutesList.admin}`} element={<TermsPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
