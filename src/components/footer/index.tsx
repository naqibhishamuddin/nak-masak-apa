import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import GithubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import WebsiteIcon from "@mui/icons-material/Language";
import { useFooter } from "./useFooter";
import Divider from "@mui/material/Divider";

export const Footer = () => {
  const { onClickContact } = useFooter();

  return (
    <footer style={{ marginTop: "5rem" }}>
      <Container>
        <Divider variant="fullWidth" sx={{ marginBottom: "0.5rem" }} />

        <Grid sx={{ paddingBlock: "1rem", mb: 2 }} container>
          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
            }}
            item
            xs={6}
          >
            <Typography fontWeight={300} color="GrayText" variant="body2">
              ©2023 Designed & Built by Naqib Hishamuddin
            </Typography>
          </Grid>
          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "end",
            }}
            item
            xs={6}
          >
            <IconButton
              onClick={() => onClickContact("Github")}
              type="button"
              aria-label="search"
            >
              <GithubIcon htmlColor="GrayText" />
            </IconButton>
            <IconButton
              onClick={() => onClickContact("Website")}
              type="button"
              aria-label="search"
            >
              <WebsiteIcon htmlColor="GrayText" />
            </IconButton>
            <IconButton
              onClick={() => onClickContact("Email")}
              type="button"
              aria-label="search"
            >
              <EmailIcon htmlColor="GrayText" />
            </IconButton>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};
