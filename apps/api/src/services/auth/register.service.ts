import { hashPassword } from '@/lib/bcrypt';
import prisma from '@/prisma';
import { User } from '@prisma/client';
import { addMonths } from 'date-fns';
import { nanoid } from 'nanoid';

export const registerService = async (body: User) => {
  try {
    const { name, email, password, role, referal_number } = body;

    let referredUser;

    if (referal_number) {
      const referalNumberCheck = await prisma.user.findFirst({
        where: { referal_number },
        include: { user_points: true },
      });

      if (!referalNumberCheck) {
        throw new Error('Invalid referral');
      }

      referredUser = referalNumberCheck;
    }

    const existingUser = await prisma.user.findFirst({
      where: { email },
    });

    if (existingUser) {
      throw new Error('Email already exists');
    }

    const hashedPassword = await hashPassword(password!);

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        referal_number: nanoid(6),
        role,
      },
    });

    await prisma.userPoint.create({
      data: {
        userId: newUser.id,
        points: 0,
      },
    });

    const currentDate = new Date();
    const expiredPlusThreeMonths = addMonths(currentDate, 3);

    if (referredUser) {
      await prisma.userPoint.update({
        where: { userId: referredUser.id },
        data: {
          points: {
            increment: 10000, 
          },
          expired_date: expiredPlusThreeMonths,
        },
      });

      await prisma.rewardUser.create({
        data: {
          userId: newUser.id,
          status: 'NOT_USED',
          rewardId: 1,
        },
      });

      await prisma.reward.update({
        where: { id: 1 },
        data: {
          claimed: {
            increment: 1,
          },
        },
      });
    }

    return newUser;
  } catch (error) {
    throw error;
  }
};
