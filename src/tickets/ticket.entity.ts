import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

export type TicketStatus = "new" | "in-progress" | "done";

@Entity()
export class Ticket {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column("text")
  description!: string;

  @Column({
    type: "enum",
    enum: ["new", "in-progress", "done"],
    default: "new",
  })
  status!: TicketStatus;
}
