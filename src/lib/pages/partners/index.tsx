import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  SlideFade,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { NextSeo } from 'next-seo';

interface CardProps {
  heading: string;
  description: string;
  image: string;
}

const Card = ({ heading, description, image }: CardProps) => {
  return (
    <Box
      maxW={{ base: 'full', md: '275px' }}
      w="full"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
    >
      <NextSeo title="Partners" />
      <Stack align="start" spacing={2}>
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
        <Box pt={4}>
          <Heading size="md">{heading}</Heading>
          <Text mt={2} fontSize="sm">
            {description}
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};

const Partners = () => {
  return (
    <Box p={4} pt={8}>
      <Stack spacing={4} as={Container} maxW="5xl" textAlign="center">
        <SlideFade in delay={0.5}>
          <Heading
            fontSize={{ base: '2xl', sm: '4xl' }}
            fontWeight="bold"
            fontFamily="mono"
            color={useColorModeValue('purple.400', 'purple.600')}
          >
            Partners
          </Heading>
          <Text
            pt={8}
            color={useColorModeValue('gray.600', 'gray.200')}
            fontSize={{ base: 'md', sm: 'lg' }}
          >
            L&K는 자사 호텔 건축/설계/운영까지 준비과정에서 많은 파트너사와
            협업을 하였습니다. 이 과정에서 선별된 된 파트너사와는 현재까지도
            업무를 교류하면 함께 파트너 관계를 유지하고 있습니다. 저희의
            파트너는 클라이언트에게 드리는 한가지 옵션입니다. 충분히 검토를
            하시고 함께 소통하여 최적화된 파트너를 찾는 것이 핵심입니다.
          </Text>
        </SlideFade>
      </Stack>
      <Container maxW="5xl" mt={12}>
        <SlideFade in delay={1}>
          <Flex flexWrap="wrap" gridGap={12} justify="center">
            <Card
              heading="Lecor"
              image={useColorModeValue(
                '/picture/Lecor_black.png',
                '/picture/Lecor.png'
              )}
              description="브랜드 비지니스 전개의 최첨단"
            />
            <Card
              heading="Flot"
              image={useColorModeValue(
                '/picture/Flot_black.png',
                '/picture/Flot.png'
              )}
              description="호텔에 최적화된 디자인"
            />
          </Flex>
        </SlideFade>
      </Container>
    </Box>
  );
};

export default Partners;
