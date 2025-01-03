import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { CheckoutCardController, OrderController, OrderForAdminController, OrderForUserController } from './order.controller';
import { Order, OrderSchema } from './order.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Cart, CartSchema } from 'src/cart/cart.schema';
import { Tax, TaxSchema } from 'src/tax/tax.schema';
import { Product, ProductSchema } from 'src/product/product.schema';

@Module({
  imports: [
      MongooseModule.forFeature([
        {name: Order.name,schema: OrderSchema},
        {name:Cart.name,schema:CartSchema},
        {name: Tax.name, schema: TaxSchema},
        {name: Product.name, schema: ProductSchema},

      ]),
    ],
  controllers: [OrderController,CheckoutCardController,OrderForUserController,OrderForAdminController],
  providers: [OrderService],
})
export class OrderModule {}
