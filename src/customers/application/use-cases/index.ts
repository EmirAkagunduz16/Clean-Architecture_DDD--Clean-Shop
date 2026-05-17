import { DeleteCustomerHandler } from './delete-customer/delete-customer.handler';
import { RegisterCommandHandler } from './register-customer/register-customer.handler';

export const CommandHandlers = [RegisterCommandHandler, DeleteCustomerHandler];
