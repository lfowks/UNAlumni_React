import apiConfig from '../api/config';
import Education from '../models/Profile/education';


export const key = 'education';

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//HTTP Requests
const getAll = async (): Promise<Education[]> => {
    try {
        const response = await apiConfig.get(`${key}`);
        return response.data;
    } catch (error) {
        throw new Error(`Error al obtener educaciones`);
    }
};

const getById = async (id: number): Promise<Education> => {
    try {
        const response = await apiConfig.get(`${key}/${id}`);
        return response.data;
    } catch (error) {
        throw new Error(`Error al obtener educación por ID`);
    }
};

export { getAll, getById }