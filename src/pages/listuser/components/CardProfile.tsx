import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Profile from '../../../models/Profile/profile';
import { getAll } from '../../../services/profileService';
import Skill from '../../../models/Profile/skill';
type CardProfileProps = {
    filterSkills: number[];
  }
const CardProfile = ({ filterSkills }:CardProfileProps) => {
    const { data: profiles, isLoading, isError  } = useQuery('profiles', getAll);
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error fetching users</div>;
    }

      
    
 
  
    console.log(filterSkills);
 
    type FilteredProfilesProps = {
        profiles: any;
        filterSkills: number[];
      };
      function filterProfilesBySkillId({ profiles, filterSkills }: FilteredProfilesProps): Profile[] {
        return profiles.filter((profile: Profile) => {
            return profile.skills.some((skill: Skill) => filterSkills.includes(skill.skillId));
        });
    }
    
    const filteredProfiles = filterProfilesBySkillId({ profiles, filterSkills });
    const profilesToDisplay = filteredProfiles.length > 0 ? filteredProfiles : profiles;
    return (

        profilesToDisplay?.map((profile) => (
            <div className='col-md-4'>
                <div className="card-profile" key={profile.id}>

                <div className="card-profile-image">
                    <img className='profile-image' src={profile.image} alt='' />
                </div>

                <div className="card-profile-content">
                    <p><strong>{profile.name} {profile.lastNameOne} {profile.lastNametwo}</strong></p>
                    <p>{profile.career}</p>

                    <div className="row-profile">
                        {profile.skills?.slice(0, 4).map((skill: any, id: number) => (
                            <div key={id}>
                                <div className="icon-profile">
                                    <img src={skill.skill?.icon} alt="" />
                                    <p>{skill.skill?.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <hr />

                    <p className="description">Soy un estudiante apasionado por el diseño UX/UI con habilidades en Fullstack</p>

                    <div className="card-profile-buttons">
                        <button className="message-button">Mensaje</button>
                        <Link to={`/profile/${profile.id}`} className="more-button">
                            Ver Más
                        </Link>
                    </div>

                </div>

                </div>
            </div>
        ))
    );
};

export default CardProfile;
