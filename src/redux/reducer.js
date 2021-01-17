import {createDraftSafeSelector} from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const CONTS = 'CONTS';

let initialState = {
}

// так будет написан редьюсер
/* const reducer = ( state = initialState, action) => {
    switch (action.type) {

        case actionCreator:
            return {
                someFromState: action.count
            }

        default:
            return state
    }
}
*/


// так будут писаться акшн криеторы (диспатчеры)
/* export let actionCreator = (count) => {
    return {
        type: CONTS,
        count
    }
} */

// для ахинсронных и для работы с апи вот такие

/* export const getMusicFromLyrics = (lyrics) => {
    return async (dispatch) => {
        let data = await soundAPI.getMusicFromLyrics(lyrics);
        dispatch(setLyricsData(lyrics));
        dispatch(getMusicData(data.result));
    }
} */


 // export default reducer;