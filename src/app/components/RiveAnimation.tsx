"use client";
import RiveComponent from "@rive-app/react-canvas";
import { useEffect, useState } from "react";

const RiveAnimation = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }
  return (
    <div className="w-100 h-[500px]">
      <RiveComponent
        src="/je.riv"
        artboard="apanyan"
        animations={["selem"]}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default RiveAnimation;
