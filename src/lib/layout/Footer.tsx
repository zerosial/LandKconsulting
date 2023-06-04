import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  Image,
} from '@chakra-ui/react';
import type { ReactNode } from 'react';
import { FaGithub } from 'react-icons/fa';
import { SiTistory } from 'react-icons/si';

const Logo = () => {
  return (
    <Image
      src={useColorModeValue(
        '/picture/logo_long_black.png',
        '/picture/logo_long.png'
      )}
      width="52"
      height="12"
      alt="로고"
    />
  );
};

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded="full"
      w={8}
      h={8}
      cursor="pointer"
      as="a"
      href={href}
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      transition="background 0.3s ease"
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue('gray.100', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
      position="fixed"
      w="100%"
      bottom={0}
    >
      <Container
        as={Stack}
        maxW="8xl"
        px={8}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Logo />
        <Text>© 2023 made Brian. All rights reserved</Text>
        <Stack
          direction="row"
          spacing={6}
          display={{ base: 'none', md: 'block' }}
        >
          <SocialButton label="Github" href="https://github.com/zerosial">
            <FaGithub />
          </SocialButton>
          <SocialButton label="Tistory" href="https://zerosial.tistory.com/">
            <SiTistory />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
