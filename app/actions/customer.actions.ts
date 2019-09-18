import { Customer } from '../db/entity/customer';
import { getRepository } from 'typeorm';

async function listAll() {
  const customersRepository = getRepository(Customer);
  const customers = await customersRepository.find();
  return customers;
}

async function findOneById(id: number) {
  const customersRepository = getRepository(Customer);
  const customers = await customersRepository.findOneOrFail(id);
  return customers;
}

export default {
  listAll,
  findOneById,
};
