import prisma from '@/prisma';

export const getEventsService = async () => {
  try {
    const events = await prisma.event.findMany();
    return events;
  } catch (error) {
    throw error;
  }
};
