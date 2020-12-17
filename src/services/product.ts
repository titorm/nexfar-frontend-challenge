import { DatabaseConnection } from "../databases/connection";

const table = "products";
const db = DatabaseConnection.getConnection();

export default class ProductService {
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
