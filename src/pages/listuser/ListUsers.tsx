import { useState } from 'react';
import Filter from '../_layout/components/filter/Filter';
import CardProfile from './components/CardProfile';
import './listuser.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../companyList/CardContainer.css"

const ListUsers = () => {
  const [filterSkills, setFilterSkills] = useState<number[]>([]);
  return (
    <div className="card-list">

      <div className="header-container">
        <h1 className="background-title">Estudiantes</h1>
        <p>Live for Influential and Innovative fashion!</p>
      </div>

      <Filter setFilterSkills={setFilterSkills} />
      <div className="cards-container">
        <div className='row'>
          <CardProfile filterSkills={filterSkills} />
        </div>

      </div>

    </div>
  )
}

export default ListUsers