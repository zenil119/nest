import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getWeHello(): string {
    return 'helllloooo!'
  }
}
