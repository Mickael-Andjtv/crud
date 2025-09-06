import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Redirect,
} from '@nestjs/common';
import { CreateCatDto } from './create-cat.dto';
import { CatService } from './cats.service';

@Controller('cats')
export class CatsController {

  constructor(private readonly catService: CatService) { }

  @Post()
  @HttpCode(200)
  @Redirect('http://localhost:3000/cats', 302)
  createCat(@Body() catDto: CreateCatDto): CreateCatDto {
    console.log('createCat');
    this.catService.create(catDto);
    return catDto;
  }

  @Get()
  findAll(): CreateCatDto[] {
    return this.catService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: number): string {
    return `cat n° ${id}`;
  }

  @Get('/search')
  async searchAll(): Promise<string> {
    return 'ok';
  }
}
