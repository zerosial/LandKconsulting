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
            <Text color="gray.500" fontSize="lg">
              L&K는 OS 컨설팅을 주력사업으로 하는 회사입니다
            </Text>
            <Text fontSize={18}>
              모 회사는 “㈜오키드호텔” 이며 현재 오키드호텔 원주 (관광호텔)를
              소유 및 운영 중에 있습니다. L&K의 임직원은 오키드호텔을 건립하는
              과정에서 수 많은 컨설팅 업체들을 접하였으며, 이 과정에서 많은
              불필요한 시간과 지출을 경험 하였습니다.
            </Text>
            <Text fontSize={18}>
              이를 탈피하고자 많은 고심 끝에 새로운 컨설팅 컨셉으로 관련 업계를
              선도 및 직접 운영을 하며 얻은 경험치와 실무경력을 바탕으로
              클라이언트에게 최적화된 컨설팅을 지원하고자 본 사업체를 설립하게
              되었습니다.
            </Text>
            <Text fontSize={18}>
              L&K의 임직원은 2017년 호텔 설계를 시작으로 관광호텔 인허가, 호텔
              건축 설계, 인테리어 설계, 브랜딩, 호텔 내 FF &E 선정 및 중국 소싱,
              호텔 운영시스템 설계까지 모든 과정을 직접 진행하였으며, 이후
              2021년 “호텔시엘로거북섬”에 위치한 호텔을 컨설팅 및 총괄 관리
              하였습니다. 이 과정에서의 얻은 경험치를 바탕으로 최적화된 컨설팅을
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
