// import AppError from '../errors/AppError';
import TransactionsRepository from '../repositories/TransactionsRepository';
import { getCustomRepository } from 'typeorm'
import Transaction from '../models/Transaction';

interface Request {
  id: string,
  title: string,
  value: number,
  type: 'income' | "outcome",
  category: string
}

class CreateTransactionService {
  public async execute({ id, title, value, type, category }: Request): Promise<Transaction> {

    const transactionsRepository = getCustomRepository(TransactionsRepository);

    const transaction = transactionsRepository.create({
      id: id,
      title: title,
      value: value,
      type: type,
      category: category
    });

    await transactionsRepository.save(transaction);
    return transaction;
  }
}

export default CreateTransactionService;
