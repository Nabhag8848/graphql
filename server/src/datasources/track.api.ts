import { RESTDataSource } from "@apollo/datasource-rest";
import { AuthorModel, ModuleModel, TrackModel } from "../model";

export class TrackAPI extends RESTDataSource {
  baseURL: string = "https://odyssey-lift-off-rest-api.herokuapp.com/";

  getTracksForHome() {
    return this.get<TrackModel[]>("tracks");
  }

  getAuthor(authorId: string) {
    return this.get<AuthorModel>(`author/${authorId}`);
  }

  getTrack(trackId: string) {
    return this.get<TrackModel>(`track/${trackId}`);
  }

  getTrackModules(trackId: string) {
    return this.get<ModuleModel[]>(`track/${trackId}/modules`);
  }

  incrementTrackViews(trackId: string) {
    return this.patch<TrackModel>(`track/${trackId}/numberOfViews`);
  }
}
