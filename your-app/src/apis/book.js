import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL;

export const getBookList = async (setState) => {
    try {
        const response = await axios.get(`${BASE_URL}/book/list/all`);
        setState(response.data);
    } catch (error) {
        console.error(error);
    }
}

export const getBookListWithPage = async (page, setState) => {
    try {
        const response = await axios.get(`${BASE_URL}/book/list?page=${page}`);
        setState(response.data);
    } catch (error) {
        console.error(error);
    }
}

export const getBook = async (isbn, setState) => {
    try {
        const response = await axios.get(`${BASE_URL}/book/get?isbn=${isbn}`);
        setState(response.data);
    } catch (error) {
        console.error(error);
    }
}

export const addBook = async (book) => {
    try {
        await axios.post(`${BASE_URL}/book/add`, book, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
    } catch (error) {
        console.error(error);
    }
}

export const editBook = async (isbn, book) => {
    try {
        await axios.put(`${BASE_URL}/book/put?isbn=${isbn}`, book, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
    } catch (error) {
        console.error(error);
    }
}

export const deleteBook = async (isbn) => {
    try {
        await axios.delete(`${BASE_URL}/book/delete?isbn=${isbn}`);
    } catch (error) {
        console.error(error);
    }
}