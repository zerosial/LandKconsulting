import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import { SiTistory } from 'react-icons/si';

import { Logo } from '../components/footer/Logo';
import { SocialButton } from '../components/footer/SocialButton';

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue('gray.100', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
      position="fixed"
      w="100%"
      bottom={0}
      zIndex={3}
    >
      <Container
        as={Stack}
        maxW="8xl"
        px={4}
        py={2}
        direction={{ base: 'column', md: 'row' }}
        spacing={2}
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
