import {HOME, STORY, TEAM, TOP, NOTTOP} from './actionTypes';

export const goHome = () => ({type: HOME});

export const goStory = () => ({type: STORY});

export const goTeam = () => ({type: TEAM});

export const notTop = () => ({type: NOTTOP});

export const top = () => ({type: TOP});