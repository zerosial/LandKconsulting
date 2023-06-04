import { Box, Stack } from '@chakra-ui/react';
import type { ReactNode } from 'react';

import Footer from './Footer';
import Header from './Header';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box margin="0 auto" transition="0.5s ease-out">
      <Box>
        <Header />
        <Box as="main">{children}</Box>
        <Stack h="32" />
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;
