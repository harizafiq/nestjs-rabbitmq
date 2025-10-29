export class CreateOrderDto {
    constructor(
        public email: string, 
        public productName: string, 
        public quantity: number) {}
}