import { User } from '@prisma/client';
import prisma from '@/prisma';
import { cloudinaryUpload } from '@/lib/cloudinary';

export const updateProfile = async (
  id: number,
  body: Partial<User>,
  file?: Express.Multer.File,
) => {
  try {
    const user = await prisma.user.findFirst({
      where: { id },
    });
    if (!user) {
      throw new Error('User not found!');
    }

    if (file) {
      const {secure_url} = await cloudinaryUpload(file)
      body.image = secure_url
    }

    const updatedUser = await prisma.user.update({
      where: { id},
      data: {...body}
    });

    return updatedUser;
  } catch (error) {
    throw error;
  }
};
