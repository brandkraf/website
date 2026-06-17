import React, { Suspense, lazy } from 'react';

const Spline = lazy(() => import('@splinetool/react-spline'));

export function SplineScene({ scene, className }) {
  return (
    <Suspense
      fallback={
        <div className="flex h-full w-full items-center justify-center">
          <span className="h-8 w-8 animate-spin rounded-full border-2 border-white/20 border-t-white/80" />
        </div>
      }
    >
      <Spline scene={scene} className={className} />
    </Suspense>
  );
}

export default SplineScene;
