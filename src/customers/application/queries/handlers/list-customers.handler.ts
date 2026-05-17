import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { Customer } from '../../../domain/entities/customer.entitiy';
import { ListCustomersQuery } from '../list-customers.query';
import { Inject } from '@nestjs/common';
import { CUSTOMER_REPOSITORY } from '../../ports/customer.repository.port';
import type { CustomerRepositoryPort } from '../../ports/customer.repository.port';

@QueryHandler(ListCustomersQuery)
export class ListCustomersHandler implements IQueryHandler<
  ListCustomersQuery,
  Customer[]
> {
  constructor(
    @Inject(CUSTOMER_REPOSITORY)
    private readonly customerRepository: CustomerRepositoryPort,
  ) {}

  async execute(): Promise<Customer[]> {
    return this.customerRepository.findAll();
  }
}
