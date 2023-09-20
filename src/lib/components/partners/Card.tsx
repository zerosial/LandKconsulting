import {
  Box,
  Flex,
  Heading,
  Stack,
  useColorModeValue,
  Image,
  Text,
} from '@chakra-ui/react';
import { NextSeo } from 'next-seo';

import type { CardProps } from './type';

export const Card = ({
  heading,
  description,
  subDescription,
  imageLight,
  imageDark,
}: CardProps) => {
  const image = useColorModeValue(imageLight, imageDark);
  return (
    <Box
      maxW={{ base: 'full', md: '275px' }}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
    >
      <NextSeo title="Partners" />
      <Stack spacing={2}>
        <Flex
          w={60}
          h={32}
          align="center"
          justify="center"
          color="white"
          rounded="xl"
          bg={useColorModeValue('purple.100', 'purple.700')}
        >
          <Image src={image} />
        </Flex>
        <Box pt={4} pl={4}>
          <Heading size="md">{heading}</Heading>
          <Text mt={2} fontSize="sm">
            {description}
          </Text>
          <Text mt={2} fontSize="sm" align="center" fontWeight={600}>
            {subDescription}
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};
