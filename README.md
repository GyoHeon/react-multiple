# react-multiple

React-multiple is a JavaScript library for make multiple react root.

Most `React` projects start from an empty HTML. In such cases, the entire DOMs of the page are under the influence of a `react root`, making development straightforward. However, applying `React` to a project built with an already completed HTML like JSP or Thymeleaf has many differences from a typical `React` project.

For instance, consider a situation where you're applying CSR with `React` to a project that has SSR set up with Thymeleaf. You would need to set up `multiple react roots` through several `createRoot`. Transferring data between these `multiple react roots` is not common, and ensuring consistent rendering can be challenging.

The `react-multiple` library was created for such situations. Inspired by data manipulation in [`zustand`](https://github.com/pmndrs/zustand), it allows for easy data transfer between `multiple react roots` and ensures consistent rendering with ease.

## Usage

For instance, imagine you need to create a counter project. But think about a situation where you have to add this counter project to an already completed project with a button DOM and display DOM.

First, find the DOM where you want to attach the react root(component).
Second, use the `makeRoot` function to render the desired react component to the DOM.
Third, declare data shared across multiple react roots with `observeData`.
Lastly, make the `render` function, which is the return of `makeRoot`, observable to the data!

Under example show how this example works.

```html
<body>
  <button data-react="CountButton"></button>
  <div data-react="CountDisplay"></div>
  <script type="module" src="/src/observer.tsx"></script>
</body>
```

```tsx
// observer.tsx
```

Of course, you could ignore the existing layout and start over with React, but this would result in highly inefficient network traffic and workload. In such cases, using react-multiple allows you to proceed as follows.

If the project is vast and has a large layout processed with SSR, react-multiple is even more efficient.
