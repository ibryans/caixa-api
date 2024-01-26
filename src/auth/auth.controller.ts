import { Body, Controller, HttpCode, HttpStatus, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService, UserToken } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { IsPublic } from './decorators/is-public.decorator';

@Controller('auth')
export class AuthController {

    constructor(
        private readonly authService: AuthService
    ) {}

    @IsPublic()
    @UseGuards(LocalAuthGuard)
    @HttpCode(HttpStatus.OK)
    @Post('login')
    login(@Request() req): UserToken {
        return this.authService.login(req.user);
    }

}
