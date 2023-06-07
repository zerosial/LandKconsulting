import { Flex } from '@chakra-ui/react';
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
      <CaptionCarousel images={HOME_CAROUSEL_IMAGES} />
    </Flex>
  );
};

export default Home;
