import '../components/ProfileList.css';
import CardProfile from './CardProfile';

const List = () => {

    return (
        <div className="card-list">

            <div className="header-container">
                <h1 className="background-title">Estudiantes</h1>
                <p>Live for Influential and Innovative fashion!</p>
            </div>

            <div className="cards-container">
                <CardProfile/>
            </div>

        </div>

    );
};

export default List;