import { EventController } from '@/controllers/event.controller';
import { uploader } from '@/lib/multer';
import { verifyToken } from '@/lib/verifyToken';
import { Router } from 'express';

export class EventRouter {
  private router: Router;
  private eventController: EventController;

  constructor() {
    this.eventController = new EventController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get('/', this.eventController.getEventsController);
    this.router.get('/:id', this.eventController.getEventController);
    this.router.post(
      '/',
      verifyToken,
      uploader().single('thumbnail'),
      this.eventController.createEventController,
    );
  }

  getRouter(): Router {
    return this.router;
  }
}
