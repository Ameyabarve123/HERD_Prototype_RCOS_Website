import './contentCard.css';

const ContentCard = ({ imageSrc, flip, text, contentText }) => {
  return (
    <div id="container">
      {flip === "no" ? (
          <>
            <div className="boxes" id="imageHolder">
              <img className="cardImg" src={imageSrc} alt="Content Image" />
            </div>

            <div className="boxes" id="contentText">
              <h1>{text}</h1>
              <h3>{contentText}</h3>
            </div> 
          </>
        ): (
          <>
            <div className="boxes" id="contentText2">
              <h1>{text}</h1>
              <h3>{contentText}</h3>
            </div>
              
            <div className="boxes" id="imageHolder">
              <img className="cardImg2" src={imageSrc} alt="Content Image" />
            </div>
          </>
        )
      }
      
    </div>
  );
};

export default ContentCard;
