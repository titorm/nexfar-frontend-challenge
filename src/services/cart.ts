import { CartModel } from "../models/cart";
import { DatabaseConnection } from "../databases/connection";

const table = "cart";
const db = DatabaseConnection.getConnection();

export default class CartService {
  static create(cart: CartModel) {
    return new Promise((resolve, reject) =>
      db.transaction(
        (tx: any) => {
          tx.executeSql(
            `
          insert into ${table} 
          (product_id, quantity) values (?, ?)
        `,
            [cart.product_id, cart.quantity],
            (_: any, { insertId, rows }) => {
              resolve(insertId);
            }
          ),
            (sqlError: any) => console.log(sqlError);
        },
        (txError) => console.log(txError)
      )
    );
  }

  static findByProductId(productId: string) {
    return new Promise((resolve, reject) =>
      db.transaction(
        (tx) => {
          tx.executeSql(
            `select * from ${table} where product_id=?`,
            [productId],
            (_, { rows }) => {
              resolve(rows);
            }
          ),
            (sqlError: any) => {
              console.log(sqlError);
            };
        },
        (txError) => {
          console.log(txError);
        }
      )
    );
  }

  static updateByProductId(cart: CartModel) {
    return new Promise((resolve, reject) =>
      db.transaction(
        (tx) => {
          tx.executeSql(
            `update ${table} set quantity = ? where product_id = ?;`,
            [cart.quantity, cart.product_id],
            () => {}
          ),
            (sqlError: any) => {
              console.log(sqlError);
            };
        },
        (txError) => {
          console.log(txError);
        }
      )
    );
  }

  static deleteByProductId(productId: string) {
    db.transaction(
      (tx) => {
        tx.executeSql(
          `delete from ${table} where product_id = ?;`,
          [productId],
          (_, { rows }) => {}
        ),
          (sqlError: any) => {
            console.log(sqlError);
          };
      },
      (txError) => {
        console.log(txError);
      }
    );
  }

  static getAll() {
    return new Promise((resolve, reject) =>
      db.transaction(
        (tx) => {
          tx.executeSql(`select * from ${table}`, [], (_, { rows }) => {
            resolve(rows);
          }),
            (sqlError: any) => {
              console.log(sqlError);
            };
        },
        (txError) => {
          console.log(txError);
        }
      )
    );
  }
}
