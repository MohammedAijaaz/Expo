import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Img from "react-image";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import SvgIcon from "@material-ui/core/SvgIcon";
import IconButton from "@material-ui/core/IconButton";
import Social from "../components/social.react";
import "../components/compstyles.css";
const styles = theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  },
  avatar: {
    width: 160,
    height: 160
  }
});

class Contact extends Component {
  render() {
    let { classes } = this.props;
    return (
      <center id="bgc">
        <Paper
          elevation={24}
          style={{
            padding: "1em 2vw 2vw 2vw",
            marginTop: "7em"
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              flexDirection: "column"
            }}
          >
            <Avatar
              aria-label="Mohammed Aijaaz"
              src={require("../static/images/dp.jpg")}
              className={classes.avatar}
              style={{
                marginTop: "-5em"
              }}
            />
            <Typography variant="headline" style={{ margin: "1em" }}>
              Mohammed Aijaaz<br />
            </Typography>
            <Social />
          </div>
        </Paper>
      </center>
    );
  }
}

Contact.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Contact);
