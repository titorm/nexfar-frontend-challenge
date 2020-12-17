# Nexfar Frontend Challenge

Mobile application developed in React Native to Nexfar frontend challenge.

## Description:

The application aims to:

1. List products on products page;
   - Add products to shopping cart;
   - Remove products from shopping cart;
2. List products added to shopping cart page;
   - Remove products from shopping cart page;
3. Sum the product total cost on cart page footer;

## Bugs Found:

I am aware that currently the application has two bugs, they appear to be only visual problems and will be corrected as soon as possible.

The bugs found are:

1. Description of one of the products (product name: "vit e gel c/30 pcs") is displayed out of position (displayed to right compared to other products).
2. When adding items to the cart, accessing the cart and removing the items there, when the user returns to the products page, the quantity of items added previously remains (visually), but the cart count as empty.

## Project Decisions:

1. In the product entitled "SHAMPOO HIDRA THERAPY 300ML-PH ACTION COSMETICS", an inconsistency in the price field was identified (instead of ** price ** is ** prices **). Therefore, the decision was made not to display the inconsistent product, as it differs from the others (in this case, it is via JSON return, however, the decision was made considering that the data came from an API).

In this case, the ideal solution is to communicate to the backend team to correct the particular product so that after corrected, it will be displayed in the app again.

## Future Improvements:

1. Add shimmer effect while product cards load.
2. Disable the decrease quantity button on the product card when the quantity is zero.
3. Add new features, such as:
   - Login page;
   - Information page;
   - User page;
   - Checkout page;
4. Add app personalized Icon and Name;

## Prerequisites:

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

**Cloning the repository:**

Assuming you have your machine pre-configured to clone github repositories (if you have not configured it, visit [this documentation](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh)), clone the repository using the following command in the terminal:

```
git clone git@github.com:wcamposs/nexfar-frontend-challenge.git
```

**Installation and configuration:**

Install and configure the environment to run the application, following [this tutorial](https://medium.com/@jeancabral/instalando-e-configurando-react-native-no-ubuntu-18-04-e3329ac090a0).

**Installing ADB and Fastboot:**

You will also need to install adb and fastboot, so through the terminal, install them using the following commands:

```
sudo apt-get update
sudo apt install android-tools-adb android-tools-fastboot
```

To check the adb version, run:

```
adb version
```

**Expo Installation:**

Expo is used to serve the application and run on both a physical device and an emulator. Install it using the following command on the terminal:

```
npm install expo-cli --global
```

**Yarn Installation (optional):**

Yarn is a dependency manager, it is used to install the dependencies required for the project (it has the same role as **npm**). If you want to use it (personally I prefer), install it through [this tutorial](https://classic.yarnpkg.com/en/docs/install/#debian-stable).

**Project dependencies installation:**

To install the dependency packages used in this project, follow the steps below:

After cloning the repository, access its root folder using the terminal and execute one of the commands below according to the package manager you use (npm or yarn):

1. Using Yarn:

```
yarn install
```

2. Using NPM:

```
npm install
```

After installation, the project can be considered configured and ready to run.

## Getting Started:

Assuming you are in the root directory via a terminal, run the following command to run Expo:

1. Using Yarn:

```
yarn start
```

2. Using NPM:

```
npm start
```

## Running Application:

The application can be executed in two ways:

- Using visual interface (that opens automatically after **yarn start** or **npm start**)
- Using commands via terminal (the options will be shown after execute **yarn start** or **npm start**)

### Running Application via Interface:

A new tab will be opened in the default browser with some options to run the project using Expo.

**PS:** Make sure your phone and computer are on the same WiFi!

1. If you want to run on an Android or iOS emulator, make sure that the virtual device is configured and running, then select one of the options below in the expo interface via browser:

- Run on Android device / emulator
- Run on iOS simulator

2. If you want to run through the browser, select the option:

- Run in web browser

3. If you want to run the project on a physical device (Android or iOS):

**Android:**

- Install the Expo app on the device through the app store. After installation, run the application, select the option **scan with QRCode** and scan the QRCode that is displayed in the lower left corner on the tab that was automatically opened in the browser using the device's camera.

**iOS:**

- Copy the url shown in the browser above the QRCode.
- Open Expo App in your mobile device, and click on the second tab 'Explore' and enter the URL that starts with exp://192.168... This is a local connection to your computer. You will see your app running in a minute.

(I personally recommend that the project be executed on a mobile device, regardless of whether it is a physical device or an emulator).

### Running Application via Terminal:

Just as a new tab is executed by the browser, the same information is also displayed in the terminal, to execute it, type the command for the desired option:

1. If you want to run on an Android emulator, type on terminal:

```
a
```

2. If you want to run on an iOS emulator, type on terminal (this option will appear only if you have an iOS device configured):

```
i
```

3. If you want to run the project on a physical device (Android or iOS):

**Android:**

- Install the Expo app on the device through the app store. After installation, run the application, select the option **scan with QRCode** and scan the QRCode displayed in the terminal using the device's camera.

## Running App Build:

The repository contains an android build of the application, it is located in the **builds** directory, to install it, go to the build directory and run the following command:

```
adb install nexfar-technical-challenge-signed.apk
```

## Built With:

- [React Native](https://reactnative.dev/) - The framework used
- [Expo](https://expo.io/) - Open-source platform used for build and serve the application for Android, iOS, and web.
