const administrator = (state, action) => {

    if (state === undefined){
        return {
            id: 1
        };
    }

    switch(action.type){
        
        default:
            return state.administrator;
    }
}
export default administrator;