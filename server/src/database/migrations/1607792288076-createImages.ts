import { MigrationInterface, QueryRunner, Table } from "typeorm";

export default class createImages1607792288076 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
    queryRunner.createTable(
      new Table({
        name: "images",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
          },
          {
            name: "path",
            type: "varchar",
          },
          {
            name: "game_id",
            type: "uuid",
          },
        ],
        foreignKeys: [
          {
            name: "gameImage",
            columnNames: ["game_id"],
            referencedTableName: "games",
            referencedColumnNames: ["id"],
            onUpdate: "CASCADE",
            onDelete: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable("images");
  }
}
