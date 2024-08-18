import {
  EventController,
} from '@/controllers/event.controller';
import express from 'express';
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
    this.router.get('/', this.eventController.getEvents);
  }

  getRouter(): Router {
    return this.router;
  }
}

//urutannya
// 1. Service
// 2. Controller
// 3. router
// 4. App / index
