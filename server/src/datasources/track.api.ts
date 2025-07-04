import { RESTDataSource } from "@apollo/datasource-rest";

export class TrackAPI extends RESTDataSource {
  baseUrl: string = "https://odyssey-lift-off-server.herokuapp.com/";

  getTracksForHome() {
    return this.get("tracks");
  }

  getAuthor(authorId: string) {
    return this.get(`author/${authorId}`);
  }
}
