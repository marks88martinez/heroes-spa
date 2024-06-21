import {  Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth"

import { Navbar } from "../ui" 
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes"
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoute } from "./PublicRoute"


export const AppRouter = () => {
  return (
   <>
  
    <Routes>
        
        {/* <Route path="/login" element={<LoginPage/>}></Route> */}


            <Route path="login/*" element={
                <PublicRoute>
                  {/* <LoginPage /> */}
                  <Routes>
                    <Route path="/*" element={<LoginPage />} />
                  </Routes>
                </PublicRoute>
              }
            />



        <Route path="/*" element={
          <PrivateRoute>
            <HeroesRoutes/>
          </PrivateRoute>}>
        </Route>
        {/* <Route path="/*" element={<HeroesRoutes/>}></Route> */}
        

    </Routes>
   </>
  )
}
