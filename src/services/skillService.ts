import apiConfig from '../api/config';
import Skills from '../models/Profile/profileSkill';
import Skill from '../models/Profile/skill';


export const key = 'skill';
export const key2 = 'profile-to-skill';
///////////////////////////////////////////////////////////////////////////////////////////////////////////
//HTTP Requests
const getAll_skill = async (): Promise<Skill[]> => {
    try {
        const response = await apiConfig.get(`${key}`);
        return response.data;
    } catch (error) {
        throw new Error(`Error al obtener habilidades`);
    }
};
const getAll_skill_profile = async (): Promise<Skills[]> => {
    try {
        const response = await apiConfig.get(`${key2}`);
        return response.data;
    } catch (error) {
        throw new Error(`Error al obtener habilidades`);
    }
};

const getById = async (id: number): Promise<Skill> => {
    try {
        const response = await apiConfig.get(`${key}/${id}`);
        return response.data;
    } catch (error) {
        throw new Error(`Error al obtener habilidad por ID`);
    }
};

export { getAll_skill, getById, getAll_skill_profile }