import { DatabaseConnection } from "./connection";
const products = require("../data/products.json");

let db: any = null;

export default class DatabaseInit {
  constructor() {
    db = DatabaseConnection.getConnection();
    db.exec([{ sql: "PRAGMA foreign_keys = ON;", args: [] }], false, () =>
      console.log("Foreign keys turned on")
    );
    this.InitDb();
  }

  private InitDb() {
    const sql = [
      `DROP TABLE IF EXISTS products;`,
      `DROP TABLE IF EXISTS cart;`,
      `CREATE TABLE IF NOT EXISTS products (
        id text primary key,
        name text,
        maker text,
        price real,
        price_final real,
        price_taxes real,
        price_discount real,
        price_industry real,
        price_pmc real,
        quantity_available integer,
        image_url text
      );`,
      `CREATE TABLE IF NOT EXISTS cart (
        id integer primary key autoincrement,
        product_id text not null,
        quantity integer not null
      );`,
    ];

    products.map((product: any) => {
      if (!product.price) {
        return;
      }

      sql.push(`
        INSERT INTO
          products (
            id,
            name,
            maker,
            price,
            price_final,
            price_taxes,
            price_discount,
            price_industry,
            price_pmc,
            quantity_available,
            image_url
          ) VALUES (
            '${product.id}', 
            '${product.name}',
            '${product.maker}',
            '${product.price.price}',
            '${product.price.finalPrice}',
            '${product.price.taxes}',
            '${product.price.discount}',
            '${product.price.industryPrice}',
            '${product.price.pmcPrice}',
            '${product.quantityAvailable}',
            '${product.imageURL}'
          );
      `);
    });

    db.transaction(
      (tx: any) => {
        for (var i = 0; i < sql.length; i++) {
          console.log(`execute sql : ${sql[i]}`);
          tx.executeSql(sql[i]);
        }
      },
      (error: any) => {
        console.log(`error call back : ${JSON.stringify(error)}`);
        console.log(error);
      },
      () => console.log("transaction complete call back ")
    );
  }
}
