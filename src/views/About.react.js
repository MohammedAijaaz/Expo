import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Img from "react-image";
import Paper from "@material-ui/core/Paper";
import Tooltip from "@material-ui/core/Tooltip";

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
          <Typography variant="headline">
            Hi there, It's Mohammed Aijaaz!
          </Typography>
          <img
            alt="iamironman"
            src={require("../static/images/about.jpg")}
            style={{ maxWidth: "100%" }}
          />
          <Typography
            variant="subheading"
            style={{ margin: "1em" }}
            align="justify"
          >
            I am a Computer Science enthusiast, love to develop mobile and web
            applications along with data science and machine learning
            applications. <br /> The following are the techonologies and
            languages I have used so far:
          </Typography>
          <div>
            <Paper
              elevation={10}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(315px, 1fr))",
                gridGap: "1rem",
                justifyItems: "center",
                alignItems: "center",
                padding: "1%"
              }}
            >
              {/* <Tooltip title="Ethereum and Solidity"> */}
              <Img
                src="https://cdn.iconscout.com/public/images/icon/free/png-512/ethereum-company-brand-logo-33c7c63d42f10159-512x512.png"
                style={{ maxWidth: "40%" }}
              />
              {/* </Tooltip> */}
              {/* <Tooltip title="ReactJs and React Native"> */}
              <Img
                src="https://cdn2.iconfinder.com/data/icons/designer-skills/128/react-512.png"
                style={{ maxWidth: "40%" }}
              />
              {/* </Tooltip> */}
              {/* <Tooltip title="Firebase"> */}
              <Img
                src="https://www.shareicon.net/data/512x512/2016/07/08/117548_google_512x512.png"
                style={{ maxWidth: "40%" }}
              />
              {/* </Tooltip> */}
              {/* <Tooltip title="Microsoft HoloLens"> */}
              <Img
                src="https://www.bitnamic.net/images/icons/icons_hololens.svg"
                style={{ maxWidth: "40%" }}
              />
              {/* </Tooltip> */}
              {/* <Tooltip title="Android Application Development"> */}
              <Img
                src="https://images.vexels.com/media/users/3/139556/isolated/preview/1718a076e29822051df8bcf8b5ce1124-android-logo-by-vexels.png"
                style={{ maxWidth: "40%" }}
              />
              {/* </Tooltip> */}
              {/* <Tooltip title="Hyper Text Markup Language"> */}
              <Img
                src="https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png"
                style={{ maxWidth: "40%" }}
              />
              {/* </Tooltip> */}
              {/* <Tooltip title="Cascading Style Sheets"> */}
              <Img
                src="https://www.abouthack.com/wp-content/uploads/2014/07/css3_logo.png"
                style={{ maxWidth: "40%" }}
              />
              {/* </Tooltip>
              <Tooltip title="JavaScript"> */}
              <Img
                src="https://coderdojo.com/wp-content/uploads/2016/08/Unofficial_JavaScript_logo_2.svg.png"
                style={{ maxWidth: "40%" }}
              />
              {/* </Tooltip> */}
              {/* <Tooltip title="PHP: Hypertext Preprocessor"> */}
              <Img
                src="https://www.icoldo.com/wordpress/wp-content/uploads/2015/03/php.png"
                style={{ maxWidth: "40%" }}
              />
              {/* </Tooltip>
              <Tooltip title="NodeJs"> */}
              <Img
                src="https://cdn.iconscout.com/public/images/icon/free/png-512/nodejs-logo-36559ec903b263f5-512x512.png"
                style={{ maxWidth: "40%" }}
              />
              {/* </Tooltip>
              <Tooltip title="MySQL"> */}
              <Img
                src="https://www.seeklogo.net/wp-content/uploads/2017/05/mysql-logo.png"
                style={{ maxWidth: "40%" }}
              />
              {/* </Tooltip>
              <Tooltip title="Python"> */}
              <Img
                src="https://cdn.iconscout.com/public/images/icon/free/png-512/python-logo-31578242a9b4f4ae-512x512.png"
                style={{ maxWidth: "40%" }}
              />
              {/* </Tooltip>
              <Tooltip title="Java"> */}
              <Img
                src="https://d1q6f0aelx0por.cloudfront.net/product-logos/191bf3e6-f5e5-4430-abb9-2294aa3bb728-java-logo-512x512.png"
                style={{ maxWidth: "40%" }}
              />
              {/* </Tooltip>
              <Tooltip title="C Programming Language"> */}
              <Img
                src="https://cdn.iconscout.com/public/images/icon/free/png-512/c-programming-logo-3c164317036013c8-512x512.png"
                style={{ maxWidth: "40%" }}
              />
              {/* </Tooltip>
              <Tooltip title="C++ Programming Language"> */}
              <Img
                src="http://www.alejandrosegovia.net/wp-content/uploads/2016/12/cpp.png"
                style={{ maxWidth: "50%" }}
              />
              {/* </Tooltip>
              <Tooltip title="C# Programming Language"> */}
              <Img
                src="https://cdn.iconscout.com/public/images/icon/free/png-512/c-sharp-logo-344be1179ff0b537-512x512.png"
                style={{ maxWidth: "40%" }}
              />
              {/* </Tooltip> */}
            </Paper>
          </div>
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
