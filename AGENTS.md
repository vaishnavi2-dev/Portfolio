<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project rules
- Single static page: all portfolio content lives in `src/components/portfolio/data.ts`; sections are components rendered from `src/routes/index.tsx`. Why: content edits stay in one place.
- Contact form posts from the browser directly to Web3Forms via `src/lib/contact.ts` (no backend); validation rules are covered by `src/test/contact.test.ts`. Why: brief requires no custom backend.
- Theme defaults to system preference via an inline script in `__root.tsx`; the toggle only flips the `.dark` class in memory (no storage). Why: brief forbids persisting the choice.
