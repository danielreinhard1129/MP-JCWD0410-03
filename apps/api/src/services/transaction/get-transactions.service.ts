import prisma from '@/prisma';

export const getTransactionsService = async () => {
  try {
    const transactions = await prisma.transaction.findMany();
    if (!transactions) {
      throw new Error('No Transaction');
    }
    return transactions;
  } catch (error) {
    throw error;
  }
};
