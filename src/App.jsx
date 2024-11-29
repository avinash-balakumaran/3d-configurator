import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import ProductViewer from "./components/ProductViewer";
import { FABRIC_LIST } from "./constant/mock";

function App() {
  const [customization, setCustomization] = useState({
    fabric: "",
    arms: true,
    armColor: "#000",
  });

  return (
    <div className="app">
      <div className="productViewContainer">
        <Canvas>
          <ProductViewer customization={customization} />
        </Canvas>
      </div>
      <div className="customizerContainer">
        <div className="customizer">
          <b>Select a texture</b>
          <div className="fabricListGrid">
            {FABRIC_LIST.map((value) => (
              <>
                <img
                  src={value}
                  className="fabricThumbnail"
                  onClick={() => {
                    setCustomization({
                      ...customization,
                      fabric: value,
                    });
                  }}
                />
              </>
            ))}
          </div>
        </div>

        <div className="customizer">
          <b>Arm</b>

          <div className="radioContainer">
            <div className="radioSubContainer">
              <input
                type="radio"
                className="radio"
                checked={customization.arms}
                id="arm"
                onChange={(e) => {
                  console.log(e.target.checked);
                  setCustomization({
                    ...customization,
                    arms: true,
                  });
                }}
              />
              <label className="radioLabel" for="arm">
                Enable
              </label>
            </div>

            <div className="radioSubContainer">
              <input
                type="radio"
                className="radio"
                checked={!customization.arms}
                id="armless"
                onChange={(e) => {
                  console.log(e.target.checked);
                  setCustomization({
                    ...customization,
                    arms: false,
                  });
                }}
              />
              <label className="radioLabel" for="armless">
                Disable
              </label>
            </div>
          </div>
        </div>

        <div className="customizer">
          <b>Arm Color</b>

          <div>
            <input
              type="color"
              value={customization.armColor}
              onChange={(e) => {
                setCustomization({
                  ...customization,
                  armColor: e.target.value,
                });
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
