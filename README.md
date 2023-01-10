# TailwindStorybookRepro

<a href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ **This workspace has been generated by [Nx, a Smart, fast and extensible build system.](https://nx.dev)** ✨

## To Reproduce
After running `npm ci` to install dependencies:

1. start storybook `nx storybook repro` and open it in a browser
2. in `packages/repro/src/lib/repro.tsx` add `p-8` class to the root `div` and `text-red-500 text-8xl font-bold` to the `h1` classes
3. note that none of the styles are applied
4. refresh the page manually
5. note that now the styles are applied

Reproduced in Firefox Developer Edition, Chrome, and Sizzy