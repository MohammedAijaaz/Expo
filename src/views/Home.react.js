import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ProjectStore from "../Stores/ProjectStore";
import ProjectTile from "../components/ProjectTile.react";
import Typography from "@material-ui/core/Typography";
// import ReactCSSTransitionGroup from "react-addons-css-transition-group";
// import "./mystyles.css";

const styles = theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  }
});

class Home extends Component {
  displayProjects = () => {
    return ProjectStore.projects.map(project => {
      return <ProjectTile project={project} />;
    });
  };

  render() {
    let { classes } = this.props;
    return (
      <div className={classes.root}>
        <Typography variant="headline">Projects</Typography>
        <main
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(315px, 1fr))",
            gridGap: "1rem"
          }}
        >
          {this.displayProjects()}
        </main>
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Home);
