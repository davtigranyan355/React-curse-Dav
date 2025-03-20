import users from './mook/users.json';

export const findUser = (username) => {
    const foundUser = users.find(user => user.username === username);

    return foundUser;
};