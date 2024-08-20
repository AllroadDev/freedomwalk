import { Injectable, Logger } from '@nestjs/common';
import { MapPointType } from '../../common/types/point.interface';
import axios from 'axios';
import { PoligonService } from '../poligon/poligon.service';
import { MapRouteType } from '../../common/types/route.interface';

const API_KEY = '6f5ae419-3875-42ca-86cc-9f7c161c685f';

@Injectable()
export class ExternalMapApiService {
  private readonly logger = new Logger(ExternalMapApiService.name);

  constructor(private readonly _poligonService: PoligonService) {}

  async getRoute(points: MapPointType[]) {
    // const barrierPoint: MapPointType = {
    //   lat: '30.220212899830695',
    //   lng: '50.51505728793382',
    // };
    // const poligon = this._poligonService.getPoligonFromPoint(barrierPoint, 100);
    // console.log(poligon)
    // const barrier = [
    //   {
    //     if: 'in_custom1',
    //     multiply_by: '0.5',
    //   },
    //   {
    //     type: 'Feature',
    //     id: 'custom1',
    //     geometry: {
    //       type: 'Polygon',
    //       coordinates: [
    //         [
    //           [30.21988770377976, 50.515206090667164],
    //           [30.22044926688417, 50.515299242676704],
    //           [30.22057298608614, 50.5149216270976],
    //           [30.219746541816985, 50.514647853913914],
    //           [30.21988770377976, 50.515206090667164],
    //         ],
    //       ],
    //     },
    //   },
    // ];

    const data = this.getBodyDataForGraphHopper(points);
    const result = await this.getRouteApi(data);
    console.log(JSON.stringify(result));
    const route = this.convertToMapRoute(result);
    console.log(route)
    return route;
  }

  private getBodyDataForGraphHopper(points: MapPointType[]) {
    const data = {
      points: points.map((point: MapPointType) => {
        return [Number(point.lng), Number(point.lat)];
      }),

      profile: 'foot',
      calc_points: true,
      points_encoded: false,
      'ch.disable': true,
      custom_model: {
        priority: [
          // тут посилання на барєр
        ],
        areas: {
          type: 'FeatureCollection',
          features: [
            // тут координати барєрів
          ],
        },
      },
    };
    return data;
  }

  private async getRouteApi(data: any) {
    const result = await axios.post(
      `https://graphhopper.com/api/1/route?key=${API_KEY}`,
      data,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    return result.data;
  }

  private convertToMapRoute(data: any): MapRouteType {
    const route: MapRouteType = {
      points: data.paths[0].points.coordinates.map((point: [number, number]) => ({
        lng: point[0].toString(),
        lat: point[1].toString(),
      })),
    };
    return route;
  }
}
