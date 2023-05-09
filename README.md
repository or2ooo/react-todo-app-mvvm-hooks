# React MVVM Pattern with Hooks

This is a simple React app demonstrating the Model-View-ViewModel (MVVM) pattern using React hooks.

## Overview

This project is built using Create React App and TypeScript. The main purpose of the project is to showcase how to implement the MVVM pattern in a React application using hooks, without relying on third-party libraries such as MobX, Redux, or the Context API.

In this example, the MVVM pattern is achieved by separating the model, view, and ViewModel logic. This helps achieve a clean separation of concerns and makes the code more maintainable and testable.

The project includes a simple counter component that demonstrates the MVVM pattern.

### MVVM Pattern Explanation

In this example, the MVVM pattern is implemented by separating the model, view, and ViewModel logic as follows:

1. The Model is defined in `CounterModel.ts`. This file represents the application's data and state.
2. The `useCounterViewModel.ts` file contains the custom hook `useCounterViewModel`, which connects the model and view by implementing the ViewModel layer. This hook returns an instance of the ViewModel.
3. The `Counter.tsx` file represents the view component that consumes the ViewModel instance. The `useCounterViewModel` hook is used to access the ViewModel instance, and the view component interacts with the ViewModel to update and display the state.
4. The `App.tsx` file serves as the main React component for the application.

By organizing the code this way, the MVVM pattern is achieved, and components can easily consume the ViewModel instance without having to manage the state and logic themselves. This approach helps achieve a clean separation of concerns and improves the code's maintainability and testability.

## Features

- MVVM pattern with hooks
- Clean separation of concerns
- Improved maintainability and testability

## Getting Started

### Prerequisites

Ensure you have Node.js and yarn installed on your local machine.

### Installation

1. Clone the repository:

```sh
git clone https://github.com/or2ooo/react-todo-app-mvvm-hooks.git
```

2. Install the dependencies:

```sh
yarn install
```

### Running the App

To run the app in development mode, execute the following command:

```sh
yarn start
```

Open [http://localhost:3000](http://localhost:3000) to view the app in the browser. The page will reload if you make edits, and you will see any lint errors in the console.

### Building the App

To build the app for production, run:

```sh
yarn build
```

The build will be minified and optimized for best performance, and it will be output to the `build` folder.

## Contributing

Contributions are welcome. Please follow these steps to contribute:

1. Fork the repository
2. Create a new branch (``` git checkout -b feature/MyNewFeature ```)
3. Commit your changes (``` git commit -m 'Add some feature' ```)
4. Push to the branch (``` git push origin feature/MyNewFeature ```)
5. Create a new Pull Request

## License

This project is licensed under the MIT License.
