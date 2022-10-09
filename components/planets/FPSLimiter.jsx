import { useEffect } from "react";
import { useThree } from "@react-three/fiber";

/**
 https://github.com/pmndrs/react-three-fiber/discussions/667#discussioncomment-3026830
 * @param {{limit:number}} props;
 */
const FPSLimiter = ({ limit = 30 }) => {
  const { invalidate, clock, setFrameloop } = useThree();
  useEffect(() => {
    if (typeof limit !== "number" || limit <= 0) return;
    const interval = 1 / limit;
    if (Number.isNaN(interval) || !isFinite(interval)) return;
    let delta = 0;
    let willUnmount = false;
    setFrameloop("demand");
    function update() {
      if (willUnmount) return;
      requestAnimationFrame(update);
      delta += clock.getDelta();
      if (delta <= interval) return;
      invalidate();
      delta = delta % interval;
    }
    update();
    return () => {
      willUnmount = true;
    };
  }, [limit, invalidate, clock, setFrameloop]);

  return null;
};

export default FPSLimiter;
