import React from 'react';
import Foo from './Foo';

function App() {
    var i = 1 + 2;

    return (
        <div style={{ padding: '20px' }}>
            <h1>My Interactive React Components</h1>

            <Foo a="1" b="a" c={i} />
            <Foo a="2" b="b" c={i + 1} />
            <Foo a="3" b="c" c={i + 2} />
        </div>
    );
}

export default App;