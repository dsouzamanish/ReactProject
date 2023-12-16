import {useRouteError} from "react-router-dom";

export  const Error = () => {
    const error = useRouteError();
    console.log(error)
    return (<div>
        Opps!! there was an error
        {error.status}: {error.statusText}
    </div>)
}
