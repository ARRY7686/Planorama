import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import cityAndAirportSearch from './routes/cityAndAirportSearch.js';
import flightSearch from './routes/flightSearch.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors());

app.use('/', cityAndAirportSearch);
app.use('/flights', flightSearch);

app.listen(PORT, () => {
    console.log(`Server is running on: http://localhost:${PORT}`);
});
