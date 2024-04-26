import '../cardProfile/CardProfile.css'
import Project from '../../../../models/Profile/project';


type Props = {
    project: Project;
  };
  
function CardProfile({ project }:Props) {
    const startDateString = project.startDate; 
    const startDate = new Date(startDateString);
    const formattedStartDate = startDate.toLocaleDateString();
    const startDateString2 = project.finishDate; 
    const startDate2 = new Date(startDateString2);
    const formattedStartDate2 = startDate2.toLocaleDateString();
    return (
        <div className="card-profile" key={project.id}>
    <div className="card-profile-image2">
        <img src={project.image} alt='' />
    </div>
    <div className="card-profile-content">
        <p className='card-texts'>{formattedStartDate}-{formattedStartDate2}<img className="date" src="https://cdn.pixabay.com/photo/2022/05/19/18/09/calendar-7207895_1280.png" alt="" /></p>
        <h6><b>{project.title}</b></h6>
        <p className='card-description'>{project.description}</p>

        <div className="row-profile">
            <img className='iconos-habilidades' src="https://cdn-icons-png.flaticon.com/512/5968/5968332.png" alt="" />
            <img className='iconos-habilidades' src="https://cdn-icons-png.flaticon.com/512/732/732212.png" alt="" />
        </div>
    </div>
</div>
        // <div className='text-center'>
        //     <Card className="custom-card" style={{ width: '18rem' }}>
        //         <Card.Img variant="top" src={project.image} />
        //         <Card.Body>
        //             <p className='card-texts'>{formattedStartDate}-{formattedStartDate2}<img className="date" src="https://cdn.pixabay.com/photo/2022/05/19/18/09/calendar-7207895_1280.png" alt="" /></p>
        //             <h6><b>{project.title}</b></h6>
        //             <p className='card-description'>{project.description}</p>
        //             <Col className=''>
        //                 <img className='iconos-habilidades' src="https://cdn-icons-png.flaticon.com/512/5968/5968332.png" alt="" />
        //                 <img className='iconos-habilidades' src="https://cdn-icons-png.flaticon.com/512/732/732212.png" alt="" />
        //             </Col>
        //         </Card.Body>
        //     </Card>
        // </div>
        
    );
}



export default CardProfile;

