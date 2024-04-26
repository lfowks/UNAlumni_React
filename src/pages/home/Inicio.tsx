// Inicio.jsx

import './Inicio.css';

const Inicio = () => {
  return (
    <header>

      <div className="title-container">
        <h1>UNAlumni - Bolsa de Empleo Universitario</h1>
        <p>Bienvenido a la página donde podrás encontrar información sobre la bolsa de empleo universitario UNAlumni.</p>
        <p>Puedes registrarte como</p>

        <div className="button-container">
        <a className='button-rojo'>Empresa</a>
        <a className='button-azul'>Estudiante</a>
      </div>

      </div>
      
    </header>
  );
};

export default Inicio;
