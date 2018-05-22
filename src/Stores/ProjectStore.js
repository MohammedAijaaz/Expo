import { observable } from "mobx";
import Project from "./Project";

class ProjectStore {
  @observable projects = [];

  constructor() {
    for (let i = 0; i < 10; i++)
      this.projects.push(
        new Project(
          "Interactive Learning in Mixed Reality",
          [
            "https://www.windowscentral.com/sites/wpcentral.com/files/topic_images/2016/hololens-topic.png"
          ],
          "Cupidatat proident magna deserunt ad duis enim incididunt ipsum esse. Et consectetur ad id incididunt qui laboris. Aute ex ad fugiat duis. Enim culpa cupidatat eiusmod cillum ad ut proident. Minim veniam et magna pariatur occaecat non excepteur.",
          "April 14, 2018"
        )
      );
  }
}

export default new ProjectStore();
