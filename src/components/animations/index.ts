import type { ComponentType } from 'react';

type Loader = () => Promise<{ default: ComponentType }>;

/**
 * Every animation a slide can name in its `visual.component` frontmatter.
 * These are dynamic imports so each animation becomes its own chunk, loaded
 * only on the slide that uses it — a deck with thirty animations still ships
 * one to the learner.
 *
 * To add one: write the component, then add a line here.
 */
export const animations: Record<string, Loader> = {
  FetchDecodeExecute: () => import('./FetchDecodeExecute'),
  CacheLocality: () => import('./CacheLocality'),
};

export const isAnimation = (name: string) => name in animations;
