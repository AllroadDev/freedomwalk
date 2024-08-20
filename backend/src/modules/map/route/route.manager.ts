import { Injectable, Logger } from '@nestjs/common';
import { MapPointType } from '../common/types/point.interface';
import { ExternalMapApiService } from './external-map-api/external-map-api.service';

@Injectable()
export class RouteManager {
  private readonly logger = new Logger(RouteManager.name);

  constructor(private readonly _extenalMapApi: ExternalMapApiService) {}

  async start(points: MapPointType[]) {
    const route = await this._extenalMapApi.getRoute(points);
    return route;
    // Прокладаємо початковий маршрут з точки а в точку б

    // Починаємо корегування маршруту циклом. 

      // Знаходимо в базі всі перешкоди які знаходяться по маршурту

      // Прокладаємо новий маршрут враховуючи ці точки
      
      // Робимо це поки не знайдемо маршрут без перешкод або n разів.

      // Дописати систему яка буде зебрігати кожен маршрут та присваювати йому рейтинг складності. Якщо за n спроб ми не зайшли ідеального маршруту, то вибираємо маршрут з найменшим рейтингом складності.
  }
}
