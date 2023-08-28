import {
  Box,
  Container,
  Flex,
  Heading,
  SlideFade,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

import { Card } from '~/lib/components/partners/Card';
import { PARTNERS_KOREAN_TEXTS } from '~/lib/constants';

const Partners = () => {
  return (
    <Box p={4} pt={8}>
      <Stack spacing={4} as={Container} maxW="5xl">
        <SlideFade in delay={0.5}>
          <Heading
            fontSize={{ base: '2xl', sm: '4xl' }}
            fontWeight="bold"
            fontFamily="mono"
            color={useColorModeValue('purple.400', 'purple.600')}
            textAlign="center"
          >
            Partners
          </Heading>
          <Text
            pt={8}
            color={useColorModeValue('gray.600', 'gray.200')}
            fontSize={{ base: 'md', sm: 'lg' }}
          >
            {PARTNERS_KOREAN_TEXTS.DESCRIPTION}
          </Text>
          <Text
            pt={8}
            color={useColorModeValue('gray.600', 'gray.200')}
            fontSize={{ base: 'md', sm: 'lg' }}
          >
            {PARTNERS_KOREAN_TEXTS.OPTION_DESCRIPTION}
          </Text>
        </SlideFade>
      </Stack>
      <Container maxW="5xl" mt={12}>
        <SlideFade in delay={1}>
          <Flex flexWrap="wrap" gridGap={12} justify="center">
            {PARTNERS_KOREAN_TEXTS.CARDS.map((card) => (
              <Card
                key={card.heading}
                heading={card.heading}
                description={card.description}
                subDescription={card.subDescription}
                imageLight={card.imageBlack}
                imageDark={card.image}
              />
            ))}
          </Flex>
        </SlideFade>
      </Container>
    </Box>
  );
};

export default Partners;
