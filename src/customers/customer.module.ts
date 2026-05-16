import { Module } from '@nestjs/common';
import { CUSTOMER_REPOSITORY } from './application/ports/customer.repository.port';
import { DrizzleCustomerRepository } from './infrastructure/adapters/drizzle-customer.repository';
import { CommandHandlers } from './application/use-cases';

@Module({
  providers: [
    ...CommandHandlers,
    {
      provide: CUSTOMER_REPOSITORY,
      useClass: DrizzleCustomerRepository,
    },
  ],
})
export class CustomerModule {}
