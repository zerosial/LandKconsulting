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
  iconBg: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
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
              text="시장조사를 통한 공간 설립"
            />
            <Feature
              icon={<Icon as={IoLogoBitcoin} color="green.500" w={5} h={5} />}
              iconBg={useColorModeValue('green.100', 'green.900')}
              text="운영 방안 구축"
            />
            <Feature
              icon={<Icon as={IoSearchSharp} color="purple.500" w={5} h={5} />}
              iconBg={useColorModeValue('purple.100', 'purple.900')}
              text="건축 / 인테리어 / 브랜딩 설계 지원"
            />
            <Feature
              icon={<Icon as={IoSearchSharp} color="purple.500" w={5} h={5} />}
              iconBg={useColorModeValue('red.100', 'red.900')}
              text="공간 내 모든 소모품 및 자산 소싱 지원 (국내 / 해외)"
            />
            <Feature
              icon={<Icon as={IoSearchSharp} color="purple.500" w={5} h={5} />}
              iconBg={useColorModeValue('blue.100', 'blue.900')}
              text="인허가 및 운영시스템 구축 지원"
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
