import prisma from '@/prisma';

export const getEventService = async (id: number) => {
  try {
    const events = await prisma.event.findFirst({
      where: { id },
    });

    if (!events) {
      throw new Error('Events not found');
    }

    return events;
  } catch (error) {
    throw error;
  }
};
