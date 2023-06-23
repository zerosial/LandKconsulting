/* eslint-disable sonarjs/no-duplicate-string */
import {
  Wrap,
  WrapItem,
  Heading,
  VStack,
  Button,
  IconButton,
  Box,
  Text,
  Flex,
  useToast,
} from '@chakra-ui/react';
import Link from 'next/link';
import { MdPhone, MdEmail, MdLocationOn } from 'react-icons/md';
import { RiKakaoTalkFill, RiMailFill } from 'react-icons/ri';

interface ContactProps {
  name: string;
  title: string;
  phone: string;
  email: string;
  location: string;
  kakaolink: string;
}

interface ClickButtonProps {
  text: string;
}

const ContactBox = ({
  name,
  title,
  phone,
  email,
  location,
  kakaolink,
}: ContactProps) => {
  const toast = useToast();
  const onClickButtonHandler = ({ text }: ClickButtonProps) => {
    navigator.clipboard.writeText(text);
    if (!toast.isActive(text)) {
      toast({
        id: text,
        title: `${text}`,
        description: '가 클립보드에 복사되었습니다',
        duration: 2000,
        isClosable: true,
      });
    }
  };

  return (
    <Box
      bg="purple.700"
      color="white"
      borderRadius="lg"
      m={{ base: 4, sm: 4, md: 4, lg: 10 }}
      p={{ base: 5, sm: 5, md: 5, lg: 16 }}
    >
      <Box p={4}>
        <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
          <WrapItem>
            <Box>
              <Heading>Contact</Heading>
              <Text mt={{ base: 3, sm: 3, md: 3, lg: 5 }} color="gray.300">
                {name}
              </Text>
              <Text color="gray.300">{title}</Text>
              <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                <VStack pl={0} spacing={3} alignItems="flex-start">
                  <Button
                    size="md"
                    height="48px"
                    width="240px"
                    variant="ghost"
                    color="white"
                    _hover={{ border: '2px solid white' }}
                    leftIcon={<MdPhone color="#9e30c0ef" size="20px" />}
                    onClick={() => onClickButtonHandler({ text: phone })}
                  >
                    {phone}
                  </Button>
                  <Button
                    size="md"
                    height="48px"
                    width="240px"
                    variant="ghost"
                    color="white"
                    _hover={{ border: '2px solid white' }}
                    leftIcon={<MdEmail color="#9e30c0ef" size="20px" />}
                    onClick={() => onClickButtonHandler({ text: email })}
                  >
                    {email}
                  </Button>
                  <Button
                    size="md"
                    height="48px"
                    width="240px"
                    variant="ghost"
                    color="white"
                    _hover={{ border: '2px solid white' }}
                    leftIcon={<MdLocationOn color="#9e30c0ef" size="20px" />}
                  >
                    {location}
                  </Button>
                </VStack>
              </Box>
              <Flex
                mt={{ lg: 10, md: 10 }}
                gap={5}
                px={5}
                justifyContent="center"
                align="center"
              >
                <Link href={kakaolink}>
                  <IconButton
                    aria-label="github"
                    variant="ghost"
                    size="lg"
                    isRound
                    _hover={{ bg: '#9e30c0ef' }}
                    icon={<RiKakaoTalkFill size="28px" />}
                  />
                </Link>
                <Link href={`mailto:${email}`}>
                  <IconButton
                    aria-label="email"
                    variant="ghost"
                    size="lg"
                    isRound
                    _hover={{ bg: '#9e30c0ef' }}
                    icon={<RiMailFill size="28px" />}
                  />
                </Link>
              </Flex>
            </Box>
          </WrapItem>
        </Wrap>
      </Box>
    </Box>
  );
};

export default ContactBox;
