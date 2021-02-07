import {createStore} from 'redux';
import Reduser from './reduser';
const initalState  = {
    cart:[]
}
console.log(initalState);

const store  = createStore(Reduser,initalState); 
export default store;