/**
 * Where the correct answer sits should not be something a learner can learn.
 * Authors tend to write it first, so choices are shuffled when a page is built.
 *
 * The shuffle is seeded from the question text, so a given question always comes
 * out in the same order: server and client renders agree, and a reload does not
 * rearrange options under the learner. Options like "All of the above" keep
 * their place at the end, since they only make sense there.
 */
const pinnedLast = /^\s*(all|none|both)\s+of\s+(the\s+)?(above|these)\b/i;

function hash(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619);
  return h >>> 0;
}

export function shuffleChoices<Q extends { ask: string; choices: { text: string }[] }>(questions: Q[]): Q[] {
  return questions.map((q) => {
    let seed = hash(q.ask);
    const rand = () => {
      seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
      return seed / 2 ** 32;
    };
    const movable = q.choices.filter((c) => !pinnedLast.test(c.text));
    const pinned = q.choices.filter((c) => pinnedLast.test(c.text));
    for (let i = movable.length - 1; i > 0; i--) {
      const j = Math.floor(rand() * (i + 1));
      [movable[i], movable[j]] = [movable[j], movable[i]];
    }
    return { ...q, choices: [...movable, ...pinned] };
  });
}
