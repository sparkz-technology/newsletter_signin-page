# Newsletter Signup App

This is a simple app that allows users to sign up for a newsletter using Mailchimp API.

## Features

- Express server with static files and favicon
- Body-parser middleware for parsing form data
- HTTPS module for making requests to Mailchimp API
- Dotenv module for loading environment variables
- Custom HTML pages for success and failure scenarios

## Installation

To run this app, you need to have Node.js and npm installed on your machine. You also need to have a Mailchimp account and an API key.

1. Clone this repository or download the zip file.
2. Navigate to the project folder and run `npm install` to install the dependencies.
3. Create a `.env` file in the root directory and add your Mailchimp API key as `API_KEY`.
4. Run `node app.js` to start the server.
5. Open your browser and go to `http://localhost:3000` to see the app.

## Usage

To use the app, simply enter your first name, last name and email address in the form and click on the "Subscribe" button. You will be redirected to either a success page or a failure page depending on the result of the API request. You can also check your Mailchimp dashboard to see if the user was added to your list.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
