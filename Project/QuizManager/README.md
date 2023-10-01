# Description
Backend of Quiz App using Express and typescript. MongoDB is used to store, fetch, update and delete the data. Learn how to create REST APIs like for register user,login user, create quiz, get quiz, publish quiz, report API and so on.

# Tools and Tech used
![Static Badge](https://img.shields.io/badge/Javascript-%23881337?logo=javascript)
![Static Badge](https://img.shields.io/badge/typescript-%230C4A6E?logo=typescript)
![Static Badge](https://img.shields.io/badge/mongodb-%2378350F?logo=mongodb)
![Static Badge](https://img.shields.io/badge/nodejs-%23701A75)
![Static Badge](https://img.shields.io/badge/express-%23365314)

## Features

- **User Authentication**: Secure your APIs with JWT-based user authentication.
- **Quiz Creation**: Create, edit, and manage quizzes.
- **Quiz Publishing**: Publish quizzes to make them accessible to users.
- **Quiz Taking**: Users can start quizzes, answer questions, and submit their tests.
- **Report Generation**: Access detailed reports for quiz analysis.
- **Database**: MongoDB is used as a scalable and robust database solution.

## API Domains
For API testing and interaction, you can refer to the following endpoints:

- **POST /auth/register**: Register a new user.
- **POST /auth/login**: Authenticate and log in a user.
- **POST /quizzes:** Create a new quiz.
- **GET /quizzes**: Retrieve a list of published quizzes.
- **GET /quizzes/:quizId**: Get details of a specific quiz.
- **POST /quizzes/start**: Start a quiz.
- **POST /quizzes/submit**: Submit a completed quiz.
- **GET /quizzes/reports**: View quiz reports.
