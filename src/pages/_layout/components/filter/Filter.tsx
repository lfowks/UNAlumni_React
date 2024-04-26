import { useQuery } from "react-query";
import { getAll_skill } from "../../../../services/skillService";
import { ToggleButton} from "react-bootstrap";
import './filter.css'
import { useState } from "react";

type FilterProps = {
  setFilterSkills: React.Dispatch<React.SetStateAction<number[]>>;
};
const Filter: React.FC<FilterProps> = ({ setFilterSkills }:FilterProps) =>{
    
    const { data: skill } = useQuery('Skill', getAll_skill);
    // const [selectedSkills, setSelectedSkills] = useState<number[]>([]);
    const [selectedSkills, setSelectedSkills] = useState<number[]>([]);
    

    const handleSkillToggle = (skillId: number) => {
       
              if (selectedSkills.includes(skillId)) {
                setSelectedSkills(selectedSkills.filter((id) => id !== skillId));
                setFilterSkills(selectedSkills.filter((id) => id !== skillId));
              } else {
                setSelectedSkills([...selectedSkills, skillId]);
                setFilterSkills([...selectedSkills, skillId]);
              }
            };
    return (
        <div className="box-Filter">
             <div className="Filter-tag">Filtrar por etiquetas</div> 
            <ul className="box-Filter-ul">
                
                {
                       
                     skill?.map((skill)=> (
                        //<Button className="skill-button" key={skill.id}> {skill.name}</Button>
                        <ToggleButton style={{borderRadius: "20px", } } 
                            key={skill.id}  
                            id="toggle-check" 
                             type="checkbox"
                            
                            value={skill.id}
                            variant={selectedSkills.includes(skill.id) ? 'danger' : 'outline-danger' }
                            className="skill-button"
                            onClick={() => handleSkillToggle(skill.id)}
                            > 
                            
                            {skill.name}  
                        </ToggleButton>
                           
                     ))
                     
                }
            </ul>
        </div>

    )
}

export default Filter