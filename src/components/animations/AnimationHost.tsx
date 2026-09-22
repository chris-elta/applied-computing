import { Suspense, lazy, useMemo } from 'react';
import { animations } from './index';
import './stepframe.css';

/**
 * Astro can only hydrate a component it can statically import, so slides
 * hydrate this one host and it resolves the named animation on the client.
 */
export default function AnimationHost({ name }: { name: string }) {
  const Animation = useMemo(() => {
    const load = animations[name];
    return load ? lazy(load) : null;
  }, [name]);

  if (!Animation) {
    return <p className="stepframe__error">Unknown animation “{name}”.</p>;
  }

  return (
    <Suspense fallback={<div className="stepframe__loading" aria-hidden="true" />}>
      <Animation />
    </Suspense>
  );
}
