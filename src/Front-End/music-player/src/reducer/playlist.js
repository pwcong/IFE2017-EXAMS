import {
    ACTION_PLAYLIST_GET,
    ACTION_PLAYLIST_NEXT_MUSIC,
    ACTION_PLAYLIST_PREVIOUS_MUSIC
} from '../actions/playlist';


export const INITIAL_STATE = {

    current: 0,
    list: [
        // {
        //     name: '平行線',
        //     mp3Url: 'http://m2.music.126.net/eCoW2uVQQ6GdQwIjDNG3eg==/18804947371676180.mp3',
        //     duration: 299186,
        //     artists: [
        //         { name: 'さユり', id: 1116297 },
        //     ],
        //     album: {
        //         name: '平行線 (通常盤)',
        //         id: 35233104,
        //         picUrl: 'http://p4.music.126.net/3FWZWqgheKmNzv1QYwnqHw==/18623527953098191.jpg'
        //     }
        // },
    ]

};

export default (state = INITIAL_STATE, action) => {

    switch(action.type){

        case ACTION_PLAYLIST_GET:
            return ({
                current: 0,
                list: action.payload.list
            });
        case ACTION_PLAYLIST_NEXT_MUSIC:
            return Object.assign({}, state, {
                current: (state.current + 1) % state.list.length
            });

        case ACTION_PLAYLIST_PREVIOUS_MUSIC:
            return Object.assign({}, state, {
                current: (state.current + state.list.length -1 ) % state.list.length
            });

        default:
            return state;

    }

}
