import { Inject, Injectable, Logger } from '@nestjs/common';
import {
  NotificationPort,
  Notification,
} from '../../application/ports/notification.port';
import { CUSTOMER_REPOSITORY } from '../../application/ports/customer.repository.port';
import type { CustomerRepositoryPort } from '../../application/ports/customer.repository.port';
import { CustomerId } from '../../domain/value-objects/customer-id.vo';

@Injectable()
export class ConsoleNotificationAdapter implements NotificationPort {
  private readonly logger = new Logger(ConsoleNotificationAdapter.name);

  constructor(
    @Inject(CUSTOMER_REPOSITORY)
    private readonly customerRepository: CustomerRepositoryPort,
  ) {}

  async sendNotification(notification: Notification): Promise<void> {
    const customer = await this.customerRepository.findById(
      new CustomerId(notification.recipientId),
    );

    const recipient = customer?.email.getValue() ?? notification.recipientId;

    this.logger.log(
      `[${notification.subject}] To: ${recipient} | ${notification.message}`,
    );
  }
}
