import {
  useColorModeValue,
  Stack,
  Popover,
  PopoverTrigger,
  Box,
  Link,
} from '@chakra-ui/react';
import NextLink from 'next/link';

import { HEADER_NAV_ITEMS } from '../Constants';

export const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');

  return (
    <Stack direction="row" spacing={4}>
      {HEADER_NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger="hover" placement="bottom-start">
            <PopoverTrigger>
              <Link
                as={NextLink}
                p={2}
                href={navItem.href ?? ''}
                fontSize="md"
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};
