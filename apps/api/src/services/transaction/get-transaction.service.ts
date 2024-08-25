import prisma from '@/prisma';

export const getTransactionService = async (id: number) => {
  try {
    const transactions = await prisma.transaction.findFirst({
      where: { id },
      include: { event: true },
    });

    if (!transactions) {
      throw new Error('Transaction not found');
    }
    return transactions;
  } catch (error) {
    throw error;
  }
};
