import { localhostUserToModel } from '../mappers/localhost-user.mapper';
import { userModelToLocalhost } from '../mappers/user-to-localhost.mapper';
import { User } from '../models/user'

/**
 * 
 * @param {Like<User>} userLike 
 */
export const saveUser = async (userLike) => {

    const user = new User(userLike);

    if (!user.firstName || !user.lastName) {
        throw ("First Name and Last Name are required");
    }

    const userToSave = userModelToLocalhost(user);
    let userUpdated;

    if (user.id) {
        userUpdated = await updateUser(userToSave);
    } else {
        userUpdated = await createUser(userToSave);
    }

    return localhostUserToModel(userUpdated);
}

/**
 * @param {Like<User>} user
 */
const updateUser = async (user) => {

    const URL = `${import.meta.env.VITE_BASE_URL}/users/${user.id}`;
    const res = await fetch(URL, {
        method: 'PATCH',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        },
    });

    const updatedUser = await res.json();

    console.log({ updatedUser });

    return updatedUser;
}

/**
 * @param {Like<User>} user
 */
const createUser = async (user) => {

    const URL = `${import.meta.env.VITE_BASE_URL}/users`;
    const res = await fetch(URL, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        },
    });

    const newUser = await res.json();

    console.log({ newUser });

    return newUser;
}