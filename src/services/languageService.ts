import apiConfig from '../api/config';
import Language from '../models/Profile/language';


export const key = 'language';

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//HTTP Requests
const getAll = async (): Promise<Language[]> => {
    try {
        const response = await apiConfig.get(`${key}`);
        return response.data;
    } catch (error) {
        throw new Error(`Error al obtener idiomas`);
    }
};

const getById = async (id: number): Promise<Language> => {
    try {
        const response = await apiConfig.get(`${key}/${id}`);
        return response.data;
    } catch (error) {
        throw new Error(`Error al obtener idioma por ID`);
    }
};

export { getAll, getById }