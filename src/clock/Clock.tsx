import { useEffect, useState } from "react";

export function Clock() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const timerId = setInterval(refresh, 1000);
        return () => {
            clearInterval(timerId);
        };
    },[]);

    const refresh = () => setTime(new Date().toLocaleTimeString());

    return (
        <div>
            <p>{time}</p>
        </div>
    );
}