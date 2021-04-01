function authenticate(component){
    const accessToken=localStorage.getItem('Access-token')

    // apy - validate the tokend
    const isLoggedIn=accessToken ? true :  false
    if (isLoggedIn){
        return component
      
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