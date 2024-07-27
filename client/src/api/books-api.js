import * as request from './requester';

const BASE_URL = 'http://localhost:3030/jsonstore/books';

// export const getAll = async () => {
//     await request.get(BASE_URL);
// }

export const getAll = async () => {
    const result = await request.get(BASE_URL);

    const games = Object.values(result);

    return games;
}

export const getOne = (gameId) => request.get(`${BASE_URL}/${gameId}`);

const booksAPI = {
    getAll,
    getOne,
}

export default booksAPI;