import {createStore} from 'redux'
function reducer(state,action){
    switch(action.type){
        case "PLUS":
            state.count++
            break;
        case "MINUS":
            state.count--
            break;
        default:
            break;        
    }
    return {...state}
}
const store = createStore(reducer,{
count:0
})
store.dispatch({type:"PLUS"});


export default store;



