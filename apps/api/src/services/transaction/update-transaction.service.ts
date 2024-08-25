import { cloudinaryUpload } from '@/lib/cloudinary';
import prisma from '@/prisma';
import { TransactionStatus } from '@prisma/client';

interface UpdateTransactionBody {
  status?: TransactionStatus;
  qty?: number;
  paymentProof: string;
}

export const updateTransactionService = async (
  transactionId: number,
  body: UpdateTransactionBody,
  file?: Express.Multer.File,
) => {
  try {
    const transaction = await prisma.transaction.findUnique({
      where: { id: transactionId },
    });

    if (!transaction) {
      throw new Error('Transaction not found');
    }

    // Periksa event, tetapi jika event belum dideklarasikan, akan menyebabkan kesalahan
    const event = await prisma.event.findUnique({
      where: { id: transaction.eventId },
    });

    if (!event) {
      throw new Error('Event not found');
    }

    if (file) {
      const { secure_url } = await cloudinaryUpload(file);
      body.paymentProof = secure_url;
    }

    const updatedTransaction = await prisma.transaction.update({
      where: { id: transactionId },
      data: {
        ...body,
      },
    });

    return updatedTransaction;
  } catch (error) {
    throw error;
  }
};
