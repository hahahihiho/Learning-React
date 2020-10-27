import React from 'react';

const If5 = () => {
    const isAdministrator = (user) => {
        return !!(user && user.isAdmin);
    }
    const user1 = {isAdmin:true}
    const user2 = {isAdmin:false}
    const user3 = {};
    console.debug(isAdministrator(user1))
    console.debug(isAdministrator(user2))
    console.debug(isAdministrator(user3))

    return (
        <div>
            제목
            끝
        </div>
    );
};

export default If5;