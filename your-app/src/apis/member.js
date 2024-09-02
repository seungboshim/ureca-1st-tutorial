import axios from "axios";

export const loginMember = async (member) => {
    try {
        const response = await axios.post('http://localhost:8080/book/login', member);
        return response.data; // member 리턴함
    } catch (error) {
        console.error(error);
    }
}