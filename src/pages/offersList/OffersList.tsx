import { useQuery } from "react-query";
import { getAll } from "../../services/offerService";
import './offerList.css'
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import Skills from "../profile/components/skills/Skills";

const OffersList = () => {

    const { data: offer } = useQuery('offer', getAll);
    console.log(offer);
    return (
      <div>
        <div className="header-container">
        <h1 className="background-title">Ofertas</h1>
        <p>Consulte aqui las ofertas disponibles</p>
    </div>
        <div className="container">
          
          {
           offer?.map((offer: any)=>(
            <Card className="custom-card card-offer"  key={offer.id}>
            {/* <Card.Img variant="top" src={offer.description} /> */}
            <Card.Body className='text-center card-offer-body'>
              {console.log("hola" ,offer)}
              <Card.Title className="offer-title">{offer.job}</Card.Title>
              <Card.Text className="offer-description">
                {offer.description}
              </Card.Text>
              
              {offer?.skills && Array.isArray(offer.skills) ? (
                offer.skills.map((skill: any, id: number) => (
              <div className="col tech2 skill-container" key={id}>
              <Skills key={id} name={skill.skill.name} url={skill.skill.icon} />
              </div>
                ))
              ) : (
                <div>No hay habilidades disponibles.</div>
              )}
              <Card.Text className="offer-status">
                {offer.status}
              </Card.Text> 
              <Link to={""} ><Button className='mt-3' variant="primary">Ver Compañia</Button></Link>
            </Card.Body>
          </Card>
              
           ))
          }
        </div>
      </div>
    )
  }
  
  export default OffersList