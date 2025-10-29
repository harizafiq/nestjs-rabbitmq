import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Ctx, EventPattern, MessagePattern, Payload, RmqContext } from '@nestjs/microservices';
import { CreateOrderDto } from './create-order.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern('order-event')
  handleOrderPlaced(@Payload() order: CreateOrderDto) {
    return this.appService.handleOrderPlaced(order);
  }

  @MessagePattern({cmd: 'fetch-order'})
  getOrder(@Ctx() context: RmqContext) {
    console.log('Message:', context.getMessage());
    // return 'success';
    return this.appService.getOrder();
  }
}
