import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import moment from "moment/moment";
import React from "react";
import { Link } from "react-router-dom";

function NewsCard(props) {
  let { news } = { ...props };

  return (
    <>
      <Link to={news.link} target="_blank" style={{ textDecoration: "none" }}>
        <Card sx={{ maxWidth: 500 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={news?.urlToImage}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {news?.title}
              </Typography>

              <Typography variant="body2" color="text.secondary">
                {news?.content?.split("[")[0]}
              </Typography>
            </CardContent>
          </CardActionArea>

          <Box sx={{ m: 2 }}>
            {moment(news?.pubDate).format("MMMM Do YYYY, h:mm:ss a")}
          </Box>
        </Card>
      </Link>
    </>
  );
}

export default NewsCard;
