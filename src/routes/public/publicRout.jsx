import { Route } from "react-router";

function Public ({ path, component, exact  }) {

    return <Route path={path} component={component} exact={exact} />
}

export default Public;