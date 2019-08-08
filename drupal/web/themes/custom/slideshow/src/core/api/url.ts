import { buildApiUrl } from '../utils/url';

export const urlService = {
  webappUrl: (nid: number, isFlat = true) =>
    `${buildApiUrl('', { node: nid })}?_format=webapp_json${isFlat ? '&flat' : ''}`,
};
