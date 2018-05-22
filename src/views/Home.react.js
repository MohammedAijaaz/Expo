import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    flexGrow: 1,
    // height: 430,
    zIndex: 1,
    overflow: "hidden",
    position: "relative",
    display: "flex",
    width: "100%",
    margin: "3em 0em 0 0em"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  }
});

class Home extends Component {
  render() {
    let { classes } = this.props;
    return (
      <div className={classes.root}>
        <main>
          <div className={classes.toolbar} />
          Hello
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
