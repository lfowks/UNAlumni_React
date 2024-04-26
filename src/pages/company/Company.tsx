import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getById } from "../../services/companyService";
import InfoCompany from "./components/infoCompany/infoCompany";
import { Col, Container, Row } from "react-bootstrap";
import ImageCompany from "./components/imageCompany/imageCompany";
import OferSection from "./components/offerSection/offerSection";
import ListOffer from "./components/listOffer/ListOffer";


const Company = () => {
  
    const { id } = useParams();
    const { data: company } = useQuery('company', () => getById(id));
    
    return(
        <div>
        <Container>
        <Row>
            <Col>
            {company ? (
                    <div>
        
            {company && <InfoCompany key={company.id} company={company} />}
                    </div>
                ) : (
                <p>Cargando perfil...</p>
                )}
        
            </Col>
            <Col>
            {company ? (
                    <div>
        
            {company && <ImageCompany key={company.id} image={company.image} name={company.name}   />}
                    </div>
                ) : (
                <p>Cargando perfil...</p>
                )}
            </Col>
        </Row>
                    
        
        </Container>
        
            <OferSection/>
            <div className='container'>
                <div className='row'>
                <div className='col-md-4 tech'>
                {company?.offers ? (
                    company.offers.map((offer: any, id: number) => (
                        <ListOffer key={id} offer={offer} />
                    ))
                    ) : (
                    <h5>No hay ofertas disponibles.</h5>
                    )}
                </div>
                </div>

            </div>

        </div>
    )

}
export default Company