import { useQuery } from 'react-query';
import Profile from '../models/Profile/profile';
import { getAll } from '../services/profileService';
import { Link } from 'react-router-dom';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProfilesList = () => {

  const { data: profiles, isLoading, isError } = useQuery<Profile[]>('profiles', getAll);

  const shuffleArray = (array: any[]) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching users</div>;
  }

  const shuffledProfiles = shuffleArray(profiles || []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div className="card-list">

      <div className="header-container">
        <h1 className="background-title">Conoce los Perfiles Electrónicos</h1>
        <p>Live for Influential and Innovative fashion!</p>
        <Link to="/profile/list" className="ver-mas-button">Ver Más</Link>
      </div>

      <div className="slider-container">
        <Slider className="slider" {...sliderSettings}>

          {shuffledProfiles.map((profile: Profile) => (
            <div className="card-profile" key={profile.id}>

              <div className="card-profile-image">
                <img src={profile.image} alt='' />
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
                  <Link to={`/profiles/${profile.id}`} className="more-button">
                    Ver Más
                  </Link>
                </div>

              </div>

            </div>
          ))}

        </Slider>
      </div>

    </div>
  );
};

export default ProfilesList;