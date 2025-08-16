import { Module } from "@nestjs/common";

import { GenreFactoryModule } from "@/infrastructure/factories";

import { GenreController } from "./genre";

@Module({
  imports: [GenreFactoryModule],
  controllers: [GenreController],
})
export class ControllerModule {}
