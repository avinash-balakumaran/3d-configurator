import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import ProductViewer from "../components/ProductViewer";
import { NEW_FABRIC_LIST, WOOD_LIST } from "../constant/mock";

function SofaConfigurator() {
  const [customization, setCustomization] = useState({
    texture: {},
    wood: "/sofa/wood/wood1.jpg",
    color: "",
  });

  return (
    <div className="app">
      <div className="productViewContainer">
        <Canvas>
          <ProductViewer
            customization={customization}
            configurator="longSofa"
          />
        </Canvas>
      </div>

      <div className="customizerContainer">
        <div className="customizer">
          <b>Select a fabric</b>
          <div className="fabricListGrid">
            {NEW_FABRIC_LIST.map((value) => (
              <img
                src={value.color}
                height={100}
                width={100}
                onClick={() => {
                  setCustomization({
                    ...customization,
                    texture: value,
                  });
                }}
              />
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

export default SofaConfigurator;
