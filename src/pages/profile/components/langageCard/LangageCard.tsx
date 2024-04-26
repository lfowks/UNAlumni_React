import '../langageCard/langageCard.css'
import Languages from '../../../../models/Profile/profileLanguage';


type Props = {
  languages: Languages;
  name: string;
  icon: string;

};
function LanguageCard({languages, name, icon}:Props) {
    return (
<div className="card mb-3" style={{ maxWidth: '250px' }} key={languages.languageId}>
      <div className="row lngs">
        <div className="cols">
          <img
            src={icon}
            alt="Trendy Pants and Shoes"
            className="img rounded-start m-4"
          />
        </div>
        <div className="col">
          <div className="text-center">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">
            {languages.level}
            </p>
            <p className="card-text">
              
            </p>
          </div>
        </div>
      </div>
    </div>

    );
  }
export default LanguageCard;


