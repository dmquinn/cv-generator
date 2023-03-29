import { useContext } from "react";
import { GlobalContext } from "../../context";

const HeaderInputs = () => {
  const { setHeader, header, setStyle, style } = useContext(GlobalContext);
  const imageStylePicker = ["roundedThumbnail", "banner", "thumbnail"];
  const colorPicker = ["black", "#376692", "#802626", "#c36314", "#0c8333"];
  return (
    <form>
      <div className="mb-3 mt-3">
        <div className="mb-3">
          <input
            placeholder="Image URL"
            className="form-control"
            onChange={(e) => setHeader({ ...header, image: e.target.value })}
          />{" "}
          <p className="mt-3">Image Style</p>
          <div className="d-flex flex-row px-5">
            {imageStylePicker.map((img, i) => {
              return (
                <div
                  className={`m-2 ${img}`}
                  onClick={() => setStyle({ ...style, imageStyle: img })}
                  key={i}
                ></div>
              );
            })}
          </div>
        </div>
        <input
          placeholder="John Doe"
          className="form-control"
          onChange={(e) => setHeader({ ...header, name: e.target.value })}
        />
        <p className="mt-3">Color of Name</p>
        <div className="d-flex flex-row px-5">
          {colorPicker.map((color, i) => {
            return (
              <div className="form-check p-1" key={i}>
                <input
                  type="radio"
                  name="flexRadioDefault"
                  defaultChecked={color === "black"}
                  className="form-check-input"
                  style={{ backgroundColor: color }}
                  onChange={() => setStyle({ ...style, headerColor: color })}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="mb-3">
        <input
          placeholder="Full Stack Web Developer"
          className="form-control"
          onChange={(e) => setHeader({ ...header, tagline: e.target.value })}
        />
        <div id="emailHelp" className="form-text">
          Give a catchy tagline to stand out from the crowd!{" "}
        </div>
      </div>
    </form>
  );
};

export default HeaderInputs;
