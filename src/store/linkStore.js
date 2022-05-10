import { action, makeObservable, observable } from "mobx";
import { API_BASE_URL } from "../config/config";
import axios from "axios";
import { autoSave } from "./localStorageSave";

class LinkStore {
  items = [];
  loading = "";

  constructor() {
    makeObservable(this, {
      items: observable,
      loading: observable,
      createShortLink: action,
    });
    autoSave(this, "linkStore");
  }

  async createShortLink(url) {
    this.loading = "true";
    await axios
      .get(`${API_BASE_URL}${url}`)
      .then(({ data }) => {
        const { ok, result } = data;
        this.items.push(result);
        this.loading = "false";
      })
      .catch((e) => {
        console.log(e);
      });
  }
}

export default new LinkStore();
