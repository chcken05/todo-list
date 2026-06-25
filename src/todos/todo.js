export class Todo {
  constructor(title, description, project) {
    this.title = title;
    this.description = description;
    this.project = project;
    this.id = Date.now();
  }
}
