import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import mailVector from '../../../../../src/assets/img/mail-vector.svg';
import phone from '../../../../../src/assets/img/phone-call.svg';
import linkedin from '../../../../../src/assets/img/linkedin.svg';
import github from '../../../../../src/assets/img/github.svg';
import Company from "../../../../models/Company/company";

type Props = {
    company: Company;
  };
const InfoCompany = ({company}:Props) =>  {

    const renderTooltip = (props: any) => (
      <Tooltip id="button-tooltip" {...props}>
        {company.phone}
      </Tooltip>
    );
  // console.log(company)
      return (
         <div>
          
              <div>
                <div className="d-none d-sm-block">
                  <div className="row">
                      <div className="col-sm-2 contact-frame">
                        <div className="d-flex flex-column align-items-center mt-5">
                        <div className="mb-2 mt-2">
                          <img className="mail-vector" alt="Mail vector" src={mailVector} />
                        </div>
                        <div className="mb-2 mt-2">
                        <img className="linkedin" alt="Linkedin" src={linkedin} />
                        </div>
                        <div className="mb-2 mt-2">
                        <img className="github" alt="Github" src={github} />
                        </div>
                        <div className="mb-2 mt-2">
                           <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }} overlay={renderTooltip}>
                                  <a href={`tel:${company.phone}`}>
                                    <img className="phone-call" alt="Phone call" src={phone} />
                                  </a>
                            </OverlayTrigger>
                        </div>
                        </div>
                      </div>
                      <div className="col-sm-8">
                        <div className="container">
                            <h5 className='mt-3'>Perfil Empresa</h5>
                            <h1 className='mt-4'>{company.name} </h1>
                            <p>{company.description} </p>
                            <h6 className='mt-2'>Email: {company.email}</h6>
                            <h5 className='mt-3'>{company.website}</h5>
                            
                            <Button  className="md mt-4 mb-3" variant="danger">
                              Descargar CV
                            </Button>
                        </div> 
                      </div>
                      
                  </div>
                </div>
                <div className="d-block d-sm-none">
                <div className="container">
                    <h5 className='mt-3'>Perfil Empresa</h5>
                    <h1 className='mt-4'>{company.name}</h1>
                    <h5 className='mt-4'>{company.description}</h5>
  
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
  export default InfoCompany;