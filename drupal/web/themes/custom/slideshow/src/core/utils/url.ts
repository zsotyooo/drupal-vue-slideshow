const trimSlashes = (str: string): string => str.replace(/^[\/]+/, '').replace(/[\/]+$/, '');

export const getBaseUrl = (baseUrl: string): string => {
  if (baseUrl.slice(0, 4) === 'http') {
    return trimSlashes(baseUrl);
  }
  return trimSlashes(`${window.location.origin}${baseUrl}`);
};

export const buildUrl = (
  path: string = '',
  params: { [index: string]: number | string } = {},
  baseUrl: string = '/'): string => {
  const ret: string[] = [ getBaseUrl(baseUrl) ];
  const trimmedPath = trimSlashes(path);
  if (trimmedPath.length > 0) {
    ret.push(trimmedPath);
  }
  Object.keys(params).forEach((key) => {
    ret.push(key);
    ret.push(String(params[key]));
  });

  return ret.join('/');
};

export const buildApiUrl = (
  path: string = '',
  params: { [index: string]: number | string } = {}) =>
  buildUrl(path, params, process.env.VUE_APP_API_BASE_URL as string);

export const buildStaticUrl = (path: string = '') =>
  buildUrl(path, {}, process.env.VUE_APP_STATIC_BASE_URL as string);
