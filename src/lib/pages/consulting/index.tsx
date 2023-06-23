import { CheckIcon } from '@chakra-ui/icons';
import {
  Box,
  chakra,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  SimpleGrid,
  Stack,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
  VStack,
  Text,
  SlideFade,
} from '@chakra-ui/react';
import { NextSeo } from 'next-seo';
import type { ReactNode } from 'react';
import { BsFillBuildingFill } from 'react-icons/bs';
import { GiReceiveMoney, GiAbstract118 } from 'react-icons/gi';

import ConsultingText from '~/lib/components/consulting/ConsultingText';

interface StatsCardProps {
  title: string;
  stat: string;
  icon: ReactNode;
}

const features = [
  {
    id: 1,
    title: '시장조사를 통한 타겟 수립',
  },
  {
    id: 2,
    title: '운영 컨셉 확정',
  },
  {
    id: 3,
    title: '건축 / 인테리어 / 브랜딩 설계 지원',
  },
  {
    id: 4,
    title: '공간 내 모든 소모품 및 자산 소싱 지원',
  },
  {
    id: 5,
    title: '인허가 및 운영시스템 구축 지원',
  },
];

function StatsCard(props: StatsCardProps) {
  const { title, stat, icon } = props;
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py="5"
      shadow="xl"
      border="1px solid"
      borderColor={useColorModeValue('gray.800', 'gray.500')}
      rounded="lg"
    >
      <Flex justifyContent="space-between">
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight="medium" color="purple.400" isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize="2xl" fontWeight="medium">
            {stat}
          </StatNumber>
        </Box>
        <Box
          my="auto"
          color={useColorModeValue('gray.800', 'gray.200')}
          alignContent="center"
        >
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}

const Consulting = () => {
  return (
    <Box maxW="7xl" mx="auto" pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <NextSeo title="Consulting" />
      <chakra.h1 textAlign="center" fontSize="4xl" py={10} fontWeight="bold">
        핵심가치
      </chakra.h1>
      <SlideFade in delay={0.5}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
          <StatsCard
            title="Space Value Maximization"
            stat="공간 가치 극대화"
            icon={<BsFillBuildingFill size="3em" />}
          />
          <StatsCard
            title="Cost Reduction"
            stat="원가 절감 극대화"
            icon={<GiReceiveMoney size="3em" />}
          />
          <StatsCard
            title="Operation Maximization"
            stat="운영 효율 극대화"
            icon={<GiAbstract118 size="3em" />}
          />
        </SimpleGrid>
        <Box pt={20}>
          <Stack spacing={4} as={Container} maxW="3xl" textAlign="center">
            <Heading fontSize="3xl">L&K의 OS Consulting</Heading>
          </Stack>
          <Container maxW="6xl" mt={10}>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
              {features.map((feature) => (
                <HStack key={feature.id} align="top">
                  <Box color="green.400" px={2}>
                    <Icon as={CheckIcon} />
                  </Box>
                  <VStack align="start">
                    <Text fontWeight={600}>{feature.title}</Text>
                  </VStack>
                </HStack>
              ))}
            </SimpleGrid>
          </Container>
        </Box>
      </SlideFade>
      <SlideFade in delay={1}>
        <ConsultingText />
      </SlideFade>
    </Box>
  );
};

export default Consulting;
