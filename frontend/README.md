# Part 2: Frontend - User Directory Table

This is a React application that fetches and displays a list of users from the `https://reqres.in/api/users` API.

## Features Implemented
* User Table: Displays all users in a clean, sortable table.
* Data Fetching: Fetches data from *all* pages of the API on initial load to provide a complete dataset.
* Search: A single search bar filters users by first name, last name, or email in real-time.
* Sort: Table headers (First Name, Last Name, Email) are clickable to sort the data in ascending or descending order.
* Pagination: The combined user list is paginated locally.
* Filter:A dropdown allows filtering users by the first letter of their first name.
* Bonus: Loading Spinner: A loading spinner is displayed while the initial data fetch is in progress....
* Bonus: Mobile Responsive: The layout (controls, table) adapts to smaller screen sizes.

## Tech Stack
* React (with Hooks: `useState`, `useEffect`, `useMemo`)
* Native `fetch` API for data fetching
* CSS for styling (no UI libraries)

## How to Run
1.  Navigate to the `/frontend` directory.
2.  Install dependencies:
    npm install
3.  Start the development server:
    npm start
4.  Open [http://localhost:3000](http://localhost:3000) to view it in the browser.