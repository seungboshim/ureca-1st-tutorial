import axios from "axios";

export const loginMember = async (member) => {
    try {
        const response = await axios.post('http://localhost:8080/book/login', member);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}