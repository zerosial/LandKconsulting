import {
  Box,
  chakra,
  Flex,
  SimpleGrid,
  useColorModeValue,
  Text,
  SlideFade,
} from '@chakra-ui/react';
import { NextSeo } from 'next-seo';

import CaptionCarousel from '~/lib/components/carousel/carousel';

const testimonials = [
  {
    name: '“오키드 호텔 원주”',
    role: '2017/06 준공 - 2019/12 개관',
    content:
      'L&K Operation의 임직원은 첫번째 자사 호텔 건립을 시작하였습니다. 시장조사, 타겟수립, 건축/인테리어 설계, 브랜딩, FF&E 소싱, 영업, 인허가, 오픈까지 모든 작업을 총괄로 진행하였습니다. 수 많은 시행착오를 겪었지만 이는 곧 팀을 성장하게 만들었습니다.',
    pictures: [
      {
        title: '',
        image: 'picture/orchid_lobie.jpg',
      },
      {
        title: '',
        image: 'picture/orchid_lobie2.jpg',
      },
      {
        title: '',
        image: 'picture/orchid_rooftop.jpg',
      },
      {
        title: '',
        image: 'picture/orchid_banquet.jpg',
      },
    ],
  },
  {
    name: '“호텔 시엘로”',
    role: '2021/10 준공 - 2022/08 개관',
    content:
      '클라이언트와 3달간의 미팅과 소통을 통해 파트너사로써 선정이 되었습니다. 오키드 호텔에서의 경험을 통해 장/단점을 서로 공유 하고 이를 개선하고자 2021년 10월부터 소통을 시작하여 2022년 01월 건축물 골조가 완료된 상태에서 합류, 인테리어 설계, 브랜딩 설계, 소싱, 운영시스템 구축을 컨설팅 하였습니다',
    pictures: [
      {
        title: '',
        image: 'picture/cielo1.jpg',
      },
      {
        title: '',
        image: 'picture/cielo2.jpg',
      },
      {
        title: '',
        image: 'picture/cielo_lobie.jpg',
      },
      {
        title: '',
        image: 'picture/cielo_rooftop.jpg',
      },
    ],
  },
];

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  pictures: Image[];
  index: number;
}
interface Image {
  title: string;
  image: string;
}

function TestimonialCard(props: TestimonialCardProps) {
  const { name, role, content, pictures } = props;
  return (
    <Flex
      boxShadow="xl"
      maxW="760px"
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
        >
          {name}
          <Text
            fontFamily="Inter"
            fontWeight="medium"
            color="gray.500"
            fontSize={16}
          >
            {' '}
            - {role}
          </Text>
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
}

const Portfolio = () => {
  return (
    <Flex
      textAlign="center"
      pt={10}
      justifyContent="center"
      direction="column"
      width="full"
      overflow="hidden"
    >
      <NextSeo title="partners" />
      <SlideFade in delay={0.5}>
        <Box width={{ base: 'full', sm: 'lg', lg: 'xl' }} margin="auto">
          <chakra.h3
            fontFamily="Work Sans"
            fontWeight="bold"
            fontSize={24}
            textTransform="uppercase"
            color="purple.400"
          >
            L&K의 포트폴리오
          </chakra.h3>
          <chakra.h1
            py={5}
            fontSize={48}
            fontFamily="Work Sans"
            color={useColorModeValue('gray.700', 'gray.50')}
          >
            함께하는 호텔
          </chakra.h1>
          <chakra.h2
            margin="auto"
            width="70%"
            fontFamily="Inter"
            fontWeight="medium"
            color={useColorModeValue('gray.500', 'gray.400')}
          >
            아래와 같은{' '}
            <chakra.strong color={useColorModeValue('gray.700', 'gray.50')}>
              2개
            </chakra.strong>{' '}
            의 호텔들이 저희와 함께하고 있습니다
          </chakra.h2>
        </Box>
      </SlideFade>
      <SimpleGrid
        columns={{ base: 1, '2xl': 2 }}
        spacing="8"
        mt={16}
        mb={16}
        mx="auto"
      >
        {testimonials.map((cardInfo, index) => (
          <SlideFade in delay={index / 2 + 1}>
            <TestimonialCard {...cardInfo} index={index} />
          </SlideFade>
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default Portfolio;
