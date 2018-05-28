import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ProjectStore from "../Stores/ProjectStore";
import ProjectTile from "../components/ProjectTile.react";
import Typography from "@material-ui/core/Typography";
// import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import "./mystyles.css";
import Fade from "@material-ui/core/Fade";

import { observable } from "mobx";
import { observer } from "mobx-react";

const styles = theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  }
});

@observer
class Home extends Component {
  @observable open = false;

  displayProjects = () => {
    return ProjectStore.projects.map((project, index) => {
      return <ProjectTile project={project} key={index} />;
    });
  };

  start = () => {
    console.log("start");
    this.open = true;
  };

  render() {
    let { classes } = this.props;

    return (
      <div className={classes.root}>
        <Typography variant="headline" onClick={this.start}>
          Projects
        </Typography>
        <Fade in={true} timeout={1000}>
          <main
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(315px, 1fr))",
              gridGap: "1rem"
            }}
          >
            {/* <ReactCSSTransitionGroup
            transitionName="example"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300} */}

            {/* > */}
            {this.displayProjects()}
            {/* </ReactCSSTransitionGroup> */}
          </main>
        </Fade>
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Home);
