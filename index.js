const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
    console.log('🔔 Webhook received:', JSON.stringify(req.body, null, 2));
    res.sendStatus(200);
});

app.get('/', (req, res) => {
    res.send('LINE Webhook is running!');
});


sfdsfsfd
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});
