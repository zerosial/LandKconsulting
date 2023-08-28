import { CheckIcon } from '@chakra-ui/icons';
import {
  Box,
  chakra,
  Container,
  Heading,
  HStack,
  Icon,
  SimpleGrid,
  Stack,
  VStack,
  Text,
  SlideFade,
} from '@chakra-ui/react';
import { NextSeo } from 'next-seo';

import StatsCard from '~/lib/components/consulting/ConsultingStatsCard';
import ConsultingText from '~/lib/components/consulting/ConsultingText';
import {
  CONSULTING_KOREAN_TABS,
  CONSULTING_KOREAN_TABLE,
  CONSULTING_KOREAN_TEXT,
} from '~/lib/constants';

const Consulting = () => {
  return (
    <Box maxW="7xl" mx="auto" pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <NextSeo title="Consulting" />
      <chakra.h1 textAlign="center" fontSize="4xl" py={10} fontWeight="bold">
        {CONSULTING_KOREAN_TEXT.title}
      </chakra.h1>
      <SlideFade in delay={0.5}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
          {CONSULTING_KOREAN_TABS.map((data) => (
            <StatsCard {...data} />
          ))}
        </SimpleGrid>
        <Box pt={20}>
          <Stack spacing={4} as={Container} maxW="3xl" textAlign="center">
            <Heading fontSize="3xl">{CONSULTING_KOREAN_TEXT.heading}</Heading>
          </Stack>
          <Container maxW="6xl" mt={10}>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
              {CONSULTING_KOREAN_TABLE.map((feature) => (
                <HStack key={feature.id} align="top">
                  <Box color="green.400" px={2}>
                    <Icon as={CheckIcon} />
                  </Box>
                  <VStack align="start">
                    <Text fontWeight={600}>{feature.title}</Text>
                  </VStack>
                </HStack>
              ))}
            </SimpleGrid>
          </Container>
        </Box>
      </SlideFade>
      <SlideFade in delay={1}>
        <ConsultingText {...CONSULTING_KOREAN_TEXT} />
      </SlideFade>
    </Box>
  );
};

export default Consulting;
