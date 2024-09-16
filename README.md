# Parcel

- Dev Build
- Local Server
- HMR Hot Module Replacement
- Caching Faster Builds
- Image Optimization
- file minification
- file bundling
- consistent hashing
- code splitting
- differential bundling -> for support for older browser
- error handling
- Tree shaking - remove unused code
- different dev and production bundles

## JSX is different from hTMLL, it is HTML like syntax, JSX is not like HTML inside in javascript

## JSX stands for JavaScript XML

1B3028

## JSX is transpiled before it reaches JS engines and it is done by PARCEL through Babel, babel converts JSX to react.createElement

## React Component

- Class based component - OLD
- Functional Component - NEW

# React hooks

    They are normal JS utility functions
    -useState() -> superpowerful state variable -> whenever state variable update, react triggers reconciliation cycle(re-renders the component)
    -useEffect() -> this gets called after the component is rendered, once render cycle is finished, useEffect is called

# React uses reconciliation algorithm(react fiber)

- Whenever there is change in state variable, react will find the difference between virtual dome and it will
  re render the component

# Monolith architecture -> all the codes, like API, UI, authentication code, Database code are in same project

# microserver architecture -> here we have different service for different job, all service combined and forms a big app, All services talk to each other and form a big different application

    - Backend is different
    - Frontend is different
