import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateGenresTable1755298804389 implements MigrationInterface {
  name = "CreateGenresTable1755298804389";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`genres\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` timestamp(6) NULL, UNIQUE INDEX \`IDX_f105f8230a83b86a346427de94\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DROP INDEX \`IDX_f105f8230a83b86a346427de94\` ON \`genres\``
    );
    await queryRunner.query(`DROP TABLE \`genres\``);
  }
}
