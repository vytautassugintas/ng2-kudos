export class API {
  //public static readonly URL = "https://test.openkudos.com/api/";
  public static readonly URL = "http://localhost:8080/";

  public static readonly ENTRY = {
    AUTHENTICATION : API.URL + "authentication",
    CHALLENGE : API.URL + "challenge",
    USER : API.URL + "user",
    HOME : API.URL + "home",
    KUDOS : API.URL + "kudos",
    RELATION : API.URL + "relation",
    LEADERS : API.URL + "leaderboard",
    WISDOM : API.URL + "wisdomwall"
  }
}
