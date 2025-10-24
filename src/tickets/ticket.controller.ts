import { Request, Response } from "express";
import { TicketService } from "./ticket.service";

export const TicketController = {
  getAll: async (req: Request, res: Response) => {
    const tickets = await TicketService.getAll();
    res.json(tickets);
  },

  create: async (req: Request, res: Response) => {
    const ticket = await TicketService.create(req.body);
    res.status(201).json(ticket);
  },

  updateStatus: async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const { status } = req.body;
    await TicketService.updateStatus(id, status);
    res.json({ message: "Status updated" });
  },
};
