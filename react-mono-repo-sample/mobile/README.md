# Example application using React Native + Redux

This application also utilizes Typescript, Storybook and Ant Design.

## Run the application

### On simulator


```bash
yarn expo start -c

```

### storybook

```bash
yarn use-sb
yarn sb-rn-get-stories

#If you want to run it on the simulator, please use this command. You also may need 'shift + i'...
yarn expo start -c
```

### Application

```bash
yarn use-app
yarn expo start -c
```

## References

### Installation

### React Native

- https://docs.expo.dev/guides/typescript/#starting-from-scratch-using-a-typescript-template

### Storybook

- https://github.com/storybookjs/react-native/blob/next-6.0/MANUAL_SETUP.md
- https://stackoverflow.com/questions/59560312/getting-this-error-error-bundling-failed-error-unable-to-resolve-module-rea

If you encounter an error about 'react-native-safe-area-context' resolution, the following command can fix it.

```bash
yarn add react-native-safe-area-context
```


### Ant Design

- https://rn.mobile.ant.design/docs/react/introduce
- https://github.com/ant-design/ant-design-mobile-rn

### Redux

- https://redux.js.org/introduction/installation

## Commands

- https://reactnative.dev/docs/environment-setup
https://stackoverflow.com/questions/47709953/expo-change-default-ios-simulator