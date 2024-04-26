import apiConfig from '../api/config';
import Offer from '../models/Company/offer';



export const key = 'offer';

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//HTTP Requests
export const getAll = async (): Promise<Offer[]> => {
    try {
        const response = await apiConfig.get(`${key}`);
        return response.data;
    } catch (error) {
        throw new Error(`Error al obtener ofertas`);
    }
};

export const getById = async (id: number): Promise<Offer> => {
    try {
        const response = await apiConfig.get(`${key}/${id}`);
        return response.data;
    } catch (error) {
        throw new Error(`Error al obtener oferta por ID`);
    }
};
export const create = async (newProfileData: Offer): Promise<Offer> => {
    try {
        const response = await apiConfig.post(`${key}`, newProfileData);
        return response.data;
    } catch (error) {
        throw new Error(`Error al crear el perfil`);
    }
  }
  export const updateById = async (id: number, updatedProfileData: Offer): Promise<Offer> => {
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