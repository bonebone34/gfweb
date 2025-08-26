import { useEffect, useRef } from "react";
import * as THREE from "three";

// Extend Window interface to include VANTA and THREE
declare global {
  interface Window {
    VANTA?: any;
    THREE?: typeof THREE;
  }
}

export default function VantaBackground() {
  const vantaRef = useRef<HTMLDivElement | null>(null);
  const effectRef = useRef<any>(null);

  useEffect(() => {
    const loadScripts = async () => {
      const threeScript = document.createElement("script");
      threeScript.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js";
      threeScript.async = true;

      const vantaScript = document.createElement("script");
      vantaScript.src = "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.fog.min.js";
      vantaScript.async = true;

      // Load three.js
      await new Promise<void>((resolve) => {
        threeScript.onload = () => resolve();
        document.body.appendChild(threeScript);
      });

      // Load vanta.js
      await new Promise<void>((resolve) => {
        vantaScript.onload = () => resolve();
        document.body.appendChild(vantaScript);
      });

      // Initialize VANTA effect
      if (window.VANTA && vantaRef.current) {
        effectRef.current = window.VANTA.FOG({
          el: vantaRef.current,
          THREE: window.THREE || THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          highlightColor: 0xff00f0,
          midtoneColor: 0xd300ef,
          lowlightColor: 0xb60fad,
          baseColor: 0xffffff,
        });
      }
    };

    loadScripts();

    return () => {
      if (effectRef.current?.destroy) {
        effectRef.current.destroy();
      }
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      className="fixed inset-0 -z-10 w-full h-full"
    />
  );
}
