import { NextFunction, Request, Response } from 'express';
import { updateProfile } from '../services/profile/update-profile.service';

export const updateProfileController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const id = Number(req.params.id)
  const userId = res.locals.user.id;
  const { name, email, address, phone_number, image } = req.body;

  try {
    const updatedUser = await updateProfile(userId, {
      name,
      email,
      address,
      phone_number,
      image,
    });
    return res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
};
