import { useContext } from "react";
import { GlobalContext } from "../../context";

const Personal = () => {
  const { header, style } = useContext(GlobalContext);
  const { name, image, tagline } = header;
  const { headerColor, imageStyle } = style;
  return (
    <div className="justify-content-center text-center">
      {image && (
        <img className={`${imageStyle}Display`} src={image} alt={name} />
      )}
      <h1 className="mt-4" style={{ color: headerColor }}>
        {name}
      </h1>
      <h3 className="mt-2">{tagline}</h3>
    </div>
  );
};

export default Personal;
