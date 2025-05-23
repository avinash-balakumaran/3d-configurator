import React from "react";

function TestIframe() {
  return (
    <div>
      <iframe
        src="https://mmstaging.tacori.com/test-embed-script/"
        style={{
          minHeight: "100vh",
          width: "-webkit-fill-available",
        }}
      ></iframe>
    </div>
  );
}

export default TestIframe;
