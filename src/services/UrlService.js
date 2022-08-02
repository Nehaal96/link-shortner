import axios from "axios";

import { UrlDetails } from "../models/UrlFormattedData";

export default class UrlService {
  baseUrl = "https://api.shrtco.de/"
  proxyShortenUrlPath = "v2/shorten"

  async getShortenedUrl(url = '') {
    console.log(url);
    return axios.get(
      `${this.baseUrl}${this.proxyShortenUrlPath}?url=${url}`
    ).then((response) => {
      console.log(JSON.stringify(response));
      return { status: response.status, data: new UrlDetails(response.data) };
    }).catch((error) => {
      return { status: error.response && Object.keys(error.response).length > 0 && error.response.status ? error.response.status : 404, data: null }
    });
  }

}