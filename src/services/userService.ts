import api from "../api/config";

const urlEndpoint = `${api}/users`;

const getUsers = async (): Promise<any[]> => {
   const response = await fetch('../../src/mock/users.json');
   const result = await response.json();
   return result;
}


const getUsersById = async (id:number) : Promise<any> => {
    const response = await fetch(`${urlEndpoint}/${id}`);
    const result = await response.json();
    return result;
}

 export { getUsers, getUsersById }

 
