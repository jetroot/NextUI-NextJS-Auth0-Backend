import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from './auth/auth.guard';

@Controller('v1')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(AuthGuard)
  @Get('/launches')
  getLaunches(): string {
    return this.appService.getLaunches();
  }

  @UseGuards(AuthGuard)
  @Get('/auth')
  auth(): object {
    return {
      isAuthtenticated: true,
    };
  }
}
