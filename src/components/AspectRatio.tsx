import { ReactNode } from 'react';

interface AspectRatioProps {
  ratio?: number;
  children: ReactNode;
}

export default function AspectRatio({ ratio = 16 / 9, children }: AspectRatioProps) {
  return (
    <div className="relative w-full" style={{ paddingBottom: `${(1 / ratio) * 100}%` }}>
      <div className="absolute inset-0">
        {children}
      </div>
    </div>
  );
} 