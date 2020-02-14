import {createStore} from 'redux';


const initialState = {
    count: 0,
};


export type State = {
    count: number,
};


const INCREMENT = 'INCREMENT' as const;


export const increment = () => ({
    type: INCREMENT,
});


type Actions = (
    | ReturnType<typeof increment>
);


function reducer(state = initialState, action: Actions) {
    switch (action.type) {
    case INCREMENT:
        return {
            ...state,
            count: state.count + 1,
        };
    default:
        return state;
    }
}


export const initializeStore = (preloadedState = initialState) => {
    return createStore(
        reducer,
        preloadedState,
    );
};
