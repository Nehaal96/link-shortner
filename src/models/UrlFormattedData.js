import { hasProperty } from "../utils/helper";

class Result {
  code = "";
  short_link = "";
  full_short_link = "";
  short_link2 = "";
  full_short_link2 = "";
  share_link = "";
  full_share_link = "";
  original_link = "";

  constructor(data) {
    if (data) {
      this.code = hasProperty(data, 'code') ? data.code : "";
      this.short_link = hasProperty(data, 'short_link') ? data.short_link : "";
      this.full_short_link = hasProperty(data, 'full_short_link') ? data.full_short_link : "";
      this.short_link2 = hasProperty(data, 'short_link2') ? data.short_link2 : "";
      this.full_short_link2 = hasProperty(data, 'full_short_link2') ? data.full_short_link2 : "";
      this.share_link = hasProperty(data, 'share_link') ? data.share_link : "";
      this.full_share_link = hasProperty(data, 'full_share_link') ? data.full_share_link : "";
      this.original_link = hasProperty(data, 'original_link') ? data.original_link : "";
    }
  }
}

export class UrlDetails {

  ok = "";
  result = {};

  constructor(data) {
    if (data) {
      this.ok = hasProperty(data, 'ok') ? data.ok : "";
      this.result = hasProperty(data, 'result') ? new Result(data.result) : {};
    }
  }

}