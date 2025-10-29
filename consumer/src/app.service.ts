import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './create-order.dto';

@Injectable()
export class AppService {

  orders: CreateOrderDto[] = [];

  handleOrderPlaced(order: CreateOrderDto) {
    this.orders.push(order);
    console.log('Order Received:', order);
  }

  getOrder() {
    console.log('Consumer Fetch Order');
    return this.orders;
  }
}
