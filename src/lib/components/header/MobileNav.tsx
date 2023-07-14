import { Stack, useColorModeValue } from '@chakra-ui/react';

import { HEADER_NAV_ITEMS } from '../Constants';

import { MobileNavItem } from './MobileNavItem';

export const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}
    >
      {HEADER_NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};
