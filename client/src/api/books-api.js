import * as request from './requester';

const BASE_URL = 'http://localhost:3030/jsonstore';

// export const getAll = async () => {
//     await request.get(BASE_URL);
// }

export const getAll = async () => {
    const result = await request.get(`${BASE_URL}/all-books`);

    const games = Object.values(result);

    return games;
}

export const getOneBook = (bookId) => request.get(`${BASE_URL}/all-books/${bookId}`);

const booksAPI = {
    getAll,
    getOneBook,
}

export default booksAPI;