import prisma from '@/prisma';
import { PaymentMethod, TransactionStatus } from '@prisma/client';

interface CreateTransactionBody {
  eventId: number;
  qty: number;
  status: TransactionStatus;
  paymentMethod: PaymentMethod;
}

export const createTransactionService = async (
  body: CreateTransactionBody,
  userId: number,
) => {
  try {
    const { eventId, qty, status, paymentMethod } = body;

    const event = await prisma.event.findFirst({
      where: { id: eventId },
    });

    if (!event) {
      throw new Error('No such transaction');
    }

    if (event?.quota < qty) {
      throw new Error('Ticket sold out');
    }

    //pengurangan quota kalau tiket dibeli
    const updatedEvent = await prisma.event.update({
      where: { id: eventId },
      data: { quota: event.quota - qty },
    });

    const transaction = await prisma.transaction.create({
      data: {
        eventId: event.id,
        userId: userId,
        qty: qty,
        status: 'WAITING_FOR_PAYMENT',
        paymentMethod: paymentMethod,
      },
    });

    return transaction;
  } catch (error) {
    throw error;
  }
};
