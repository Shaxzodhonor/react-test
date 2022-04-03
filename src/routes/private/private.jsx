import { Redirect, Route } from "react-router";
import UseLogin from "../../hooks/useLogin";

function Privates ({ path, component }) {
    const [login] = UseLogin();
   
    if(login){
        return <Route path={path} component={component}  />
    }
    
    return <Redirect to='/' />
}

export default Privates;