import { Controller, Request, Post, UseGuards, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';
import { RoleGuard } from './role.guard';
import { CONSTANTS } from './constant';

@Controller('app')
export class AppController {
  constructor(private readonly authService: AuthService) {
  }

  @Post('login')
  @UseGuards(AuthGuard("local"))
  login(@Request() req): string {
    return this.authService.generateToken(req.user);
  }

  @Get('android-developer')
  @UseGuards(AuthGuard("jwt"), new RoleGuard(CONSTANTS.ROLES.ANDROID_DEVELOPER))
  androidDeveloperData(@Request() req): string {
    return "This is private data from android developer"+JSON.stringify(req.user);
  }
  @Get('web-developer')
  @UseGuards(AuthGuard("jwt"), new RoleGuard(CONSTANTS.ROLES.WEB_DEVELOPER))
  webDeveloperData(@Request() req): string {
    return "This is private data from web developer"+JSON.stringify(req.user);
  }
}
