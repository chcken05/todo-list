export class Todo {
  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.id = Date.now();
  }
}
