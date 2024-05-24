import React from "react";
import { Container, Typography, Stack } from "@mui/material";
import { ButtonCard } from "./components";

const App: React.FC = () => {
  return (
    <Container>
      <Stack gap={2}>
        <Typography variant="h1" fontSize={50}>
          VintageView
        </Typography>
        <Stack gap={4} direction="row">
          <ButtonCard
            text="Depop"
            link="https://depop.com/vintageview_"
            image="/src/assets/vv-logo.jpg"
          ></ButtonCard>
          <ButtonCard
            text="Instagram"
            link="https://www.instagram.com/_vintageview_?igsh=dGYzaXlueWtqbTBz&utm_source=qr"
            image="/src/assets/vv-logo.jpg"
          ></ButtonCard>
          <ButtonCard
            text="Facebook Page"
            link="https://www.facebook.com/profile.php?id=61558888066283&mibextid=LQQJ4d"
            image="/src/assets/vv-logo.jpg"
          ></ButtonCard>
        </Stack>
      </Stack>
    </Container>
  );
};

export default App;
