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
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

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
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar
                aria-label="Mohammed Aijaaz"
                src={require("../static/images/dp.jpg")}
                className={classes.avatar}
              />
            }
            action={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
            title={project.name}
            subheader={project.date}
          />
          <CardMedia className={classes.media} title={project.name}>
            <Img src={project.images[0]} style={{ maxWidth: "100%" }} />
          </CardMedia>
          <CardContent>
            <Typography component="p">{project.description}</Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton aria-label="Add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="Share">
              <ShareIcon />
            </IconButton>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.expanded
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph variant="body2">
                Method:
              </Typography>
              <Typography paragraph>
                Heat 1/2 cup of the broth in a pot until simmering, add saffron
                and set aside for 10 minutes.
              </Typography>
              <Typography paragraph>
                Heat oil in a (14- to 16-inch) paella pan or a large, deep
                skillet over medium-high heat. Add chicken, shrimp and chorizo,
                and cook, stirring occasionally until lightly browned, 6 to 8
                minutes. Transfer shrimp to a large plate and set aside, leaving
                chicken and chorizo in the pan. Add pimentón, bay leaves,
                garlic, tomatoes, onion, salt and pepper, and cook, stirring
                often until thickened and fragrant, about 10 minutes. Add
                saffron broth and remaining 4 1/2 cups chicken broth; bring to a
                boil.
              </Typography>
              <Typography paragraph>
                Add rice and stir very gently to distribute. Top with artichokes
                and peppers, and cook without stirring, until most of the liquid
                is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add
                reserved shrimp and mussels, tucking them down into the rice,
                and cook again without stirring, until mussels have opened and
                rice is just tender, 5 to 7 minutes more. (Discard any mussels
                that don’t open.)
              </Typography>
              <Typography>
                Set aside off of the heat to let rest for 10 minutes, and then
                serve.
              </Typography>
            </CardContent>
          </Collapse>
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
