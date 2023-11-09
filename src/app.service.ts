import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(fullUrl): string {
    return `Hi URL is ${fullUrl}`;
  }
}
