import { Module } from '@nestjs/common';
import { RouteController } from './route.controller';
import { RouteManager } from './route.manager';
import { ExternalMapApiService } from './external-map-api/external-map-api.service';
import { PoligonService } from './poligon/poligon.service';

@Module({
  imports: [],
  controllers: [RouteController],
  providers: [RouteManager, ExternalMapApiService, PoligonService],
})
export class RouteModule {}
