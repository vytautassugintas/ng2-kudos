import { environment } from '../../environments/environment';

export class API {

  public static readonly URL = environment.url;

  public static readonly ENTRY = {
    AUTHENTICATION : API.URL + "authentication",
    CHALLENGE : API.URL + "challenge",
    USER : API.URL + "user",
    HOME : API.URL + "home",
    KUDOS : API.URL + "kudos",
    RELATION : API.URL + "relation",
    LEADERS : API.URL + "leaderboard",
    WISDOM : API.URL + "wisdomwall",
    ADMIN : API.URL + "admin"
  }
}
