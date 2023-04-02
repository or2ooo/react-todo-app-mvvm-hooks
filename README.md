# React Todo App with MVVM, Hooks, and MobX

This is a simple Todo App built using React, Hooks, and MobX, following the Model-View-ViewModel (MVVM) pattern.

## Table of Contents

- [Getting Started](#getting-started)
- [Features](#features)
- [Project Structure](#project-structure)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [Code of Conduct](#code-of-conduct)
- [License](#license)

## Getting Started

To get started, follow these steps:

1. Clone the repository:
```bash
git clone https://github.com/your-username/react-todo-app-mvvm-hooks.git
```

2. Change the current working directory:
```bash
cd react-todo-app-mvvm-hooks
```

3. Install dependencies:
```bash
yarn
```

4. Run the development server:
```bash
yarn start
```

Now you should be able to access the app at [http://localhost:3000](http://localhost:3000).

## Features

- Add and remove todos
- Mark todos as completed
- Reactive UI updates using MobX
- Custom ViewModel hook for managing state and actions
- Styling using CSS modules

## Project Structure

- `src/`
  - `App.jsx`: The main application component that renders the `TodoApp` component.
  - `TodoApp.jsx`: The component responsible for rendering and managing the todo list.
  - `TodoModel.js`: The model representing the todo data structure and operations.
  - `useTodoViewModel.js`: The custom ViewModel hook that manages state and actions for the `TodoApp` component.
  - `index.js`: The entry point of the React application.
  - `index.css`: The global CSS styles.
  - `TodoApp.css`: The CSS styles specific to the `TodoApp` component.

## Technologies

- [React](https://react.dev/): A JavaScript library for building user interfaces.
- [Hooks](https://react.dev/reference/react): Functions that let you use state and other React features without writing a class.
- [MobX](https://mobx.js.org/): A state management library for React that makes it simple to manage the state of your application.
- [MVVM](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93viewmodel): A software architectural pattern that separates the UI from the underlying business logic and data.

## Contributing

Please see [CONTRIBUTING.md](CONTRIBUTING.md) for details on how to contribute to this project.

## Code of Conduct

Please see [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) for details on our code of conduct.

## License

This project is licensed under the MIT License. See [LICENSE.md](LICENSE.md) for details.
