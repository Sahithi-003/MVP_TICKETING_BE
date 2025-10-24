import { AppDataSource } from "../config/db";
import { Ticket, TicketStatus } from "./ticket.entity";

export const ticketRepo = AppDataSource.getRepository(Ticket);

export const TicketService = {
  getAll: async () => ticketRepo.find(),
  create: async (data: Partial<Ticket>) => ticketRepo.save(data),
  updateStatus: async (id: number, status: TicketStatus) =>
    ticketRepo.update(id, { status }),
  getById: async (id: number) => ticketRepo.findOneBy({ id }),
};
