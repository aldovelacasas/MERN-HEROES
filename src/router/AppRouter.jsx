import { Route, Routes } from "react-router-dom";

import { HeroesRoutes} from '../heroes'
import {LoginPage} from '../auth/pages'
import { PrivateRoute } from "./PrivateRoute";
import { PublicRouete } from "./PublicRoute";

export const AppRouter = () => {
  return (
    <>

      <Routes>

        <Route path="login" element={
            <PublicRouete>
                <LoginPage />
            </PublicRouete>
        } />
        {/* // <Route path="login" element={<LoginPage />} /> */}


         <Route path="/*" element={
           <PrivateRoute>
            <HeroesRoutes/>
           </PrivateRoute>

         } />
        
        {/* <Route path="/*" element={<HeroesRoutes />} /> */}

      </Routes>
    </>
  );
};
