// Basic type declaration for react-confetti since @types/react-confetti doesn't exist

declare module 'react-confetti' {
  import React from 'react';

  interface ReactConfettiProps {
    width?: number;
    height?: number;
    numberOfPieces?: number;
    friction?: number;
    wind?: number;
    gravity?: number;
    initialVelocityX?: number | { min: number; max: number };
    initialVelocityY?: number | { min: number; max: number };
    colors?: string[];
    opacity?: number;
    recycle?: boolean;
    run?: boolean;
    confettiSource?: {
      x?: number;
      y?: number;
      w?: number;
      h?: number;
    };
    tweenDuration?: number;
    onConfettiComplete?: (confetti: any) => void;
    drawShape?: (ctx: CanvasRenderingContext2D) => void;
    [key: string]: any; // Allow other props
  }

  const Confetti: React.FC<ReactConfettiProps>;
  export default Confetti;
} 