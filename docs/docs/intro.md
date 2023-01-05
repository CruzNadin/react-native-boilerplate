---
sidebar_position: 1
---

## Getting Started

This project is a React Native boilerplate that can be used to kickstart a mobile application.

The boilerplate provides an optimized architecture for building solid cross-platform mobile applications through separation of concerns between the UI and business logic. It is fully documented so that each piece of code that lands in your application can be understood and used.

## Requirements

Node 12 or greater is required. Development for iOS requires a Mac and Xcode 10 or up, and will target iOS 11 and up.

You also need to install the dependencies required by React Native.  
Go to the [React Native environment setup](https://reactnative.dev/docs/environment-setup), then select `React Native CLI Quickstart` tab.  
Follow instructions for your given `development OS` and `target OS`.

## Quick start

To create a new project using the boilerplate simply run :

```
npx react-native init AwesomeProject --template @cruznadin/react-native-boilerplate
```

Assuming you have all the requirements installed, you can run the project by running:

- `yarn start` to start the metro bundler, in a dedicated terminal
- `yarn <platform>` to run the _platform_ application (remember to start a simulator or connect a device)
