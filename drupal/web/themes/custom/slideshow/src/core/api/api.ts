import axios from 'axios';
import { DrupalWebappData, ErrorData } from '../types';
import { urlService } from './url';

export default {
  async fetchNode(nid: number): Promise<DrupalWebappData> {
    return new Promise((resolve, reject) => {
      axios({
        url: urlService.webappUrl(nid, true),
      }).then((response) => {
        const payload: DrupalWebappData = response && response.data;
        resolve(payload);
      }, (error) => {
        const errPayload: ErrorData = error.response && error.response.data || { message: error.message };
        reject(errPayload);
      });
    });
  },
};
