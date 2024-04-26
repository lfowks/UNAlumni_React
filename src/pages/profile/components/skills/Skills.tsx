
import Card from 'react-bootstrap/esm/Card';
import '../skills/skills.css'

type Props = {
    name: string;
    url: string;
  };
function Skills({ name, url}: Props) {
    return (
    <div className="container">
        <Card className="border-0">
        <img className="icon-javscript text-center" alt="Icon javscript" src={url} />
            <div className="skills_name">{name}</div>
        </Card>
        
    </div>
    );
  }
export default Skills;