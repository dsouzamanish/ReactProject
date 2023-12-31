
import {NavBar} from "./navbar";

const LogoComponent = () => {
    return (
        <div className="w-24">
            <img src="https://img.freepik.com/free-vector/delivery-service-illustrated_23-2148505081.jpg?w=740&t=st=1702679236~exp=1702679836~hmac=b3cfd5d63e5114230888741d387b6fddaaba37f484f161a0da87a55368f24523"/>
        </div>
    )
}

export  const HeaderComponent = () => {
    return (
        <div className="flex flex-wrap justify-between shadow-lg bg-purple-200">
            <LogoComponent/>
            <NavBar/>
        </div>
    );
}