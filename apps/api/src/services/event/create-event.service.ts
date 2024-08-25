import prisma from '@/prisma';
import { cloudinaryUpload } from '@/lib/cloudinary';

interface CreateEventBody {
  title: string;
  address: string;
  thumbnail: string;
  price: number;
  startDate: Date;
  endDate: Date;
  quota: number;
  booked: number;
  description: string;
}

export const createEventService = async (
  body: CreateEventBody,
  file: Express.Multer.File,
  userId: number,
) => {
  try {
    const {
      title,
      address,
      price,
      startDate,
      endDate,
      quota,
      description,
    } = body;

    const event = await prisma.event.findFirst({
      where: { title },
    });

    if (event) {
      throw new Error('Title already in use');
    }
    const { secure_url } = await cloudinaryUpload(file);
    return await prisma.event.create({
      data: {
        title,
        address,
        thumbnail: secure_url,
        price: Number(price),
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        quota: Number(quota),
        description,
        userId: Number(userId),
      },
    });
  } catch (error) {
    throw error;
  }
};
