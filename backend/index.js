const app = require('./app'); // Import the main app logic
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`To-Do API server listening at http://localhost:${port}`);
});
