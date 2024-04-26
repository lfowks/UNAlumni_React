import { Button, Container } from 'react-bootstrap';
import '../joinMe/joinMe.css'


function JoinMe() {
    return (
    <div className="rectangle_abajo">
       <div className='container'>
        
       <div className="label mt-5 ">
                    <div className="participaci-n-ed">¿Te gustaría que fuera parte de tu proyecto?</div>
                    <div className="participaci-n-en2">There are many variations of passages of Lorem Ipsum available,
but the majority have suffered alteration.</div>
                
                </div>
              
           
            <Container className='btn-contactar'>
            <Button className=" mt-4" variant="danger">
                    Contactame 
                    <img
        src="https://cdn-icons-png.flaticon.com/512/7764/7764642.png"
        alt=""
        style={{ width: '20px', marginLeft: '5px'}}
      />
                </Button>
            </Container>
        </div>

    </div>
    );
  }
export default JoinMe;