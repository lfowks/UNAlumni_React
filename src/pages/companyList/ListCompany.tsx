import '../companyList/Company.css';
import CardCompany from './CardCompany';
import "../../pages/companyList/CardContainer.css"

const ListCompany = () => {

    return (
        <>
        <div className="card-list">

            <div className="header-container">
                <h1 className="background-title">Compañias</h1>
                <p>Live for Influential and Innovative fashion!</p>
            </div>

            <div className="cards-container">
                <CardCompany/>
            </div>

        </div>
</>
    );
};

export default ListCompany;