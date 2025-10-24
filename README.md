# MVP_TICKETING_BE

Available Scripts
In the project directory, you can run:

npm run dev
Runs the app in the development mode.
Open http://localhost:5000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

npm test
Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

npm run build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about deployment for more information.


| Method | Endpoint            | Body                                         |
| ------ | ------------------- | -------------------------------------------- |
| GET    | /tickets            | –                                            |
| POST   | /tickets            | { "title": "Bug", "description": "Fix bug" } |
| PATCH  | /tickets/:id/status | { "status": "done" }                         |


Postman screenshots :

<img width="1123" height="952" alt="image" src="https://github.com/user-attachments/assets/7f02a600-7fc2-458c-8052-c5bb5c32bff3" />

<img width="1155" height="911" alt="image" src="https://github.com/user-attachments/assets/63d85553-3b6d-4dab-a465-2f352456bea0" />

<img width="1119" height="804" alt="image" src="https://github.com/user-attachments/assets/7dead00b-778a-4fca-9a5f-b9bb89de3cff" />


