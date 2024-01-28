import React, { useState, useEffect } from 'react';

function Clock() {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000);

        // Cleanup the interval when the component is unmounted
        return () => clearInterval(intervalId);
    }, []); // Empty dependency array means useEffect will only run once, similar to componentDidMount

    return <h1>{date.toString()}</h1>;
}

export default Clock;
