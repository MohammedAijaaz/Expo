import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import { observable } from "mobx";
import { observer } from "mobx-react";
import Img from "react-image";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SvgIcon from "@material-ui/core/SvgIcon";

const styles = theme => ({
  card: {
    //   maxWidth: 400,
    margin: "1px"
  },
  actions: {
    display: "flex"
  },
  expand: {
    transform: "rotate(0deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    }),
    marginLeft: "auto"
  },
  expandOpen: {
    transform: "rotate(180deg)"
  }
});

@observer
class ProjectTile extends Component {
  @observable expanded = false;

  handleExpandClick = () => {
    this.expanded = !this.expanded;
  };

  render() {
    let { project, classes } = this.props;

    return (
      <div>
        <Card className={classes.card} raised={true} style={{ height: "100%" }}>
          <CardHeader
            avatar={
              <Avatar
                aria-label="Mohammed Aijaaz"
                src={require("../static/images/dp.jpg")}
                className={classes.avatar}
              />
            }
            // action={
            //   <IconButton>
            //     <MoreVertIcon />
            //   </IconButton>
            // }
            title={project.name}
            subheader={project.date}
          />
          <CardMedia
            className={classes.media}
            title={project.name}
            style={{ height: "15em", overflow: "hidden" }}
          >
            <Img src={project.images[0]} style={{ maxWidth: "100%" }} />
          </CardMedia>
          <CardContent style={{ overflowY: "hidden" }}>
            <Typography component="p" align="justify">
              {project.description.length >= 100
                ? project.description.substr(0, 97) + "..."
                : project.description}
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton aria-label="Add to favorites">
              <FavoriteIcon style={{ fill: "red" }} />
            </IconButton>
            <IconButton aria-label="Share">
              <SvgIcon style={{ fill: "black" }}>
                <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3" />
              </SvgIcon>
            </IconButton>
          </CardActions>
        </Card>
      </div>
    );
  }
}

ProjectTile.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(ProjectTile);
