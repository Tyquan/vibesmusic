import uuid from 'uuid';

export const addVideo = (
    {
        title = '',
        description = '',
        category = '',
        link = '',
        mainImage = '',
        views = 0,
        createdAt = 0
    } = {}
) => ({
    type: 'ADD_VIDEO',
    video: {
        id: uuid(),
        title,
        description,
        category,
        link,
        mainImage,
        views,
        createdAt
    }
});

export const removeVideo = ({id} = {}) => ({
    type: 'REMOVE_VIDEO',
    id
});

export const editVideo = (id, updates) => ({
    type: 'EDIT_VIDEO',
    id,
    updates
});