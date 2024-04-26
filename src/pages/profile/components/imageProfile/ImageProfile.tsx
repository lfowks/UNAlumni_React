import '../imageProfile/imageProfile.css';

type Props = {
  image: string;
  career: string;
};

function ImageProfile({ image, career }: Props) {
  return (
    <div className='container'>
      <div className="box">
        <div className="ellipse-roja">
          <div className="ellipse">
            <img src={image} alt="Imagen Superpuesta" className="ellipse-image" />
          </div>
          <h6 className='mt-5 text-center text-white'>{career}</h6>
        </div>
      </div>
      {/* Mostrar la carrera en el h6 */}
      
    </div>
  );
}

export default ImageProfile;