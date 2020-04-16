const isEqualArgs = (args1, args2) => {
    if(args1.length !== args2.length) {
        return false;
    }
    for(let i = 0; i < args1.length; i++) {
        if(args1[i] !== args2[i]) {
            return false;
        }
    }
    return true;
}

export default isEqualArgs;