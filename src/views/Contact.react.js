import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Img from "react-image";
import "./mystyles.css";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  }
});

class Contact extends Component {
  render() {
    return (
      <div
      // style={{
      //   backgroundImage:
      //     "url(" + require("../static/images/about.jpg") + ") ",
      //   backgroundSize: "100% auto",
      //   height: "100%"
      // }}
      >
        <Paper elevation={10} style={{ padding: "1em" }}>
          <Typography variant="headline">Contact</Typography>
        </Paper>
      </div>
    );
  }
}

Contact.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Contact);
