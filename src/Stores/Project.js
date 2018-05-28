import { observable } from "mobx";

class Project {
  @observable name = "";
  @observable images = [];
  @observable description = "";
  @observable date = "";
  @observable link = "";
  @observable git = "";
  @observable languages = [];

  constructor(name, images, description, date, link, git, languages) {
    this.name = name;
    this.images = images;
    this.description = description;
    this.date = date;
    this.link = link;
    this.git = git;
    this.languages = languages;
  }
}

export default Project;
