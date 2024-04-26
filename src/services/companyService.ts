import apiConfig from '../api/config';
import Company from '../models/Company/company';



export const key = 'company';

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//HTTP Requests
export const getAll = async (): Promise<Company[]> => {
    try {
        const response = await apiConfig.get(`${key}`);
        return response.data;
    } catch (error) {
        throw new Error(`Error al obtener empresa`);
    }
};

export const getById = async (id: string|undefined): Promise<Company> => {
    try {
        const response = await apiConfig.get(`${key}/${id}`);
        return response.data;
    } catch (error) {
        throw new Error(`Error al obtener empresa por ID`);
    }
};
export const create = async (newProfileData: Company): Promise<Company> => {
    try {
        const response = await apiConfig.post(`${key}`, newProfileData);
        return response.data;
    } catch (error) {
        throw new Error(`Error al crear el perfil`);
    }
  }
  export const updateById = async (id: number, updatedProfileData: Company): Promise<Company> => {
    try {
        const response = await apiConfig.put(`${key}/${id}`, updatedProfileData);
        return response.data;
    } catch (error) {
        throw new Error(`Error al actualizar el perfil por ID`);
    }
  }
  export const removeById = async (id: number): Promise<void> => {
    try {
        await apiConfig.delete(`${key}/${id}`);
    } catch (error) {
        throw new Error(`Error al eliminar el perfil por ID`);
    }
 }