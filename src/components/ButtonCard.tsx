import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CardProps,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

type ButtonCardProps = CardProps & {
  text: string;
  link: string;
  image: string;
};

const ButtonCard: React.FC<ButtonCardProps> = ({ text, link, image }) => {
  const onClick = () => (window.location.href = link);

  return (
    <Card sx={{ width: "250px" }} onClick={onClick}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={image} />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {text}
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography> */}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ButtonCard;
