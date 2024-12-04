import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import ProductViewer from "../components/ProductViewer";
import { FABRIC_LIST, NEW_FABRIC_LIST, WOOD_LIST } from "../constant/mock";

function Configurator() {
  const [customization, setCustomization] = useState({
    // fabric:
    //   "https://assets.3dcloud.io/production/vcn/var/000052/0000055a/Image/256.png",

    texture: {},
    wood: "/sofa/wood/wood1.jpg",
    color: "",
  });

  return (
    <div className="app">
      <div className="productViewContainer">
        <Canvas>
          <ProductViewer customization={customization} isConfigurator={true} />
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

            {/* {FABRIC_LIST.map((value) => (
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
            ))} */}
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
