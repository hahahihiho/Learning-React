
const Logger = store => next => action => {
    console.group(action && action.type);

    console.log('prev-state',store.getState());
    console.log('action',action);

    // 다음 미들웨어, 혹은 reducer에게 전달 -> 동작수행
    next(action);

    console.log('next-state',store.getState());
    console.groupEnd();
}

export default Logger;

function a(store) {
    return function(next) {
        return function c(action) {
            //do something
        }
    }
}