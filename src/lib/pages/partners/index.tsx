import {
  Box,
  chakra,
  Flex,
  SimpleGrid,
  useColorModeValue,
  Text,
  Image,
} from '@chakra-ui/react';
import { NextSeo } from 'next-seo';

const testimonials = [
  {
    name: 'Brandon P.',
    role: 'Chief Marketing Officer',
    content:
      'It really saves me time and effort. It is exactly what our business has been lacking. EEZY is the most valuable business resource we have EVER purchased. After using EEZY my business skyrocketed!',
    picture: 'picture/cielo1.jpg',
  },
  {
    name: 'Brandon P2.',
    role: 'Chief Marketing Officer',
    content:
      'It really saves me time and effort. It is exactly what our business has been lacking. EEZY is the most valuable business resource we have EVER purchased. After using EEZY my business skyrocketed!',
    picture: 'picture/cielo1.jpg',
  },
];

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  picture: string;
  index: number;
}

function TestimonialCard(props: TestimonialCardProps) {
  const { name, role, content, picture } = props;
  return (
    <Flex
      boxShadow="lg"
      maxW="760px"
      direction={{ base: 'column-reverse', md: 'row' }}
      width="85vw"
      rounded="xl"
      p={10}
      m={6}
      justifyContent="space-between"
      position="relative"
      bg={useColorModeValue('purple.100', 'purple.700')}
    >
      <Flex direction="column" textAlign="left" justifyContent="space-between">
        <Text fontFamily="Inter" fontWeight="medium" fontSize="15px" pb={4}>
          {content}
        </Text>
        <Text fontFamily="Work Sans" fontWeight="bold" fontSize={14}>
          {name}
          <Text fontFamily="Inter" fontWeight="medium" color="gray.500">
            {' '}
            - {role}
          </Text>
        </Text>
      </Flex>
      <Image
        src={picture}
        width="400px"
        height="300px"
        rounded="2xl"
        objectFit="cover"
        alignSelf="center"
        m={{ base: '0 0 35px 0', md: '0 0 0 50px' }}
      />
    </Flex>
  );
}

const Partners = () => {
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
      <Box width={{ base: 'full', sm: 'lg', lg: 'xl' }} margin="auto">
        <chakra.h3
          fontFamily="Work Sans"
          fontWeight="bold"
          fontSize={20}
          textTransform="uppercase"
          color="purple.400"
        >
          People love us
        </chakra.h3>
        <chakra.h1
          py={5}
          fontSize={48}
          fontFamily="Work Sans"
          fontWeight="bold"
          color={useColorModeValue('gray.700', 'gray.50')}
        >
          Youre in good company
        </chakra.h1>
        <chakra.h2
          margin="auto"
          width="70%"
          fontFamily="Inter"
          fontWeight="medium"
          color={useColorModeValue('gray.500', 'gray.400')}
        >
          See why over{' '}
          <chakra.strong color={useColorModeValue('gray.700', 'gray.50')}>
            150,000+
          </chakra.strong>{' '}
          influencers use EEZY to manage their social media content!
        </chakra.h2>
      </Box>
      <SimpleGrid
        columns={{ base: 1, '2xl': 2 }}
        spacing="8"
        mt={16}
        mb={16}
        mx="auto"
      >
        {testimonials.map((cardInfo, index) => (
          <TestimonialCard {...cardInfo} index={index} />
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default Partners;
