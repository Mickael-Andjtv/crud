import {
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Redirect,
} from '@nestjs/common';

@Controller('cats')
export class Cat {
  @Post()
  @HttpCode(200)
  @Redirect('http://localhost:3000', 302)
  createCat() {
    console.log('createCat');
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
