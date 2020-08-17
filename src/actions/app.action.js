import { APP_ACTION_ADD, APP_ACTION_REM, APP_ACTION_CLR } from "../Constants";

/* ----------------ส่งข้อมูลให้ Reducer--------------------- */

//rxaction ninja
export const setStateToAdd = () => ({
    type: APP_ACTION_ADD,
});

// test
export const setStateToRem = () => ({
    type: APP_ACTION_REM,
});

export const setStateToClr = (payload) => ({
    type: APP_ACTION_CLR,
    payload
});


/* ----------------รับคำสั่งจาก Component--------------------- */

export const add = () => {
    //dispatch from redux-thunk make actipn->reducer async
    return dispatch => {
        /*
        setTimeout(()=>{
            dispatch(setStateToAdd())
        },1000);
        */
       dispatch(setStateToAdd());
       
    }
}

export const remove = () => {
    return dispatch => {
        dispatch(setStateToRem());
    }
}

export const clear = (payload) => {
    return dispatch => {
        dispatch(setStateToClr(payload));
    }
}