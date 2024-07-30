# Dalton Pettus Portfolio Site

This is a webapp built with React.js after being first initialized with `-create-react-app`. Its purpose is to serve as creator Dalton Pettus's portfolio and resume, as well as give a simple means of contacting the creator.

## Description

The website features a landing page from which the user can navigate to anywhere on the full site. Once the user clicks one of the links, the relevant page will be rendered. At this time, the landing page can only be returned to by clicking the site header, 'Dalton Pettus'.

The Contact Page displays only a Verbosity Slider and Quick Facts section at first. If a Quick Fact is selected, the corresponding, more verbose description will appear in the following box. If the Verbosity Slider is increased, more information will be displayed on the page, including the 'Longer Bio'. If the Verbosity Slider is decreased, information will be hidden from view until the page is nearly empty.

The Resume Page is an organized view of the creator's resume.

The Projects Page displays selected projects from the creator's coding history. Each projects features its title, the technologies used, a link to its GitHub repository, and a short description.

The Contact Page presents button links to the creator's LinkedIn profile and email. On desktop, the spacebar can be pressed to render a different background and properties for the buttons. Clicking the email button opens the native email app on the user's device. To deter bots from scraping the creator's email, the email is never available in the link's href attribute until the button is clicked. Once clicked, the href value is replaced with the correct email, but only long enough to open the user's email application. Then the email is once again replaced with different values.

## Getting Started

### Dependencies

- Node Project Manager version 5.2 or higher

### Executing Program

- The app can be run in development mode locally by using `npm start` from the project directory.

## Author

Dalton Pettus - [See GitHub Profile](https://github.com/Daltraxx)

## License

[MIT](https://choosealicense.com/licenses/mit/)