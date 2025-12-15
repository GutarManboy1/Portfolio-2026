import { Application } from '@splinetool/runtime';
import { useEffect, useRef } from 'react';

export default function SplineScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const app = new Application(canvasRef.current);
      app.load('https://prod.spline.design/goexvpk7PJ5fvpuh/scene.splinecode');
    }
  }, []);

  return <canvas  ref={canvasRef}/>;
}
