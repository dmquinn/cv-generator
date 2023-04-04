import { useContext } from "react";
import { GlobalContext } from "../../context";

const Personal = () => {
  const { header, style } = useContext(GlobalContext);
  const { name, image, tagline } = header;
  const { headerColor, imageStyle, headerStyle } = style;
  return (
    <div
      className={
        headerStyle === "center"
          ? "justify-content-center text-center"
          : "d-flex flex-row px-5"
      }
    >
      {image && (
        <img className={`${imageStyle}Display`} src={image} alt={name} />
      )}
      <div className={headerStyle === "center" ? "" : "col p-3 py-5"}>
        <h1 className="mt-4" style={{ color: headerColor }}>
          {name}
        </h1>
        <h3 className="mt-2">{tagline}</h3>
      </div>
    </div>
  );
};

export default Personal;
