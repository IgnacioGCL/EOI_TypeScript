import { Picture } from './models';
import axios, { AxiosResponse, AxiosRequestConfig } from '../node_modules/axios/index';

export class ApiExtractor {

    constructor() { }

    getPictures(howMany: number): Promise<Picture[]> {
        const opts: AxiosRequestConfig = {
            params: {
                limit: '20'
            }
        }
        return axios.get('https://jsonplaceholder.typicode.com/photos', opts).then((success: AxiosResponse<Picture[]>) => {
            let photos = success.data;
            photos.splice(howMany);
            return photos as Picture[];
        });
    }
}