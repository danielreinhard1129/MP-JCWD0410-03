import prisma from '@/prisma';
import { getEventsService } from '@/services/event/get-events.service';
import { NextFunction, Request, Response } from 'express';

export class EventController {
  async getEvents(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await getEventsService();
      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }
}

console.log('Hello');
