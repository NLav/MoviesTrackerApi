import { Module } from "@nestjs/common";

import { DatabaseModule } from "@/infrastructure/persistence/typeorm/database.module";
import { ControllerModule } from "@/presentation/controllers";

@Module({
  imports: [DatabaseModule, ControllerModule],
})
export class AppModule {}
