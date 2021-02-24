import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DashboardLayout from './component/dashboardLayout/DashboardLayout';
import Home from './screen/home/Home';
import Recruitment from './screen/recruitment/Recruitment';
import Onboarding from './screen/onboarding/Onboarding';
import Reports from './screen/reports/Reports';
import Calendar from './screen/calendar/Calendar';
import Settings from './screen/settings/Settings'

 const Controller=()=>{
     return(
        <BrowserRouter >
        <DashboardLayout>
            
        <Switch>
            <Route exact path="/" render={(props)=><Home {...props}/>}/>
            <Route path ="/recruitment" render={(props)=><Recruitment {...props}/>}/>
            <Route path="/onboarding" render={(props)=><Onboarding {...props}/>}/>
            <Route path="/reports" render={(props)=><Reports {...props}/>}/>
            <Route path="/calendar" render={(props)=><Calendar {...props}/>}/>
            <Route path="/settings" render={(props)=><Settings {...props}/>}/>
        </Switch>
        </DashboardLayout>
        </BrowserRouter>
     )
 }

 export default Controller;