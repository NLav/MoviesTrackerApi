import { Module } from "@nestjs/common";

import { ControllerModule } from "@/presentation/controllers";

@Module({
  imports: [ControllerModule],
})
export class AppModule {}
