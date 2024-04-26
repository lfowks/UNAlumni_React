import apiConfig from '../api/config';
import Project from '../models/Profile/project';

export const key = 'project';

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//HTTP Requests
const getAll = async (): Promise<Project[]> => {
    try {
        const response = await apiConfig.get(`${key}`);
        return response.data;
    } catch (error) {
        throw new Error(`Error al obtener proyectos`);
    }
};

const getById = async (id: number): Promise<Project> => {
    try {
        const response = await apiConfig.get(`${key}/${id}`);
        return response.data;
    } catch (error) {
        throw new Error(`Error al obtener proyecto por ID`);
    }
};

export { getAll, getById }








