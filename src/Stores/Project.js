import { observable } from "mobx";

class Project {
  @observable name = "";
  @observable images = [];
  @observable description = "";
  @observable date = "";

  constructor(name, images, description, date) {
    this.name = name;
    this.images = images;
    this.description = description;
    this.date = date;
  }
}

export default Project;
