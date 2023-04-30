import type { IconProps } from '@chakra-ui/react';
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';

export const Blob = (props: IconProps) => {
  return (
    <Icon
      width="100%"
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  );
};

const ConsultingText = () => {
  return (
    <Container maxW="7xl">
      <Stack
        align="center"
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 7 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
          >
            <Text
              as="span"
              position="relative"
              _after={{
                content: "''",
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'red.400',
                zIndex: -1,
              }}
            >
              OS Consulting,
            </Text>
            <br />
            <Text as="span" color="red.400">
              OneStop consulting
            </Text>
          </Heading>
          <Text color="gray.500">
            L&K는 호텔/숙박시설 건립을 하는 과정에서 클라이언트를 대리하여
            전반적 프로젝트를 총괄함에 따라 동일 기간 내 동시다발적 프로젝트를
            진행하지 않으며, 한 가지 프로젝트만 맡아서 진행합니다. 컨설팅을
            진행함에 있어 클라이언트와의 지속적인 소통을 통해 클라이언트가
            추구하는 호텔/숙박시설을 만들어 낼 수 있도록 합니다. 호텔은 단순
            숙박시설이 아닌 문화공간입니다. 방문하는 고객들은 24시간 이상
            체류하며 공간을 경험하게 됩니다.
          </Text>
          <Stack spacing={{ base: 4, sm: 6 }} alignItems="center">
            <Button
              rounded="full"
              size="lg"
              fontWeight="normal"
              px={6}
              colorScheme="red"
              bg="red.400"
              _hover={{ bg: 'red.500' }}
            >
              Contact Us
            </Button>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify="center"
          align="center"
          position="relative"
          w="full"
        >
          <Blob
            w="150%"
            h="150%"
            position="absolute"
            top="-20%"
            left={0}
            zIndex={-1}
            color={useColorModeValue('red.50', 'red.400')}
          />
          <Box
            position="relative"
            height="400px"
            rounded="2xl"
            boxShadow="2xl"
            width="full"
            overflow="hidden"
          >
            <Image
              alt="Hero Image"
              fit="cover"
              align="center"
              w="100%"
              h="100%"
              src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
};

export default ConsultingText;
