import {BOX1_ACTION_ADD} from '../Constants';
//rxaction ninja
export const setStateToAdd = () => ({
    type: BOX1_ACTION_ADD,
});

export const add = () => {
    return dispatch => {
        dispatch(setStateToAdd());
    }
}
