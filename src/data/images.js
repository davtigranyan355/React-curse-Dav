const images = [
    {
        id: 'image-1',
        name: 'Image 1',
        src: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D'
    },
    {
        id: 'image-2',
        name: 'Image 2',
        src: 'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D'
    },
    {
        id: 'image-3',
        name: 'Image 3',
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv5R_TCbEHyx_z3r72Dh5TGXMWp33gz5uE-A&s'
    }
];

export const getImages = () => {
    return images;
};

export const getImageDetail = (imageId) => {
    const image = images.find(item => item.id === imageId);

    return image;
}