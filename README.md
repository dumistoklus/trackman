# Trackman demo

## How to install
```
npm i
```

## How to run
```
npm run dev
```

## AI agents used
- Claude for bug fixes.
- Gemini for code completion.
- MCP figma server to compare the design and the code.

The code suggested by AI agents is not perfect, so it was reviewed and refined.
Sometimes, agents find bugs that don't exist.
Sometimes, they use code that has errors to justify errors elsewhere in the project.

## What I would improve if I had more time
- Accessibility
- Write tests. Sadly, I didn't have enough time to write any unit tests.
- Write Storybook.
- Write visual regression tests.
- Add stylelint.
- Configure eslint to sort imports and add my favorite plugins.
- Speak with the designer about the `Card` component and that we shouldn't put interactive elements into interactive elements.
- Speak with the designer about the default state of the `Selector` component: it is not clear from the design when exactly it should be implemented. It seems that the default state is redundant.
- Speak with the designer about the fact that the original file name won't be shown.
- Add form validation. 
- Add action reactions.
- Add focus management to the `Dropdown` component.
- Change `react-router` to TanStack Router. It is clear from the description that it is required to use code splitting by route, which is supported by TanStack Router out of the box.

## Interesting places to see
- `FormSelect` component and its styles: native implemnation.