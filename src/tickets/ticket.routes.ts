import { Router } from "express";
import { TicketController } from "./ticket.controller";

const router = Router();

router.get("/", TicketController.getAll);
router.post("/", TicketController.create);
router.patch("/:id/status", TicketController.updateStatus);

export default router;
