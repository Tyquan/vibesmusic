export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

export const sortByCategory = () => ({
    type: 'SORT_BY_CATEGORY'
});

export const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});
