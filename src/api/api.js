import React from 'react';
import {connect} from 'react-redux';
import * as axios from 'axios';


// тут пишем урлу и все хедеры если надо
const instance = axios.create({
    baseURL: 'https://api.audd.io/',
});


/* export const soundAPI = {
    getMusicFromLyrics(lyrics) {
        let formData = new FormData();
        formData.append('lyrics', lyrics);
        formData.set('return', 'deezer');
        return instance.get(`findLyrics/?q=${lyrics}&api_token=${api_token}`).then(response => {
            return response.data;
        })
    }
} */