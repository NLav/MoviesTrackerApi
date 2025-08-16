import { Module } from "@nestjs/common";

import { GenreFactoryModule } from "@/infrastructure/factories";

import { GenreController } from ".";

@Module({
  imports: [GenreFactoryModule],
  controllers: [],
})
export class ControllerModule {}
