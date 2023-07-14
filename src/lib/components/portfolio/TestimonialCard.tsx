import { Flex, useColorModeValue, Tag, Box, Text } from '@chakra-ui/react';

import CaptionCarousel from '../carousel/carousel';

import type { TestimonialCardProps } from './types';

const TestimonialCard = (props: TestimonialCardProps) => {
  const { name, start, end, content, pictures } = props;
  return (
    <Flex
      boxShadow="xl"
      maxW="740px"
      direction={{ base: 'column-reverse', md: 'row' }}
      width="90vw"
      rounded="xl"
      p={6}
      m={4}
      gap={4}
      justifyContent="space-between"
      position="relative"
      bg={useColorModeValue('purple.100', 'purple.700')}
    >
      <Flex
        w="80vw"
        direction="column"
        textAlign="left"
        justifyContent="space-between"
      >
        <Text
          fontFamily="Inter"
          fontWeight="medium"
          fontSize={{ base: '14px', md: '18px' }}
          pb={4}
        >
          {content}
        </Text>
        <Text
          fontFamily="Work Sans"
          fontWeight="bold"
          fontSize={{ base: '16px', md: '20px' }}
          ml={2}
        >
          {name}
          <br />
          <Tag
            size="md"
            variant="solid"
            colorScheme="purple"
            key={start}
            mt={2}
          >
            {start}
          </Tag>{' '}
          <br />
          <Tag size="md" variant="solid" colorScheme="purple" key={end} mt={2}>
            {end}
          </Tag>
        </Text>
      </Flex>
      <Box
        position="relative"
        width="80vw"
        rounded="2xl"
        alignSelf="center"
        overflow="hidden"
      >
        <CaptionCarousel images={pictures} height="300px" />
      </Box>
    </Flex>
  );
};

export default TestimonialCard;
