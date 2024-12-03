import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import ProductViewer from "../components/ProductViewer";
import { FABRIC_LIST } from "../constant/mock";

function HomePage() {
  const [customization, setCustomization] = useState({
    fabric:
      "https://assets.3dcloud.io/production/vcn/var/000052/00000557/Image/256.png",
    arms: true,
    armColor: "#000",
  });

  return (
    <>
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
            <b>Arm & caster Color</b>

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
    </>
  );
}

export default HomePage;
