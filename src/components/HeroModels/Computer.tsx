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

  return <canvas ref={canvasRef} style={{ width: '80%', height: '90vh', paddingTop: '3vh', paddingBottom: '5vh', backgroundColor: 'black' }} />;
}