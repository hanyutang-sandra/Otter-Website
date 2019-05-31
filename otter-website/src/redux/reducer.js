import {HOME, STORY, TEAM, TOP, NOTTOP} from './actionTypes';
import { combineReducers } from 'redux';

const initialStatePage = {
    page: 'Home'
};

function changePage(state=initialStatePage, action) {
    switch (action.type) {
        case HOME:
            return Object.assign({}, {
                page: 'Home'
            });
        case STORY:
            return Object.assign({}, {
                page: 'Story'
            });
        case TEAM:
            return Object.assign({}, {
                page: 'Team'
            });
        default:
            return state
    }
}

const initialStateScroll = {
    position: 'top'
};

function listenScroll(state=initialStateScroll, action){
    switch (action.type) {
        case TOP:
            return Object.assign({}, {
                position: 'Top'
            });
        case NOTTOP:
            return Object.assign({}, {
                position: 'notTop'
            });
        default:
            return state
    }
}

const website = combineReducers({ changePage, listenScroll });

export default website;