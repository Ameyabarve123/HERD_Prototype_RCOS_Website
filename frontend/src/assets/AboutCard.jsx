import "./aboutCard.css"

const AboutCard = ({ imageSrc, name, contentText, linkedIn }) => {
  // card that holds information for a paragraph in the about section
  return (
      <div id="aboutCardContainer">
        <a className="aboutCardLink" href={linkedIn}>
          <img className="aboutCardImg" src={imageSrc} alt="Developer Image" />
        </a>
        <h1>{name}</h1>
        <h3>{contentText}</h3>
      </div>
  );
};

export default AboutCard;
