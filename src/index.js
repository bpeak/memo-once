import isEqualArgs from './isEqualArgs';

const memoOnce = (resultFn, equalFn = isEqualArgs) => {
    let prevArgs = [];
    let prevThis = null;
    let prevResult = null;
    let calledOnce = false;
    return function memoizedFn(...args) {
        if(calledOnce && prevThis === this && equalFn(args, prevArgs)) {
            return prevResult;
        }
        const result = resultFn.apply(this, args);
        prevResult = result;
        prevArgs = args;
        prevThis = this;
        calledOnce = true;
        return result;
    }
}

export default memoOnce;

