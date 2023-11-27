import * as request from "../lib/request";


const baseUrl = 'http://localhost:3030/jsonstore/children';

// export const getAll = async () => {

    
//     const response = await fetch(baseUrl);
//     const result = await response.json();

//     const data = Object.values(result);
//     return data;
   

// };

// export const getOne = async (userId) => {
//     const response = await fetch(`${baseUrl}/${userId}`);
//     const result = await response.json();

//     return result;
// }
// export const create = async (data) => {
//     const body = {
//         firstName: data.firstName,
//         lastName: data.lastName,
//         email: data.email,
//         imageUrl: data.imageUrl,
//         phoneNumber: data.phoneNumber,
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString(),
//         address: {
//             country: data.country,
//             city: data.city,
//             street: data.street,
//             streetNumber: data.streetNumber
//         }
//     };

//     const response = await fetch(baseUrl, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(body),
//     })

//     const result = await response.json();
//     console.log(result);

//     return result;

// };

// export const remove = async (userId) => {
//     const response = await fetch(`${baseUrl}/${userId}`, {
//         method: 'DELETE'
//     });
//     const result = await response.json();

//     return result;
// };

export const getAll = async () => {
    const result = await request.get(baseUrl);

    return Object.values(result);
};
export const getOne = async (child_id) => {
    console.log(child_id);
    const result = await request.get(`${baseUrl}/${child_id}`, );

    return result;
}

export const create = async (childData) => {
    const result = await request.post(baseUrl, childData);

    return result;
};

