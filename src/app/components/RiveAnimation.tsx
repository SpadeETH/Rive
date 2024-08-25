import { useEffect } from "react";
import {
  useRive,
  Layout,
  Fit,
  Alignment,
  useStateMachineInput,
} from "@rive-app/react-canvas";

const RiveAnimation = () => {
  const { rive, RiveComponent } = useRive({
    src: "/speed.riv",
    artboard: "speedometer", // Assurez-vous que c'est le bon artboard
    stateMachines: "SM", // Utilisez la machine d'état correcte (nommée "SM" dans l'image précédente)
    layout: new Layout({
      fit: Fit.Cover, // Cover the container while maintaining aspect ratio
      alignment: Alignment.Center, // Center the animation within the container
    }),
    autoplay: true,
  });

  // Utilisation d'inputs pour contrôler les animations
  const clickInput = useStateMachineInput(rive, "SM", "click");

  const handleMouseEnter = () => {
    if (rive) {
      rive.play("hover-on"); // Si hover-on est une animation indépendante
    }
  };

  const handleMouseLeave = () => {
    if (rive) {
      rive.play("hover-off"); // Si hover-off est une animation indépendante
    }
  };

  const handleClick = () => {
    if (clickInput) {
      clickInput.fire(); // Déclenche l'input "click" pour la machine d'état "SM"
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{
        width: "30%", // Responsive width
        height: "90%", // Full viewport height
        cursor: "pointer",
      }}
    >
      <RiveComponent />
    </div>
  );
};

export default RiveAnimation;
