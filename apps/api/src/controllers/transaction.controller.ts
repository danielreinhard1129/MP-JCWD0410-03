import { createTransactionService } from '@/services/transaction/create-transaction.service';
import { getTransactionService } from '@/services/transaction/get-transaction.service';
import { getTransactionsService } from '@/services/transaction/get-transactions.service';
import { updateTransactionService } from '@/services/transaction/update-transaction.service';
import { NextFunction, Request, Response } from 'express';

export class TransactionController {
  async getTransactionsController(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const result = await getTransactionsService();
      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }

  async getTransactionController(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const result = await getTransactionService(Number(req.params.id));
      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }

  async createTransactionController(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const result = await createTransactionService(
        req.body,
        Number(res.locals.user.id),
      );
      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }

  async updateTransactionController(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const result = await updateTransactionService(
        Number(req.params.id),
        req.body,
        req.file!,
      );
      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }
}

console.log('Hello');
