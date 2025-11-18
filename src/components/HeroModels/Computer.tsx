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

  return <canvas  ref={canvasRef} style={{ width: '65%', height: '85%', backgroundColor: 'black', margin: 'auto', borderRadius: '80px', border: '2px solid #1a1a40'}} />;
}