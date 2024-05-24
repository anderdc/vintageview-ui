import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CardProps,
  Link,
  Typography,
} from "@mui/material";

type ButtonCardProps = CardProps & {
  text: string;
  link: string;
  image: string;
};

const ButtonCard: React.FC<ButtonCardProps> = ({ text, link, image }) => {
  return (
    <Link href={link}>
      <Card sx={{ width: "250px" }}>
        <CardActionArea>
          <CardMedia component="img" height="140" image={image} alt="????" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {text}
            </Typography>
            {/* <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography> */}
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default ButtonCard;
