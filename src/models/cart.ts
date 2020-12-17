export class CartModel {
  constructor(id?: number, product_id?: string, quantity?: number) {
    this.id = id;
    this.product_id = product_id;
    this.quantity = quantity;
  }

  public id: number;
  public product_id: string;
  public quantity: number;
}
