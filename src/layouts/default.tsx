import { Box } from "grommet";
import Head from "next/head";
import { Sidebar } from "../components/Sidebar";

import { LayoutProps } from "./types";

const DefaultLayout = ({children}: LayoutProps) => (
  <>
    <Head>
				<title>Reddit Client</title>
				<link rel="icon" href="/favicon.ico" />
    </Head>
    <Box
      direction="row"
      height={{ max: '100vh' }}
      gap="medium"
      background={'white'}
    >
      <Sidebar />
      {children}
    </Box>
  </>
);

export default DefaultLayout;
