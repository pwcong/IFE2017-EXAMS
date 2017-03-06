export const ACTION_PLAYLIST_GET = 'ACTION_PLAYLIST_GET';
export function getPlayList(list){
    return ({
        type: ACTION_PLAYLIST_GET,
        payload: {
            list
        }
    });
}

export const ACTION_PLAYLIST_NEXT_MUSIC = 'ACTION_PLAYLIST_NEXT_MUSIC';
export function nextMusic(){
    return ({
        type: ACTION_PLAYLIST_NEXT_MUSIC
    });
}

export const ACTION_PLAYLIST_PREVIOUS_MUSIC = 'ACTION_PLAYLIST_PREVIOUS_MUSIC';
export function previousMusic(){
    return ({
        type: ACTION_PLAYLIST_PREVIOUS_MUSIC
    });
}

export const ACTION_PLAYLIST_SELECT_MUSIC = 'ACTION_PLAYLIST_SELECT_MUSIC';
export function selectMusic(count){
    return ({
        type: ACTION_PLAYLIST_SELECT_MUSIC,
        payload: {
            count
        }
    });
}