import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { CatService } from "./cats.service";
import { CatsController } from "./cats.controller";
import { LoggerMiddleware } from "src/logger.middleware";

@Module({
  providers: [CatService],
  controllers: [CatsController]
})

export class CatModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('cats')
  }
}
