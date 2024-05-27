import React from "react";
import { Stack, Grid, Box } from "@mui/material";
import { ButtonCard, Page } from "./components";

const App: React.FC = () => {
  return (
    <Page title={"VintageView"}>
      <Stack gap={4}>
        <Box
          sx={{
            backgroundImage: "url(/public/vv-logo-text.jpg)",
            width: "100%",
            height: "325px",
            bagroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <Grid container spacing={4} justifyContent="center">
          <Grid item>
            <ButtonCard
              text="Depop"
              link="https://depop.com/vintageview_"
              image="/depop_cover.jpg"
            ></ButtonCard>
          </Grid>
          <Grid item>
            <ButtonCard
              text="Facebook"
              link="https://www.facebook.com/profile.php?id=61558888066283&mibextid=LQQJ4d"
              image="/fb_cover.jpg"
            ></ButtonCard>
          </Grid>
          <Grid item>
            <ButtonCard
              text="Instagram"
              link="https://www.instagram.com/_vintageview_?igsh=dGYzaXlueWtqbTBz&utm_source=qr"
              image="/instagram_cover.jpg"
            ></ButtonCard>
          </Grid>
        </Grid>
      </Stack>
    </Page>
  );
};

export default App;
