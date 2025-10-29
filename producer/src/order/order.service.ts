import { Inject, Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom, timeout } from 'rxjs';

@Injectable()
export class OrderService {

    constructor(@Inject('ORDER_SERVICE') private client: ClientProxy) {}

    placeOrder(order: CreateOrderDto) {
        this.client.emit('order-event', order);
        console.log('Order send to RabbitMQ');
        return { order: 'Order sent' };
    }

    async getOrder() {
        console.log('Fetch Order');
        try {
            const response = this.client.send({cmd: 'fetch-order'}, {})
                    .pipe(timeout(5000));
            console.log('response:',response);
            const data = await firstValueFrom(response);
            console.log('data:',data);
            return data;
        } catch (error) {
            console.error('Error message:', error);
            return error.message;
        }
    }
}
