import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Redirect,
} from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatService } from './cats.service';

@Controller('cats')
export class CatsController {

  constructor(private readonly catService: CatService) { }

  @Post()
  @Redirect('http://localhost:3000/cats', 302)
  createCat(@Body() catDto: CreateCatDto) {
    console.log('createCat');
    this.catService.create(catDto);
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
