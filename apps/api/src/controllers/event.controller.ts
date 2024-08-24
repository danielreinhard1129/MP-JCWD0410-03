import prisma from '@/prisma';
import { getEventService } from '@/services/event/get-event.service';
import { getEventsService } from '@/services/event/get-events.service';
import { NextFunction, Request, Response } from 'express';

export class EventController {
  async getEventsController(req: Request, res: Response, next: NextFunction) {
    try {
      const query = {
        take: parseInt(req.query.take as string) || 4,
        page: parseInt(req.query.page as string) || 1,
        sortBy: (req.query.sortBy as string) || 'createdAt',
        sortOrder: (req.query.sortOrder as string) || 'desc',
        search: (req.query.search as string) || '',
      };

      console.log(query);

      const result = await getEventsService(query);
      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }

  async getEventController(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await getEventService(Number(req.params.id));
      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }
}

console.log('Hello');
