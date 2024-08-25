import { Event } from "./event";

export interface Transaction {
  id: number;
  userId: number;
  qty: number;
  eventId: number;
  // event dibawah ini adalah cara untuk menggabungkan ke table event, sebelum bisa gini, buat include dulu di getTransactionService
  event: Event;
  status: Status;
}

export enum Status {
  WAITING_FOR_PAYMENT = "WAITING_FOR_PAYMENT",
  WAITING_FOR_ADMIN_CONFIRMATION = "WAITING_FOR_ADMIN_CONFIRMATION",
  DONE = "DONE",
  REJECTED = "REJECTED",
  EXPIRED = "EXPIRED",
  CANCELED = "CANCELED",
}
