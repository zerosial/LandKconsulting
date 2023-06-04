import {
  Stack,
  Flex,
  Text,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';

const Portfolio = () => {
  return (
    <Flex
      w="full"
      h="100vh"
      backgroundImage="url(/picture/cielo_lobie.jpg)"
      backgroundSize="cover"
      backgroundPosition="center center"
    >
      <VStack
        w="full"
        justify="center"
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient="linear(to-r, blackAlpha.600, transparent)"
      >
        <Stack maxW="2xl" align="flex-start" spacing={6}>
          <Text
            color="purple.100"
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}
          >
            L&K Operation은 2021년 10월 첫번째 프로젝트를 진행합니다.
          </Text>
          <Text
            color="white"
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: 'xl', md: '2xl' })}
          >
            “호텔 시엘로” 클라이언트와 3달간의 미팅과 소통을 통해 “갑”과 “을”의
            관계가 아닌 파트너사로써 선정이 되었습니다. 원주 오키드호텔에서의
            투숙 경험을 통해 장/단점을 서로 공유 하고 이를 개선하고자 2021년
            10월부터 소통을 시작하여 2022년 01월 건축물 골조가 완료된 상태에서
            조인하여 인테리어 설계, 브랜딩 설계, 소싱, 운영시스템 구축을 컨설팅
            하였으며 2022년 08월 인허가를 통해 호텔 준공을 받아 개관하였습니다.
          </Text>
        </Stack>
      </VStack>
    </Flex>
  );
};

export default Portfolio;
