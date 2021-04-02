import DashboardLayout from "../component/dashboardLayout/DashboardLayout"

function authenticate(component){
    const accessToken=localStorage.getItem('Access-Token')

    // api - validate the token
    const isLoggedIn=accessToken ? true :  false
    if (isLoggedIn){
        return component
        // ()=>(
        //     <DashboardLayout>
        //        <component/>
        //     </DashboardLayout>
        // )
      
    }
    else
    {
    return ()=> {
       window.location.replace('/login')
        return(<div><h1> Unauthorized</h1>
        <h4>please login</h4>
        </div>)
    }
         
    }
}
export default authenticate;