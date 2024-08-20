import { Injectable, Logger } from '@nestjs/common';
import { MapPointType } from '../../common/types/point.interface';

@Injectable()
export class PoligonService {
  private readonly logger = new Logger(PoligonService.name);

  constructor() {}

  getPoligonFromPoint(point: MapPointType, radius: number): MapPointType[] {
    const earthRadius = 6371e3; // в метрах
    const numberOfPoints = 4; // кількість точок полігону

    const points: MapPointType[] = [];

    for (let i = 0; i < numberOfPoints; i++) {
      const angle = (i * 360) / numberOfPoints;
      const bearing = this.degreesToRadians(angle);

      const latRadians = this.degreesToRadians(Number(point.lat));
      const lonRadians = this.degreesToRadians(Number(point.lng));

      const pointLat = Math.asin(
        Math.sin(latRadians) * Math.cos(radius / earthRadius) +
          Math.cos(latRadians) *
            Math.sin(radius / earthRadius) *
            Math.cos(bearing),
      );

      const pointLon =
        lonRadians +
        Math.atan2(
          Math.sin(bearing) *
            Math.sin(radius / earthRadius) *
            Math.cos(latRadians),
          Math.cos(radius / earthRadius) -
            Math.sin(latRadians) * Math.sin(pointLat),
        );

      points.push({
        lng: this.radiansToDegrees(pointLon).toFixed(6),
        lat: this.radiansToDegrees(pointLat).toFixed(6),
      });
    }

    // Додаємо першу точку в кінець, щоб замкнути полігон
    points.push(points[0]);

    return points;
  }

  private degreesToRadians(degrees: number): number {
    return degrees * (Math.PI / 180);
  }

  private radiansToDegrees(radians: number): number {
    return radians * (180 / Math.PI);
  }
}
