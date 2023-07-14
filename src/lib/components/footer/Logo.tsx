import { useColorModeValue, Image } from '@chakra-ui/react';

export const Logo = () => {
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
