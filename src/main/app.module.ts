import { Module } from "@nestjs/common";

import { ControllerModule } from "@/presentation/controllers/index.js";

@Module({
  imports: [],
  controllers: [ControllerModule],
  providers: [],
})
export class AppModule {}
