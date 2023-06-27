import { CheckIcon } from '@chakra-ui/icons';
import {
  Box,
  chakra,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  SimpleGrid,
  Stack,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
  VStack,
  Text,
  SlideFade,
} from '@chakra-ui/react';
import { NextSeo } from 'next-seo';

import {
  CONSULTING_KOREAN_TABS,
  CONSULTING_KOREAN_TABLE,
  CONSULTING_KOREAN_TEXT,
} from '~/lib/components/Constants';
import ConsultingText from '~/lib/components/consulting/ConsultingText';

import type { StatsCardProps } from './types';

function StatsCard(props: StatsCardProps) {
  const { title, stat, icon } = props;
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py="5"
      shadow="xl"
      border="1px solid"
      borderColor={useColorModeValue('gray.800', 'gray.500')}
      rounded="lg"
    >
      <Flex justifyContent="space-between">
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight="medium" color="purple.400" isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize="2xl" fontWeight="medium">
            {stat}
          </StatNumber>
        </Box>
        <Box
          my="auto"
          color={useColorModeValue('gray.800', 'gray.200')}
          alignContent="center"
        >
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}

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
