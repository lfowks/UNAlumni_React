
import '../infoProfile/infoProfile.css'
import mailVector from '../../../../../src/assets/img/mail-vector.svg';
import phone from '../../../../../src/assets/img/phone-call.svg';
import linkedin from '../../../../../src/assets/img/linkedin.svg';
import github from '../../../../../src/assets/img/github.svg';
import Button from 'react-bootstrap/esm/Button';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Profile from '../../../../models/Profile/profile';

type Props = {
  profile: Profile;
};
const InfoProfile = ({profile}:Props) =>  {

  const renderTooltip = (props: any) => (
    <Tooltip id="button-tooltip" {...props}>
      {profile.phone}
    </Tooltip>
  );
  const renderTooltipGithub = (props: any) => (
    <Tooltip id="button-tooltip" {...props}>
      
      {profile.github}
      
    </Tooltip>
  );
  const renderTooltipLinkedin = (props: any) => (
    <Tooltip id="button-tooltip" {...props}>
      
      {profile.linkedin}
      
    </Tooltip>
  );
  const renderTooltipEmail = (props: any) => (
    <Tooltip id="button-tooltip" {...props}>
      
      {profile.email}
      
    </Tooltip>
  );
// console.log(profile)
    return (
       <div>
        
            <div>
              <div className="d-none d-sm-block">
                <div className="row">
                    <div className="col-sm-2 contact-frame iconos-perfil">
                      <div className="d-flex flex-column align-items-center mt-5">
                      <div className="mb-2 mt-2">
                        
                        <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }} overlay={renderTooltipEmail}>
                                <a href={profile.email}>
                                <img className="mail-vector" alt="Mail vector" src={mailVector} />
                                </a>
                          </OverlayTrigger>
                      </div>
                      <div className="mb-2 mt-2">
                      <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }} overlay={renderTooltipLinkedin}>
                                <a href={profile.linkedin}>
                                <img className="linkedin" alt="Linkedin" src={linkedin} />
                                </a>
                          </OverlayTrigger>
                      
                      </div>
                      <div className="mb-2 mt-2">
                      <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }} overlay={renderTooltipGithub}>
                                <a href={profile.github}>
                                <img className="github" alt="Github" src={github} />
                                </a>
                          </OverlayTrigger>
                      
                      </div>
                      <div className="mb-2 mt-2">
                         <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }} overlay={renderTooltip}>
                                <a href={`tel:${profile.phone}`}>
                                  <img className="phone-call" alt="Phone call" src={phone} />
                                </a>
                          </OverlayTrigger>
                      </div>
                      </div>
                    </div>
                    <div className="col-sm-8">
                      <div className="container">
                          <h5 className='mt-3'>Perfil Electrónico</h5>
                          <h1 className='mt-4'>{profile.name} {profile.lastNameOne} {profile.lastNametwo}</h1>
                          <h6 className='mt-2'>Email: {profile.email}</h6>
                          <h5 className='mt-3'>{profile.summary}</h5>
                          
                          <Button  className="md mt-4 mb-3" variant="danger">
                            Descargar CV
                          </Button>
                      </div> 
                    </div>
                    
                </div>
              </div>
              <div className="d-block d-sm-none">
              <div className="container">
                  <h5 className='mt-3'>Perfil Electrónico</h5>
                  <h1 className='mt-4'>{profile.name}</h1>
                  <h5 className='mt-4'>{profile.summary}Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto fina</h5>

                  <Button  className="md mt-4 mb-3" variant="danger">
                    Descargar CV
                  </Button>
                  
                  <img className="mail-vector m-2" alt="Mail vector" src={mailVector} />
                  <img className="linkedin m-1" alt="Linkedin" src={linkedin}/>
                  <img className="github m-1" alt="Github" src={github} />
                  <img className="phone-call m-1" alt="Phone call" src={phone} />

                  
              </div>
               
              </div>
            </div>
       </div>

    );
  }
export default InfoProfile;