import { Flex, Link, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Flex as="footer" width="full" justifyContent="center">
      <Text fontSize="sm">
        {new Date().getFullYear()} -{' '}
        <Link
          href="https://github.com/zerosial"
          isExternal
          rel="noopener noreferrer"
        >
          Brian (승훈 백)
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;
