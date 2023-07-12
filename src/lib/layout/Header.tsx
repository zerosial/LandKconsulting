import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  IconButton,
  Stack,
  Collapse,
  Link,
  useColorModeValue,
  useDisclosure,
  Image,
} from '@chakra-ui/react';
import NextLink from 'next/link';

import { DesktopNav } from '../components/header/DesktopNav';
import { MobileNav } from '../components/header/MobileNav';

import ThemeToggle from './ThemeToggle';

const Header = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.900')}
        color={useColorModeValue('gray.600', 'white')}
        minH="60px"
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle="solid"
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align="center"
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant="ghost"
            aria-label="Toggle Navigation"
          />
        </Flex>
        <Flex
          flex={{ base: 1 }}
          justify={{ base: 'center', md: 'start' }}
          align="center"
        >
          <Link as={NextLink} href="/">
            <Image
              src={useColorModeValue(
                '/picture/logo_black.png',
                '/picture/logo.png'
              )}
              width="20"
              height="12"
              alt="로고"
            />
          </Link>

          <Flex display={{ base: 'none', md: 'flex' }} ml={12}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify="flex-end"
          direction="row"
          spacing={6}
        >
          <ThemeToggle />
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
};

export default Header;
