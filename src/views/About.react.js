import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
// import Img from "react-image";

const styles = theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  }
});

class About extends Component {
  render() {
    let { classes } = this.props;

    return (
      <div className={classes.root}>
        <main>
          <Typography variant="display1" style={{ fontSize: "3vw" }}>
            Hi there, It's Mohammed Aijaaz!
          </Typography>
          <img
            alt="iamironman"
            src={require("../static/images/about.jpg")}
            style={{ maxWidth: "100%" }}
          />
        </main>
      </div>
    );
  }
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(About);
