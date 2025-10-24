import express from "express";
import ticketRoutes from "./tickets/ticket.routes";

const app = express();
app.use(express.json());
app.use("/tickets", ticketRoutes);

export default app;
