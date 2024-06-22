# Simple Form App

This is a React Native application built with Expo that features a simple form. The app collects user information and submits it to a Google Cloud Function, which then stores the data in a Google Cloud BigQuery table.

## Features

- Simple user interface with a form containing three fields: Name, Age, and Favorite Color
- Data submission to Google Cloud BigQuery via a Google Cloud Function
- Built with Expo for easy development and deployment

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js installed on your local machine
- Expo CLI installed (`npm install -g expo-cli`)
- An Expo account (you can sign up at https://expo.dev/)
- A Google Cloud Platform account with BigQuery set up

## Installation

To install Simple Form App, follow these steps:

1. Clone the repository:
```
git clone https://github.com/Mehbin0/Sample-App.git
```
2. Navigate to the project directory:
```
cd simple-form-app
```
3. Install the dependencies:
```
npm install
```
## Configuration

1. Update the Cloud Function URL in `App.js`:
Replace `YOUR_CLOUD_FUNCTION_URL` with the actual URL of your deployed Google Cloud Function.

2. (Optional) Modify the `eas.json` file to customize your build settings.

## Usage

To run the app locally:

1. Start the Expo development server:
```
   expo start
```

2. Use the Expo Go app on your mobile device to scan the QR code and run the app, or run it in an emulator.

## Building for Distribution

To create a standalone binary:

1. Run the build command:
```
eas build -p android --profile preview
```
(For iOS, use `-p ios` instead)

2. Follow the prompts and wait for the build to complete.

3. Download the APK (for Android) or IPA (for iOS) file from the provided URL.

## Contributing

Contributions to the Simple Form App are welcome. Please feel free to submit a Pull Request.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## Contact

If you want to contact me, you can reach me at `mehbinac@gmail.com`.
