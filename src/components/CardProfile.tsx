import { useQuery } from 'react-query';

import Profile from '../models/Profile/profile';

import { getAll } from '../services/profileService';
import { Link } from 'react-router-dom';

const CardProfile = () => {
    const { data: profiles, isLoading, isError } = useQuery<Profile[]>('profiles', getAll);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error fetching users</div>;
    }

    return (
        profiles?.map((profile) => (
            <div className="card-profile" key={profile.id}>

                <div className="card-profile-image">
                    <img className='profile-image' src={profile.image} alt='' />
                </div>

                <div className="card-profile-content">
                    <p><strong>{profile.name} {profile.lastNameOne} {profile.lastNametwo}</strong></p>
                    <p>{profile.career}</p>

                    <div className="row-profile">
                        {profile.skills?.slice(0, 3).map((skill: any, id: number) => (
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
        ))
    );
};

export default CardProfile;