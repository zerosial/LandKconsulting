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
            L&K는 자사 호텔 건축/설계/운영까지 준비과정에서 많은 파트너사와
            협업을 하였습니다. 이 과정에서 선별된 된 파트너사와는 현재까지도
            업무를 교류하며 함께 파트너 관계를 유지하고 있습니다.
          </Text>
          <Text
            pt={8}
            color={useColorModeValue('gray.600', 'gray.200')}
            fontSize={{ base: 'md', sm: 'lg' }}
          >
            저희의 파트너는 클라이언트에게 드리는 한가지 옵션입니다. 충분히
            검토를 하시고 함께 소통하여 최적화된 파트너를 찾는 것이 핵심입니다.
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
              subDescription="Branding Company"
            />
            <Card
              heading="Flot"
              image={useColorModeValue(
                '/picture/Flot_black.png',
                '/picture/Flot.png'
              )}
              description="호텔에 최적화된 디자인"
              subDescription="Design Company"
            />
          </Flex>
        </SlideFade>
      </Container>
    </Box>
  );
};

export default Partners;
