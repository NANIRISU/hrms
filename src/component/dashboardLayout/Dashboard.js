import React from 'react';

const dashboardLayout=({children})=>{
return(
    <div className="dashboard">
        <nav className="side-nav-bar">
           this is nav
        </nav>
        <div className="main-container">
        {children}
        here main conainer
        </div>
        
    </div>
)
}
export default dashboardLayout; 