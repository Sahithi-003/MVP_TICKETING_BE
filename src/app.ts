import express from 'express';
import cors from 'cors';
import ticketRoutes from './tickets/ticket.routes';

const app = express();

// Enable CORS for all origins (for dev)
app.use(cors());

app.use(express.json());
app.use('/tickets', ticketRoutes);

export default app;
