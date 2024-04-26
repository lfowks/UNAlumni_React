import '../education/education.css'
import Education from '../../../../models/Profile/education';


type Props = {
    education: Education;
  };
function Education({education}:Props) {
    const startDateString = education.startDate; 
    const startDate = new Date(startDateString);
    const formattedStartDate = startDate.toLocaleDateString();
    const FinishDateString = education.finishDate; 
    const finishDate = new Date(FinishDateString);
    const formattedFinishDate = finishDate.toLocaleDateString();
    return (
    <div>
        <div className="cards">
            <div className="boxs">
                {/* <div className="img">
                <img
            src="https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.webp"
            alt="Trendy Pants and Shoes"
            className="img-fluid rounded-start"
          />
                </div> */}
                <h2 className='mt-3'><span className='mt-4'>Inicio: {formattedStartDate} Final: {formattedFinishDate}</span></h2>
                <h5 className='text-start'> {education.name}</h5>
                <p className='text-start'>{education.description}</p>
                <p className='text-start'>Duración: {education.duration} horas.</p><br />
            </div>
        </div>

    </div>
    );
  }
export default Education;