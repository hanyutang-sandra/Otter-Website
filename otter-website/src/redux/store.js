import {createStore} from 'redux';
import website from './reducer';

const store = createStore(website);

console.log(store.getState());
store.subscribe(() => console.log(store.getState()));

export default store