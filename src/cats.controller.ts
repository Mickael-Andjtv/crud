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

@Controller('cats')
export class Cat {
  @Post()
  @HttpCode(200)
  @Redirect('http://localhost:3000', 302)
  createCat(@Body() catDto: CreateCatDto): CreateCatDto {
    console.log('createCat');
    return catDto;
  }

  @Get()
  findAll(): string {
    return 'all cats';
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
