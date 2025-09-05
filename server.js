server.jsconst express = require('express');
const path = require('path');
const app = express();

// Serve the static /public folder
app.use(express.static(path.join(__dirname, 'public')));

// Healthcheck route (helps Railway)
app.get('/health', (req, res) => res.send('OK'));

// Listen on the port Railway gives us
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
