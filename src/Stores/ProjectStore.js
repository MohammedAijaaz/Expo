import { observable } from "mobx";
import Project from "./Project";

class ProjectStore {
  @observable projects = [];

  constructor() {
    this.projects.push(
      new Project(
        "Interactive Learning in Mixed Reality",
        [
          "https://roadtovrlive-5ea0.kxcdn.com/wp-content/uploads/2015/01/microsoft-hololens-augmented-reality-headset.jpg"
        ],
        "Learning made interactive by letting users intutively interact with the environment to learn in a Mixed Reality space",
        "April 14, 2018"
      )
    );
    this.projects.push(
      new Project(
        "Inframonkey",
        [
          "https://firebasestorage.googleapis.com/v0/b/ex-go-43695.appspot.com/o/inframonkey_logo_large.png?alt=media&token=80c2f65b-63a2-4bde-9ba8-7bc41174dc4b"
        ],
        "A progressive web app for an Ecommerce business to buy and sell Excavatory tools in India",
        "December 30, 2017"
      )
    );
    this.projects.push(
      new Project(
        "CBIT Bus Tracking Android|Web",
        [
          "https://recro.io/blog/wp-content/uploads/2018/04/School-Bus-Tracking-Apps.png"
        ],
        "A bus tracking application for my college CBIT, where the driver has a app for starting the tracking process and the students have an application which shows a list of active buses and their respective real time locations.",
        "March 14, 2015"
      )
    );
    this.projects.push(
      new Project(
        "CBIT Android App",
        [
          "https://lh3.googleusercontent.com/aAFiA2-5khunKmsSv-STbOMeG366sMC0iDK8HzKITvsgQj5BMl7M0IghHjhPKmlNQo4=w1920-h961-rw"
        ],
        'The "Goto app" for all the needs of students of CBIT, including Attendance, Syllabus, Important Contacts, Map etc',
        "January 6, 2015"
      )
    );
    this.projects.push(
      new Project(
        "Blog",
        [
          "https://firebasestorage.googleapis.com/v0/b/blog-caf8e.appspot.com/o/Screenshot%20from%202018-05-27%2015-19-44.png?alt=media&token=d368f591-e704-41ff-8823-11838c1b9bf2"
        ],
        "A simple blog for an Author with a portal for posting new blogs and viewing analytics",
        "April 14, 2018"
      )
    );
    this.projects.push(
      new Project(
        "CBIT Celeritas Webapp",
        [
          "https://firebasestorage.googleapis.com/v0/b/blog-caf8e.appspot.com/o/Screenshot%20from%202018-05-27%2015-17-37.png?alt=media&token=6e6ae6ca-468e-4ab3-acb9-ef5bd0c19ee9"
        ],
        "The webapp showcases the articles from the backend and provides information about the club, it’s functions and board members.",
        "August 10, 2016"
      )
    );
    this.projects.push(
      new Project(
        "CBIT Carpediem Android App",
        [
          "https://lh3.googleusercontent.com/aAFiA2-5khunKmsSv-STbOMeG366sMC0iDK8HzKITvsgQj5BMl7M0IghHjhPKmlNQo4=w1920-h961-rw"
        ],
        "The app has event registration, event details like the location of the event within the campus is shown on a map, timings, cost etc.",
        "January 15, 2016"
      )
    );
    this.projects.push(
      new Project(
        "CBIT Cstar",
        [
          "https://firebasestorage.googleapis.com/v0/b/blog-caf8e.appspot.com/o/Screenshot%20from%202018-05-27%2015-15-03.png?alt=media&token=d5194107-7bec-45ca-b11d-6b9a981d559d"
        ],
        "Students/Visitors can get complete information about the event and they can also attempt the first round of the event. The questions are queried from the database in random order and the user information is collected.",
        "August 14, 2015"
      )
    );
    this.projects.push(
      new Project(
        "Student analyzer",
        [
          "https://www.sciencedaily.com/images/2009/11/091104101547_1_900x600.jpg"
        ],
        "This program, takes the outcome of a test as input and clusters students based on their performances. It is very useful for the institutions and students to understand where they need to focus. Is gives details about, the subject, chapter, topic, sub-topic in which the student’s performance can be improved.",
        "July 18, 2016"
      )
    );
    this.projects.push(
      new Project(
        "Interactive Video Tutorials",
        [
          "https://static1.squarespace.com/static/54d696e5e4b05ca7b54cff5c/t/5a29dee853450ac5c7001b68/1512693481240/"
        ],
        "Video tutorials play a very crucial role in today’s education. This can be more effective if the videos are interactive. In this project, when the viewer finishes watching a segment of the video, the viewer is asked questions if he/she understood if yes it will give a practice question else it will ask the viewer to watch it again.",
        "September 28, 2016"
      )
    );
    this.projects.push(
      new Project(
        "Java Bank Application",
        [
          "https://firebasestorage.googleapis.com/v0/b/blog-caf8e.appspot.com/o/Screenshot%20from%202018-05-27%2015-10-48.png?alt=media&token=39c73f9a-4c6c-4497-b43b-8e4d0af8d32a"
        ],
        "This application provides user sign up, login, administrator privileges and also simulates money with drawl and deposits.",
        "October 2, 2016"
      )
    );
  }
}

export default new ProjectStore();
