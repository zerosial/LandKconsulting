import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import type { ReactElement } from 'react';
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from 'react-icons/io5';

interface FeatureProps {
  text: string;
  subtext: string;
  iconBg: string;
  icon?: ReactElement;
}

const Feature = ({ text, subtext, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction="row" align="center" gap={4}>
      <Flex
        w={8}
        h={8}
        align="center"
        justify="center"
        rounded="full"
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Stack>
        <Text fontWeight={600}>{text}</Text>
        <Text fontWeight={400} size="xs">
          {subtext}
        </Text>
      </Stack>
    </Stack>
  );
};

const About = () => {
  return (
    <Container maxW="5xl" py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform="uppercase"
            color="blue.400"
            fontWeight={600}
            fontSize="sm"
            bg={useColorModeValue('blue.50', 'blue.900')}
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
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.100', 'gray.700')}
              />
            }
          >
            <Feature
              icon={
                <Icon as={IoAnalyticsSharp} color="yellow.500" w={5} h={5} />
              }
              iconBg={useColorModeValue('yellow.100', 'yellow.900')}
              text="오키드 호텔"
              subtext="모 회사는 “㈜오키드호텔” 이며 현재 오키드호텔 원주 (관광호텔)를 소유 및 운영중에 있습니다. L&K의 임직원은
              오키드호텔을 건립하는 과정에서 수 많은 컨설팅 업체들을 접하였으며, 이 과정에서 많은 불필요한 시간과 지출을
              경험 하였습니다"
            />
            <Feature
              icon={<Icon as={IoLogoBitcoin} color="green.500" w={5} h={5} />}
              iconBg={useColorModeValue('green.100', 'green.900')}
              text="문제 해결"
              subtext="이를 탈피하고자 많은 고심 끝에 새로운 컨설팅 컨셉으로 관련 업계를 선도 및 직접 운영을 하며 얻은 경험치와
              실무경력을 바탕으로 클라이언트에게 최적화된 컨설팅을 지원하고자 본 사업체를 설립하게 되었습니다"
            />
            <Feature
              icon={<Icon as={IoSearchSharp} color="purple.500" w={5} h={5} />}
              iconBg={useColorModeValue('purple.100', 'purple.900')}
              text="이후 컨설팅"
              subtext="L&K의 임직원은 2017년 호텔 설계를 시작으로 관광호텔 인허가, 호텔 건축 설계, 인테리어 설계, 브랜딩, 호텔 내 FF
              &E 선정 및 중국 소싱, 호텔 운영시스템 설계까지 모든 과정을 직접 진행하였으며, 이후 2021년 “호텔시엘로거북섬”에 위치한 호텔을 컨설팅 및 총괄 관리 하였습니다. 이 과정에서의 얻은 경험치를 바탕으로 최적화된
              컨설팅을 지원하겠습니다."
            />
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded="md"
            alt="feature image"
            src="https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            objectFit="cover"
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
};

export default About;
