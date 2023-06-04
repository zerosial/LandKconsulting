import {
  Stack,
  Flex,
  Text,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';

const Partners = () => {
  return (
    <Flex
      w="full"
      h="100vh"
      backgroundImage="url(/picture/orchid_lobie.jpg)"
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
            L&K는 자사 호텔 건축/설계/운영까지 준비과정에서 많은 파트너사와
            협업을 하였습니다.
          </Text>
          <Text
            color="white"
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: 'xl', md: '2xl' })}
          >
            이 과정에서 선별된 된 파트너사와는 현재까지도 업무를 교류하면 함께
            파트너 관계를 유지하고 있습니다.
          </Text>
          <Text
            color="white"
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: 'xl', md: '2xl' })}
          >
            인테리어 설계 (Interior)
          </Text>
          <Text
            color="white"
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: 'xl', md: '2xl' })}
          >
            브랜딩 설계 (Branding)
          </Text>
          <Text
            color="white"
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: 'xl', md: '2xl' })}
          >
            국내/외 소싱 및 구매 (Sourcing & Purchasing)
          </Text>
        </Stack>
      </VStack>
    </Flex>
  );
};

export default Partners;
