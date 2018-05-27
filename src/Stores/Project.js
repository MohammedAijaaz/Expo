import { observable } from "mobx";

class Project {
  @observable name = "";
  @observable images = [];
  @observable description = "";
  @observable date = "";
  @observable link = "";
  @observable git = "";

  constructor(name, images, description, date, link, git) {
    this.name = name;
    this.images = images;
    this.description = description;
    this.date = date;
    this.link = link;
    this.git = git;
  }
}

export default Project;
