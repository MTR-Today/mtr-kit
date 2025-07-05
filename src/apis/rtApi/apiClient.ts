import wretch from "wretch";
import QueryStringAddon from "wretch/addons/queryString";

export const rtApi = wretch("https://rt.data.gov.hk/v1").addon(
  QueryStringAddon,
);
