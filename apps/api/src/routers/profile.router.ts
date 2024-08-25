import { Router } from 'express';
import { updateProfileController } from '../controllers/profile.controller';
import { verifyToken } from '../lib/verifyToken';

export class ProfileRouter {
  private router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  private routes(): void {
    this.router.patch('/:id', verifyToken, updateProfileController);
  }

  public getRouter(): Router {
    return this.router;
  }
}
