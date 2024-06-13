import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  Injectable,
} from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const accessTokenCookie = request.cookies['accessToken'];

    if (!accessTokenCookie || accessTokenCookie === '') {
      throw new BadRequestException('Try to login');
    }

    try {
      await axios.get(`${process.env.AUTH0_ISSUER_BASE_URL}/userinfo`, {
        headers: {
          Authorization: `Bearer ${accessTokenCookie}`,
        },
      });

      return true;
    } catch (error) {
      console.log('err', error.message);
      return false;
    }
  }
}
