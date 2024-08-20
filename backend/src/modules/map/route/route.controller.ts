import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { RouteManager } from './route.manager';
import { MapPointType } from '../common/types/point.interface';

interface RouteDto {
  start: MapPointType;
  end: MapPointType;
}

@Controller('route')
export class RouteController {
  private readonly logger = new Logger(RouteController.name);
  constructor(private readonly _routeManager: RouteManager) {}

  @Post()
  async testRoute(@Body() data: { points: MapPointType[] }) {
    try {
      const result = await this._routeManager.start(data.points);
      return result;
    } catch (err) {
      this.logger.error(err);
      return err;
    }
  }
}
