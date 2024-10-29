import { localhostUserToModel } from '../mappers/localhost-user.mapper'
import { User } from '../models/user';

/**
 * 
 * @param {Number} page 
 * @returns {Promise<User[]>}
 */
export const loadUserByPage = async (page = 1) => {
    const URL = `${import.meta.env.VITE_BASE_URL}/users?_page=${page}`;

    const res = await fetch(URL);
    const { data } = await res.json();

    const users = data.map(userLike => localhostUserToModel(userLike));

    return users;
}