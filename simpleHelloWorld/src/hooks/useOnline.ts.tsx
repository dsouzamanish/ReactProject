import {useState, useEffect} from 'react'

export const useOnline = () => {
    const [isOnline, setIsOnline] = useState(true);
    useEffect(() => {
        window.addEventListener("online", () => {
            setIsOnline(true)
        })
        // addEventListener version
        window.addEventListener("offline", (event) => {
            setIsOnline(false)
            console.log("The network connection has been lost.");
        });

    }, []);
    return isOnline
}