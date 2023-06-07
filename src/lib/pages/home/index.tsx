import { Box, Flex } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';

import CaptionCarousel from '~/lib/components/carousel/carousel';
import { HOME_CAROUSEL_IMAGES } from '~/lib/components/Constants';

const Home = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      minHeight="70vh"
      gap={4}
      w="full"
    >
      <NextSeo title="Home" />
      <Box
        position="relative"
        height={{ base: '500px', md: '600px' }}
        width="full"
        overflow="hidden"
      >
        <CaptionCarousel images={HOME_CAROUSEL_IMAGES} height="600px" />
      </Box>
    </Flex>
  );
};

export default Home;
