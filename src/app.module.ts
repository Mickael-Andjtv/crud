import { Module } from "@nestjs/common";
import { CatService } from "./cats/cats.service";
import { CatsController } from "./cats/cats.controller";

@Module({
  providers: [CatService],
  controllers: [CatsController]
})

export class AppModule { }
