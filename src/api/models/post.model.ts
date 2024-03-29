export default class Post {
  public id: number;
  public title: string;
  public body: string;
  public userId: number;

  public constructor(id: number, title: string, body: string, userId: number) {
    this.id = id;
    this.title = title;
    this.body = body;
    this.userId = userId;
  }
}
