import { Container, ContainerProps } from "@mui/material";
import React from "react";

// export declare const passSx: (sx?: SxProps<Theme>) => any[];

const baseTitle = "VintageView";
export type PageProps = ContainerProps & {
  title?: string;
};

const Page: React.FC<PageProps> = ({ children, title, ...props }) => {
  document.title = title ? `${title} - ${baseTitle}` : baseTitle;

  return (
    <Container
      sx={{ py: 4, height: "100vh", width: "100vw" }}
      maxWidth={false}
      {...props}
    >
      {children}
    </Container>
  );
};

export default Page;
