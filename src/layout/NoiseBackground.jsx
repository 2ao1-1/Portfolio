import { useRef, useEffect } from "react";

export function NoiseBackground({
  patternSize = 5000,
  patternScaleX = 1,
  patternScaleY = 1,
  patternRefreshInterval = 2,
  patternAlpha = 15,
}) {
  const grainRef = useRef(null);

  useEffect(() => {
    const canvas = grainRef.current;
    const ctx = canvas.getContext("2d");
    let frame = 0;

    const patternCanvas = document.createElement("canvas");
    patternCanvas.width = patternSize;
    patternCanvas.height = patternSize;
    const patternCtx = patternCanvas.getContext("2d");
    const patternData = patternCtx.createImageData(patternSize, patternSize);
    const patternPixelDatalength = patternSize * patternSize * 4;
    function resize() {
      canvas.width = window.innerWidth * window.devicePixelRatio;
      canvas.height = window.innerHeight * window.devicePixelRatio;

      ctx.scale(patternScaleX, patternScaleY);
    }

    function updatePattern() {
      for (let i = 0; i < patternPixelDatalength; i += 4) {
        const value = Math.random() * 255;
        patternData.data[i] = value;
        patternData.data[i + 1] = value;
        patternData.data[i + 2] = value;
        patternData.data[i + 3] = value;
      }
      patternCtx.putImageData(patternData, 0, 0);
    }

    function drawGrain() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = ctx.createPattern(patternCanvas, "repeat");
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    function loop() {
      if (frame % patternRefreshInterval === 0) {
        updatePattern();
        drawGrain();
      }
      frame++;
      window.requestAnimationFrame(loop);
    }

    window.addEventListener("resize", resize);
    resize();
    loop();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [
    patternSize,
    patternScaleX,
    patternScaleY,
    patternRefreshInterval,
    patternAlpha,
  ]);

  return <canvas className="absolute inset-0 w-full h-vh" ref={grainRef} />;
}
