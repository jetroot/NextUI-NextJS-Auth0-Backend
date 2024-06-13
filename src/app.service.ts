import { Injectable } from '@nestjs/common';
import * as data from './data/launches.json';

@Injectable()
export class AppService {
  getLaunches(): any {
    return data;
  }
}
