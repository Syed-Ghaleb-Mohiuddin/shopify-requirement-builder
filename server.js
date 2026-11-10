const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static('.'));

// Ensure data directory exists
const DATA_DIR = path.join(__dirname, 'data');
fs.mkdir(DATA_DIR, { recursive: true }).catch(console.error);

// Routes
app.post('/api/save-response', async (req, res) => {
    try {
        const { formData, clientInfo } = req.body;
        const timestamp = new Date().toISOString();
        const id = `response_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

        const responseData = {
            id,
            timestamp,
            clientInfo,
            formData,
            status: 'submitted'
        };

        // Save to file
        await fs.writeFile(
            path.join(DATA_DIR, `${id}.json`),
            JSON.stringify(responseData, null, 2)
        );

        // Also append to master file
        await fs.appendFile(
            path.join(DATA_DIR, 'responses.json'),
            JSON.stringify(responseData) + '\n'
        );

        res.json({
            success: true,
            id,
            message: 'Response saved successfully'
        });
    } catch (error) {
        console.error('Error saving response:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to save response'
        });
    }
});

app.get('/api/responses', async (req, res) => {
    try {
        const data = await fs.readFile(path.join(DATA_DIR, 'responses.json'), 'utf8');
        const responses = data.trim().split('\n').map(line => JSON.parse(line));
        res.json({ success: true, responses });
    } catch (error) {
        res.json({ success: true, responses: [] });
    }
});

app.get('/api/response/:id', async (req, res) => {
    try {
        const data = await fs.readFile(
            path.join(DATA_DIR, `${req.params.id}.json`),
            'utf8'
        );
        res.json({ success: true, response: JSON.parse(data) });
    } catch (error) {
        res.status(404).json({
            success: false,
            error: 'Response not found'
        });
    }
});

// Serve HTML for any other route
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
