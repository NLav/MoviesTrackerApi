import { Module } from "@nestjs/common";

import { GenreFactoryModule } from "@/infrastructure/factories/index.js";

import { GenreController } from "./index.js";

@Module({
  imports: [GenreFactoryModule],
  controllers: [GenreController],
})
export class ControllerModule {}
