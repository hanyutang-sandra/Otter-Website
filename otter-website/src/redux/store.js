import {createStore} from 'redux';
import website from './reducer';

const store = createStore(website);

export default store