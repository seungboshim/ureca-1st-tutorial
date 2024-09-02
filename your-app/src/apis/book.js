import axios from "axios";

export const getBookList = async (setState) => {
    try {
        const response = await axios.get('http://localhost:8080/book/list');
        setState(response.data);
    } catch (error) {
        console.error(error);
    }
}

export const getBook = async (isbn, setState) => {
    try {
        const response = await axios.get(`http://localhost:8080/book/get?isbn=${isbn}`);
        setState(response.data);
    } catch (error) {
        console.error(error);
    }
}

export const addBook = async (book) => {
    try {
        await axios.post('http://localhost:8080/book/add', book, {
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
        await axios.put(`http://localhost:8080/book/put?isbn=${isbn}`, book);
    } catch (error) {
        console.error(error);
    }
}

export const deleteBook = async (isbn) => {
    try {
        await axios.delete(`http://localhost:8080/book/delete?isbn=${isbn}`);
    } catch (error) {
        console.error(error);
    }
}