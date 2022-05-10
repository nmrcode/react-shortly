import { makeObservable, observable } from "mobx";
import { API_BASE_URL } from "../config/config";
import axios from "axios";

class LinkStore {
  items = [];
  loading = "idle";

  constructor() {
    makeObservable(this, {
      items: observable,
      loading: observable,
    });
  }

  async createShortLink(url) {
    this.loading = "loading";
    await axios
      .get(`${API_BASE_URL}${url}`)
      .then(({ data }) => {
        const { ok, result } = data;
        this.items.push(result);
        this.loading = "idle";
      })
      .catch((e) => {
        console.log(e);
        this.loading = "error";
      });
  }
}

export default new LinkStore();
