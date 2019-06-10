const videosReducerDefaultState = [];

export default (state = videosReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_VIDEO':
            return [
                ...state,
                action.video
            ];
        case 'REMOVE_VIDEO':
            return state.filter(({id}) => id !== action.id);
        case 'EDIT_VIDEO':
            return state.map((video) => {
                if (video.id === action.id) {
                    return {
                        ...video,
                        ...action.updates
                    };
                } else {
                    return video;
                };
            });
        default:
            return state;
    }

};