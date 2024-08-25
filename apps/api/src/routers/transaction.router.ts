import { EventController } from '@/controllers/event.controller';
import { TransactionController } from '@/controllers/transaction.controller';
import { uploader } from '@/lib/multer';
import { verifyToken } from '@/lib/verifyToken';
import { Router } from 'express';

export class TransactionRouter {
  private router: Router;
  private transactionController: TransactionController;

  constructor() {
    this.transactionController = new TransactionController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get('/', this.transactionController.getTransactionsController);
    this.router.get(
      '/:id',
      this.transactionController.getTransactionController,
    );
    this.router.post(
      '/',
      verifyToken,
      this.transactionController.createTransactionController,
    );
    this.router.patch(
      '/:id',
      verifyToken,
      uploader().single('paymentProof'),
      this.transactionController.updateTransactionController,
    );
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
