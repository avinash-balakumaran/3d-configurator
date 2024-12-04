import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import ProductViewer from "../components/ProductViewer";
import { FABRIC_LIST, WOOD_LIST } from "../constant/mock";

function Configurator() {
  const [customization, setCustomization] = useState({
    fabric:
      "https://assets.3dcloud.io/production/vcn/var/000052/0000055b/Image/256.png",
    wood: "/sofa/wood/wood1.jpg",
    color: "",
  });

  return (
    <div className="app">
      <div className="productViewContainer">
        <Canvas>
          <ProductViewer
            customization={customization}
            isConfigurator={true}
            configurator="sofa"
          />
        </Canvas>
      </div>

      <div className="customizerContainer">
        <div className="customizer">
          <b>Select a fabric</b>
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
          <b>Select a wood</b>
          <div className="fabricListGrid">
            {WOOD_LIST.map((value) => (
              <>
                <img
                  src={value}
                  className="fabricThumbnail"
                  onClick={() => {
                    setCustomization({
                      ...customization,
                      wood: value,
                    });
                  }}
                />
              </>
            ))}
          </div>
        </div>

        <div className="customizer">
          <b>Select a Color</b>

          <div>
            <input
              type="color"
              value={customization.color}
              onChange={(e) => {
                setCustomization({
                  ...customization,
                  color: e.target.value,
                });
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Configurator;
