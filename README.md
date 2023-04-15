# React ViewModel-first Approach with Context

This is a simple React app demonstrating the ViewModel-first approach using React Context and `useState` for state management.

## Overview

This project is built using Create React App and TypeScript. The main purpose of the project is to showcase how to implement the ViewModel-first approach in a React application.

### ViewModel-first Approach Explanation

In this example, the ViewModel-first approach is implemented by separating the ViewModel logic from the view components. The main idea behind this approach is to create a ViewModel that handles the application's state and logic, and then bind the ViewModel instance to the view components using React Context. This helps achieve a clean separation of concerns and makes the code more maintainable.

Here's why the given example follows the ViewModel-first approach:

1. The ViewModel is defined as an interface in `CounterModel.ts`. This interface declares the properties and methods that the ViewModel should have.
2. The `useCounterViewModel.ts` file contains the custom hook `useCounterViewModel`, which implements the ViewModel's logic using `useState`. This hook returns an instance of the ViewModel that adheres to the `CounterModel` interface.
3. The `CounterViewModelContext.tsx` file creates a React Context that will be used to provide the ViewModel instance to components in the application. It also exports a custom hook, `useCounterViewModelContext`, which is a convenient way to access the ViewModel instance in any component.
4. In the `App.tsx` file, the ViewModel instance is created by calling the `useCounterViewModel` hook. Then, the `CounterViewModelContext.Provider` is used to provide the ViewModel instance to the components in the application.
5. Finally, the `Counter.tsx` file represents the view component that consumes the ViewModel instance. The `useCounterViewModelContext` hook is used to access the ViewModel instance, and the view component interacts with the ViewModel to update and display the state.

By organizing the code this way, the ViewModel logic is encapsulated, and components can easily consume the ViewModel instance without having to manage the state and logic themselves. This approach helps achieve a clean separation of concerns and improves the code's maintainability and testability.

## Features

- ViewModel-first approach
- React Context for providing the ViewModel instance
- `useState` for state management

## Getting Started

### Prerequisites

Ensure you have Node.js and yarn installed on your local machine.

### Installation

1. Clone the repository:

```bash
git clone https://github.com/or2ooo/react-todo-app-mvvm-hooks.git
```

2. Install the dependencies:

```bash
yarn install
```

### Running the App

To run the app in development mode, execute the following command:

```bash
yarn start
```

Open [http://localhost:3000](http://localhost:3000) to view the app in the browser. The page will reload if you make edits, and you will see any lint errors in the console.

### Building the App

To build the app for production, run:

```bash
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
