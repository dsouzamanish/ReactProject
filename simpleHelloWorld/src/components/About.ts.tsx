import {User} from "./User";
import {UserClass} from "./UserClass";

export const About = () => {
    return (
        <div className="aboutus">
            About us
            <UserClass name="Manish Dsouza (class)" location="Mumbai" contact="dsouzamanish@gmail.com"/>
        </div>
    )
}