import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "tachyons";

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    width: 300,
    // height: 435,
  },
  height: {
    height: 100,
  },
  media: {
    height: 200,
  },
});

export default function MediaCard({
  name,
  id,
  description,
  link,
  validity,
  category,
}) {
  const classes = useStyles();

  return (
    <div
      category={category}
      className="tc grow bg-light-green br1 pa1 ma2 dib bw2 shadow-5"
    >
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={`https://i.picsum.photos/id/${id}/400/200.jpg`}
            alt="photo"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography
              variant="body2"
              className={classes.height}
              color="textSecondary"
              component="p"
            >
              {description}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <strong>Valid Till : {validity}</strong>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            variant="outlined"
            size="large"
            color="primary"
            target="_blank"
            href={`${link}`}
          >
            Go to website
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
