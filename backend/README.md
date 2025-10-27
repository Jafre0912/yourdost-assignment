Part 3: Backend - Simple To-Do CRUD API

This is a simple REST API for managing to-do items, built with Node.js and Express.

Features:
Professional Structure: Uses a Model-Controller-Route pattern to separate concerns.
/models: Handles data logic (currently in-memory).
/controllers: Contains all the business logic for each route.
/routes: Defines the API endpoints.
Full CRUD: Implements Create, Read, Update, and Delete functionality.
Validation: Includes input validation for creating tasks.
Bonus Field: Todos include a completed: true/false field.

How to Run
Navigate to the /backend directory.
Install dependencies:
npm install


Start the server:
npm start
The API will be running at http://localhost:3000.

API Endpoints
1. Get All Todos
URL: /todos
Method: GET
Success Response:
Code: 200 OK
Content:
[
  { "id": 1, "task": "Complete YourDOST assignment", "completed": false },
  { "id": 2, "task": "Submit the form", "completed": false }
]


2. Create a Todo
URL: /todos
Method: POST
Body (raw, JSON):

{
  "task": "Deploy my backend"
}


Success Response:
Code: 201 Created
Content:
{ "id": 3, "task": "Deploy my backend", "completed": false }


Error Response (Validation):
Code: 400 Bad Request
Content:

{ "error": "Task content is required" }


3. Update a Todo
URL: /todos/:id (e.g., /todos/1)
Method: PUT
Body (raw, JSON): (You can send one or both fields)

{
  "task": "Completed the YourDOST assignment!",
  "completed": true
}

Success Response:
Code: 200 OK
Content:

{ "id": 1, "task": "Completed the YourDOST assignment!", "completed": true }


Error Response (Not Found):
Code: 404 Not Found
Content:

{ "error": "Todo not found" }


4. Delete a Todo
URL: /todos/:id (e.g., /todos/2)
Method: DELETE

Success Response:
Code: 204 No Content
Error Response (Not Found):
Code: 404 Not Found

Content:
{ "error": "Todo not found" }