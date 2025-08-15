import { MigrationInterface, QueryRunner } from "typeorm";

export class AddGenres1755299375376 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO genres (id, name, created_at, updated_at)
      VALUES
        (UUID(), 'Action', NOW(), NOW()),
        (UUID(), 'Comedy', NOW(), NOW()),
        (UUID(), 'Drama', NOW(), NOW()),
        (UUID(), 'Horror', NOW(), NOW())
  `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DELETE FROM genres
      WHERE name IN ('Action', 'Comedy', 'Drama', 'Horror')
  `);
  }
}
