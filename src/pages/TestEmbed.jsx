import React, { useEffect } from "react";

function TestEmbed() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://mmstaging.tacori.com/embed.js";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Clean up on unmount
    };
  }, []);

  return <div id="widget" data-url="/test-may-09"></div>;
}

export default TestEmbed;
