export default (videos, {text, sortBy}) => {
    return videos.filter((video) => {
        return video.description.toLowerCase().includes(text.toLowerCase());
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'category') {
            return a.category < b.category ? 1 : -1;
        }
    });
};