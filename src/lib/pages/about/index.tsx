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
            <Heading>L&K에 대하여</Heading>
            <Box>
              <Text color="gray.500" fontSize="md">
                L&K는 OS 컨설팅을 주력사업으로 하는 컨설팅 회사이며 모 회사는
                관광호텔을 운영하는 법인입니다
              </Text>
            </Box>
            <Text fontSize={18}>
              현재는
              <Tag size="md" variant="solid" colorScheme="purple" mx={1}>
                오키드호텔 원주 - 운영 및 소유
              </Tag>
              <Tag size="md" variant="solid" colorScheme="purple" mx={1}>
                시엘로호텔 시흥 - 운영 컨설팅
              </Tag>
              을 진행하고 있습니다. L&K는 1st 프로젝트인 오키드호텔을 설계,
              건축, 준공하는 과정에서 수 많은 컨설팅 업체들을 접하였으며, 이
              과정에서 많은 불 필요한 시간과 지출을 경험 하였습니다. 이를
              탈피하고자 많은 고심 끝에 새로운 컨설팅 컨셉으로 클라이언트에게
              최적화된 컨설팅을 지원하고자 본 사업체를 설립하게 되었습니다.
            </Text>
            <Text fontSize={18}>
              L&K의 임직원은 2017년 호텔 설계를 시작으로 관광호텔 인허가, 호텔
              건축 설계, 인테리어 설계, 브랜딩, 호텔 내 F F&E 선정 및 중국 소싱,
              호텔 운영시스템 설계까지 모든 과정을 직접 진행하였으며, 이후
              2021년 “시엘로호텔시흥”을 컨설팅 및 총괄 관리 하였습니다. 이
              과정에서의 얻은 경험치를 바탕으로 최적화된 컨설팅을
              지원하겠습니다.
            </Text>
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
