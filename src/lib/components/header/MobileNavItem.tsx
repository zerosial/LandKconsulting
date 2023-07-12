import { Stack, Flex, useColorModeValue, Text } from '@chakra-ui/react';
import NextLink from 'next/link';

import type { HeaderNavItem } from './types';

export const MobileNavItem = ({ label, href }: HeaderNavItem) => {
  return (
    <Stack spacing={4}>
      <Flex
        py={2}
        as={NextLink}
        href={href ?? ''}
        justify="space-between"
        align="center"
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}
        >
          {label}
        </Text>
      </Flex>
    </Stack>
  );
};
