Build using NestJS to use with RabbitMQ.

To use it, use npm to install dependencies:
- npm install
- npm run start | nest start

## Running RabbitMQ

This project uses **RabbitMQ** as the message broker.  

- I personally use **Podman** for container management.  
- If you use **Docker**, you can run RabbitMQ with the management UI easily.

## Open RabbitMQ to see queue
- http://localhost:5672
- username:guest|password:guest

## Testing the API
Make sure RabbitMQ is run, producer and consumer also run.
You can test the NestJS + RabbitMQ project using any API consumer of your choice. Here are some options:

### 1. Using Bruno|Postman|Insomnia
- Send requests to the API endpoints, e.g., for fetching or sending messages.
- Endpoint provided:
- `POST http://localhost:3000/order`
- `POST http://localhost:3000/order/place-order`
