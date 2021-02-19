import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DashboardLayout from './component/dashboardLayout/Dashboard';
//import Dashboard from './component/dashboardLayout/Dashboard';
  
 const Controller=()=>{
     return(
        <BrowserRouter>
        <DashboardLayout>
            this is Dashboard
        <Switch>
            <Route/>
        </Switch>
        </DashboardLayout>
        </BrowserRouter>
     )
 }

 export default Controller;