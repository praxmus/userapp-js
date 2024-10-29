//import { localhostUserToModel } from '../mappers/localhost-user.mapper'
//import { User } from '../models/user';

/**
 * @param {String|Number} id
 */
export const deleteUserById = async (id) => {

    const URL = `${import.meta.env.VITE_BASE_URL}/users/${id}`;
    const res = await fetch(URL, {
        method: 'DELETE',
        //body: JSON.stringify(user),
        //headers: {
        //    'Content-Type': 'application/json'
        //},
    });

    const deleteResult = await res.json();

    //console.log({ updatedUser });

    return true;
}