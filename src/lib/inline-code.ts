export type PartKind = 'text' | 'code' | 'strong' | 'em';
export type Part = { kind: PartKind; text: string };

// `code` first so backticked content is claimed before anything inside it can
// be read as emphasis, and `**` before `*` so bold wins over italic.
const PATTERN = /(`[^`]+`|\*\*[^*]+\*\*|\*[^*]+\*)/g;

/**
 * Splits a plain string into inline-markup runs: `code`, **strong**, *em*, and
 * text. Frontmatter — question text, notation glossaries — is data, not MDX, so
 * it gets no markdown processing of its own; without this the reader sees the
 * punctuation. Splitting rather than building HTML means nothing in the content
 * can inject markup, and an unmatched marker is simply left as text.
 */
export function splitInline(text: string): Part[] {
  return text
    .split(PATTERN)
    .filter((part) => part !== '')
    .map((part): Part => {
      if (part.length > 2 && part.startsWith('`') && part.endsWith('`')) {
        return { kind: 'code', text: part.slice(1, -1) };
      }
      if (part.length > 4 && part.startsWith('**') && part.endsWith('**')) {
        return { kind: 'strong', text: part.slice(2, -2) };
      }
      if (part.length > 2 && part.startsWith('*') && part.endsWith('*')) {
        return { kind: 'em', text: part.slice(1, -1) };
      }
      return { kind: 'text', text: part };
    });
}
