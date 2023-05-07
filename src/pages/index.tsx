import { useState } from "react";
import Head from "next/head";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Footer, RecipeList, SearchBar } from "components";

const Home = () => {
  const [searchValue, setSearchValue] = useState("");

  const onChangeSearchValue = (value: string) => {
    setSearchValue(value);
  };

  return (
    <>
      <Head>
        <title>Nak Masak Apa</title>
        <meta name="description" content="Khairul Aming's Recipe Collection" />
        <meta
          name="keywords"
          content="makan, khairul aming, sambal nyet, viral, masak, nak masak apa, resipi, resepi, sedap, masak sedap, senang masak, website, facebook, instagram, tiktok, che nom, trending, raya, 2023, Nasi Lemak, Nasi Goreng, Ayam Goreng, Ayam Masak Merah, Ayam Masak Kicap, Ayam Masak Pedas, Ayam Masak Lemak, Ayam Masak Hitam, Ayam Masak Kari, Ayam Masak Kunyit, Ayam Masak Tomato, Ayam Masak Berempah, Ayam Masak Rempah, Ayam Masak Lada Hitam, Ayam Masak Cili, Ayam Masak Cili Api, Ayam Masak Cili Padi, Ayam Masak Cili Hijau"
        />
        <meta name="robots" content="index,follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Naqib Hishamuddin" />
        <meta property="og:title" content="Nak Masak Apa" />
        <meta
          property="og:description"
          content="Khairul Aming's Recipe Collection"
        />
        <meta property="og:image" content="/og-image.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingBlock: 5,
        }}
      >
        <Stack spacing={10}>
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{ color: "#333333", textAlign: "center" }}
              fontWeight={700}
              variant="h3"
              mt={10}
            >
              Wasssup guys, Cari Resepi
            </Typography>
            <Typography
              sx={{ color: "#333333", textAlign: "center" }}
              fontWeight={700}
              variant="h3"
              mb={2.5}
            >
              <span style={{ color: "#F4A261" }}>Khairul Aming </span>
              <span>Di Sini</span>
            </Typography>
            <Chip
              sx={{
                backgroundColor: "#333333",
                color: "whiteSmoke",
                paddingInline: 1,
              }}
              label="2023 Edition"
            />
          </Container>
          <Stack spacing={10} style={{ alignItems: "center" }}>
            <SearchBar onChange={onChangeSearchValue} />
            <RecipeList searchValue={searchValue} />
          </Stack>
        </Stack>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
