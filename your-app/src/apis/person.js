import axios from 'axios';

// export const getPersonList = async (setState) => {
//     try {
//         const result = await axios.get('http://localhost:8080/person/list');
//         // setState(result.data);
//         return result.data;
//     } catch (error) {
//         console.error(error);
//     }
// }

export const getPersonList = async (setState) => {
    axios.get('http://localhost:8080/person/list')
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.error(error);
        });
}