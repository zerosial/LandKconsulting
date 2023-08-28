import { Box, chakra, Flex, SimpleGrid, SlideFade } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';

import TestimonialCard from '~/lib/components/portfolio/TestimonialCard';
import { PORTFOLIO_KOREAN_TEXTS } from '~/lib/constants';

const Portfolio = () => {
  return (
    <Flex
      textAlign="center"
      pt={10}
      justifyContent="center"
      direction="column"
      width="full"
      overflow="hidden"
    >
      <NextSeo title="partners" />
      <SlideFade in delay={0.5}>
        <Box width={{ base: 'full', sm: 'lg', lg: 'xl' }} margin="auto">
          <chakra.h3
            fontFamily="Work Sans"
            fontWeight="bold"
            fontSize={24}
            textTransform="uppercase"
            color="purple.400"
          >
            L&K Consulting Group Portfolio
          </chakra.h3>
        </Box>
      </SlideFade>
      <SimpleGrid
        columns={{ base: 1, '2xl': 2 }}
        spacing="8"
        mt={8}
        mb={16}
        mx="auto"
      >
        {PORTFOLIO_KOREAN_TEXTS.map((cardInfo, index) => (
          <SlideFade in delay={index / 2 + 1}>
            <TestimonialCard {...cardInfo} index={index} />
          </SlideFade>
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default Portfolio;
