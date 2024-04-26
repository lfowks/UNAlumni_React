import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Profile.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import InfoProfile from './components/infoProfile/InfoProfile';
import ImageProfile from './components/imageProfile/ImageProfile';
import ProjectSection from './components/projectSection/ProjectSection';
import Skills from './components/skills/Skills';
import JoinMe from './components/joinMe/JoinMe';
import Education from './components/education/Education';
import LanguageCard from './components/langageCard/LangageCard';
import { useQuery } from 'react-query';
import { getById } from '../../services/profileService';
import SkillsHeader from './components/skills/SkillsHeader';
import EducationHeader from './components/education/EducationHeader';
import CardProfile from './components/cardProfile/CardProfile';
import { useParams } from 'react-router-dom';



const Profile = () => {
  
    const { id } = useParams();
    const { data: profile, error, isLoading } = useQuery('Profile', () => getById(id));
   
    if(isLoading){
      return <div>Cargando..</div>
    }
    if (error) {
      return <div>Error al cargar el estudiante.</div>;
    }
    // {profile && profile.skills && profile.skills.map((item: any) => {
    //   const { skill, ...rest } = item;
    //   return {
    //     ...skill,...rest
    //   }
    // })}
      
      // profile.skills = profile?.skills.map((item: any) => { 
      //   const {skill , ...rest} = item
      //   return {
      //     ...skill,...rest
      //   }
      // });
    //   console.log(item.name);
    return (
      
<>
  <Container>
    <Row>
      <Col>
      
      {profile ? (
       <div>
        
       {profile && <InfoProfile key={profile.id} profile={profile} />}
        </div>
        ) : (
          <p>Cargando perfil...</p>
        )}
      </Col>
      <Col >
      {profile ? (
       <div>
        
       {profile && <ImageProfile key={profile.id}  image={profile.image} career={profile.career}/>}
        </div>
        ) : (
          <p>Cargando perfil...</p>
        )}
      
      </Col>
    </Row>
  </Container>

 
  <ProjectSection/>
  <div className='container'>
    <div className=''>
      <div className='row'>
      {profile?.projects ? (
        profile.projects.map((project: any, id: number) => (
          <Col>
          <CardProfile key={id} project={project} />
          </Col>
              
        ))
        ) : (
          <div>No hay proyectos disponibles.</div>
        )}
      </div>
    </div>

  </div>

  
  
 
  
{/* Termino el card */}


<Container> 
<SkillsHeader/>
<div className='' style={{  marginRight: '0px' }}>
  <div className="tech" style={{ display: 'flex', flexWrap: 'wrap' }}>
    {profile?.skills && Array.isArray(profile.skills) ? (
      profile.skills.map((skill: any, id: number) => (
        <div key={id} style={{ width: '15%', padding: '10px', boxSizing: 'border-box', textAlign: 'center' }}>
          <Skills name={skill.skill.name} url={skill.skill.icon} />
        </div>
      ))
    ) : (
      <div>No hay habilidades disponibles.</div>
    )}
  </div>
</div>
     
</Container>
  {/* Aqui Es la parte azul */}
  
    <JoinMe/>
   
  
  {/* Aqui Termino lap arte azul de contacteme */}
  <div className=''>
       <EducationHeader/>
        <div className='container'>
            <div className='row'>
                
            {profile?.educations && Array.isArray(profile.educations) ? (
            profile.educations.map((education: any, id: number) => (
              <div className='col-md-6' key={id}>
                <Education education={education} />
              </div>
            ))
          ) : (
            <div>No hay educaciones disponibles.</div>
          )}
                
                
            </div>
        </div>
    </div>
  <div className='container mt-5'>
        <h1 className='text_langages'>IDIOMAS</h1>
        <div className='container mt-5'>
            <div className='row'>
                
            {profile?.languages && Array.isArray(profile.languages) ? (
                profile.languages.map((language: any, id: number) => (
                  <div className='col' key={id}>
                    <LanguageCard
                      languages={language}
                      name={language.language.name}
                      icon={language.language.icon}
                    />
                  </div>
                ))
              ) : (
                <div>No hay lenguajes disponibles.</div>
              )}
                
            </div>
        </div>
      
  </div>

</>
    )
}
export default Profile