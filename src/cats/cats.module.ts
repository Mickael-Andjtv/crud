import { Module } from "@nestjs/common";
import { CatService } from "./cats.service";
import { CatsController } from "./cats.controller";

@Module({
  providers: [CatService],
  controllers: [CatsController]
})

export class CatModule { }
