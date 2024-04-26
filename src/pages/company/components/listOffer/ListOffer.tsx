import { Button, Card, Container } from "react-bootstrap"
import { Link } from "react-router-dom";
import Offer from "../../../../models/Company/offer";
import Skills from "../../../profile/components/skills/Skills";


type Props = {
    offer: Offer;
  };
const CompanyList = ({offer}:Props) => {

    
    console.log(offer.id);
    return (
      
      <div>
          <ul>
          <div className='container mt-3'>
          <a href="/?tag=css"><span className="cursor-pointer text-xs font-semibold px-4 py-2 rounded-full bg-blue-500 text-white">css</span></a>
        </div>
            <Card className="custom-card" style={{ width: '18rem' }} key={offer.id}>
            {/* <Card.Img variant="top" src={offer.jobName} /> */}
            <Card.Body className='text-center'>
              <Card.Title>{offer.job}</Card.Title>
              <Card.Text>
                {offer.description}
              </Card.Text>
              <Container>
              {offer?.skills && Array.isArray(offer.skills) ? (
                offer.skills.map((skill: any, id: number) => (
              <div className="col tech2" key={id}>
              <Skills key={id} name={skill.skill.name} url={skill.skill.icon} />
              </div>
                ))
              ) : (
                <div>No hay habilidades disponibles.</div>
              )}
              </Container>  
              <Link to={`/companyList/${offer.id}`}><Button className='mt-3' variant="primary">Aplicar</Button></Link>
            </Card.Body>
          </Card>
              
          
          </ul>
      </div>
      
    )
  }
  
  export default CompanyList