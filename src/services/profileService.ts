import Profile from "../models/Profile/profile";
import apiConfig from "../api/config"

export const key = 'profile';//iba en prular pero no me hace logica 
// export const singleKey = 'profile';

export const getAll = async (): Promise<Profile[]> => {
  const result = await apiConfig.get(`/${key}`)
  return result.data
}
export const getById = async (id: string | undefined): Promise<Profile> => {
  const result = await apiConfig.get(`/${key}/${id}`)
  return result.data
}
export const create = async (newProfileData: Profile): Promise<Profile> => {
  try {
      const response = await apiConfig.post(`${key}`, newProfileData);
      return response.data;
  } catch (error) {
      throw new Error(`Error al crear el perfil`);
  }
}
export const updateById = async (id: number, updatedProfileData: Profile): Promise<Profile> => {
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
};
