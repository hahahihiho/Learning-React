import React from 'react';

const Loop1 = () => {
    const createListItems = count =>{
        let li = [];
        for (let i = 0; i<count; i++){
            li.push(<li>Item {i}</li>);
        }
        return li;
    }
    return (
        <div>
            <ul>{createListItems(5)}</ul>
        </div>
    );
};

export default Loop1;