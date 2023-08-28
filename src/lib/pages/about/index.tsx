/* eslint-disable sonarjs/no-duplicate-string */

import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  SlideFade,
  Box,
  Tag,
} from '@chakra-ui/react';
import { NextSeo } from 'next-seo';

import { ABOUT_KOREAN_TEXT } from '~/lib/constants';

const About = () => {
  return (
    <Container maxW="8xl" py={12}>
      <NextSeo title="About" />
      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10}>
        <SlideFade in delay={0.5}>
          <Stack spacing={4}>
            <Text
              textTransform="uppercase"
              color="purple.400"
              fontWeight={600}
              fontSize="sm"
              bg={useColorModeValue('purple.100', 'purple.900')}
              p={2}
              alignSelf="flex-start"
              rounded="md"
            >
              About L&K
            </Text>
            <Heading>{ABOUT_KOREAN_TEXT.heading}</Heading>
            <Box>
              <Text color="gray.500" fontSize="md">
                {ABOUT_KOREAN_TEXT.title}
              </Text>
            </Box>
            <Text fontSize={18}>
              <Tag size="md" variant="solid" colorScheme="purple" mx={1}>
                {ABOUT_KOREAN_TEXT.firstHotel}
              </Tag>
              <Tag size="md" variant="solid" colorScheme="purple" mx={1}>
                {ABOUT_KOREAN_TEXT.secondHotel}
              </Tag>
              {ABOUT_KOREAN_TEXT.firstBody}
            </Text>
            <Text fontSize={18}>{ABOUT_KOREAN_TEXT.secondBody}</Text>
          </Stack>
        </SlideFade>
        <SlideFade in offsetX="10px" delay={1}>
          <Flex>
            <Image
              rounded="md"
              alt="feature image"
              src="/picture/talking.jpg"
              objectFit="cover"
            />
          </Flex>
        </SlideFade>
      </SimpleGrid>
    </Container>
  );
};

export default About;
