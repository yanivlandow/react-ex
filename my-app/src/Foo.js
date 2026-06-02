import React, { useState } from 'react';

function Foo({ a, b, c }) {
    const [bar, setBar] = useState(0);

    return (
        <div 
            style={{ border: '2px dashed blue', padding: '15px', margin: '10px', cursor: 'pointer' }} 
            onClick={() => setBar(bar + 1)}
        >
            <h3>Custom Foo Component</h3>
            <p>Value a: {a} | Value b: {b} | Value c: {c}</p>
            <p><strong>Click count (bar): {bar}</strong></p>
        </div>
    );
}

export default Foo;