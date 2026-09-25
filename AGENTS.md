## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Content

This site is a set of courses, each a sequence of *concepts* — one idea, with its own
explanation, notation key and knowledge check. Uploaded slides are source material, not
structure.

To import slides or a deck and turn them into concepts, use the **`upload-content` skill**
(`.claude/skills/upload-content/`). It covers the PDF and HTML-deck paths, how to ground
explanations in the real slide text, and the house style for writing concepts.

```
npm run import:pdf -- <slides.pdf> <course-id> <section-id>
npm run content:extract -- <deck.html> --out slides.txt
npm run content:status [course-id]
```

To mark which concepts a quiz or lab has tested, and add prerequisites to them, use the
**`mark-assessed` skill** (`.claude/skills/mark-assessed/`). Re-run it whenever new quizzes or labs
arrive; each run only handles sources not yet mapped.

```
npm run assessed:extract -- <course-id>
npm run assessed:apply -- <course-id> <spec.json>
```

Content model and frontmatter: `README.md` and `src/content.config.ts`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
