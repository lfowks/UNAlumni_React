import './imageCompany.css'

type Props = {
    image: string;
    name: string;
  };
function ImageCompany({ image, name }: Props) {
    return (
      <div className=''>
        <div className="box2">
          <div className="ellipse-roja2">
            <div className="ellipse2">
              <img src={image} alt="Imagen Superpuesta" className="ellipse-image2" />
            </div>
            <h6 className='text-center'>{name}</h6>
          </div>
        </div>
        {/* Mostrar la carrera en el h6 */}
        
        
      </div>
    );
  }
  
  export default ImageCompany;