
/*
import React, { useState, useEffect } from 'react';

export default function Users3() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://miniature-xylophone-x545r4q7x7r42pwgw-8000.app.github.dev/users3.php')
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            <h1>PHP Test</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}
*/

import React, { useState, useEffect } from 'react';

export default function Users3() {
    const [data, setData] = useState(null);

    // Uses the exact Vite variable from your .env.local file
     const API_URL = `${import.meta.env.VITE_API_URL}/user.php`;


    useEffect(() => {
        fetch(API_URL)
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => console.error("Fetch Error:", err));
    }, [API_URL]);

    return (
        <div style={{ padding: '20px' }}>
            <h1>PHP Env Test</h1>
            <p>{API_URL}</p>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}
