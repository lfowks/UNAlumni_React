import { useQuery } from "react-query";
import Company from "../../models/Company/company";
import { getAll } from "../../services/companyService";
import { Link } from "react-router-dom";
import "../companyList/company.css"

const CardCompany = () => {
  const { data: companies, isLoading, isError } = useQuery<Company[]>('companies', getAll);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching companies</div>;
  }

  return (
    <>
      {companies?.map((company) => (
        <div className="card-company" key={company.id}>
          <div className="card-company-image">
            <img src={company.image} className="img-company" alt={company.name} />
          </div>
          <div className="card-company-content">
            <p><strong>{company.name}</strong></p>
            <p>{company.address}</p>
            <hr />
            <div className="card-company-buttons">
              <Link to={`/companyList/${company.id}`} className="more-button">
                Ver más
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default CardCompany;