import React from 'react';

import MyCustomedWidth from '../hooks/MyHook';

const MyCustomHook = () => {
    const myWidth = MyCustomedWidth();
    return (
        <div>
            width: {myWidth}
        </div>
    );
};

export default MyCustomHook;