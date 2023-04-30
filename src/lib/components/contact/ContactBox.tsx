/* eslint-disable sonarjs/no-duplicate-string */
import {
  Wrap,
  WrapItem,
  Heading,
  VStack,
  Button,
  HStack,
  IconButton,
  Box,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import { BsBuildingsFill } from 'react-icons/bs';
import { MdPhone, MdEmail, MdLocationOn } from 'react-icons/md';
import { RiKakaoTalkFill, RiMailFill } from 'react-icons/ri';

interface ContactProps {
  name: string;
  phone: string;
  email: string;
  location: string;
}

interface ClickButtonProps {
  text: string;
}

const ContactBox = ({ name, phone, email, location }: ContactProps) => {
  const onClickButtonHandler = ({ text }: ClickButtonProps) => {
    navigator.clipboard.writeText(text);
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
              <Text mt={{ base: 3, sm: 3, md: 3, lg: 5 }} color="gray.400">
                {name}
              </Text>
              <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                <VStack pl={0} spacing={3} alignItems="flex-start">
                  <Button
                    size="md"
                    height="48px"
                    width="240px"
                    variant="ghost"
                    color="#DCE2FF"
                    _hover={{ border: '2px solid #1C6FEB' }}
                    leftIcon={<MdPhone color="#1970F1" size="20px" />}
                    onClick={() => onClickButtonHandler({ text: phone })}
                  >
                    {phone}
                  </Button>
                  <Button
                    size="md"
                    height="48px"
                    width="240px"
                    variant="ghost"
                    color="#DCE2FF"
                    _hover={{ border: '2px solid #1C6FEB' }}
                    leftIcon={<MdEmail color="#1970F1" size="20px" />}
                    onClick={() => onClickButtonHandler({ text: email })}
                  >
                    {email}
                  </Button>
                  <Button
                    size="md"
                    height="48px"
                    width="240px"
                    variant="ghost"
                    color="#DCE2FF"
                    _hover={{ border: '2px solid #1C6FEB' }}
                    leftIcon={<MdLocationOn color="#1970F1" size="20px" />}
                  >
                    {location}
                  </Button>
                </VStack>
              </Box>
              <HStack
                mt={{ lg: 10, md: 10 }}
                spacing={5}
                px={5}
                alignItems="flex-start"
              >
                <Link href="http://naver.com">
                  <IconButton
                    aria-label="github"
                    variant="ghost"
                    size="lg"
                    isRound
                    _hover={{ bg: '#0D74FF' }}
                    icon={<BsBuildingsFill size="28px" />}
                  />
                </Link>
                <Link href="http://naver.com">
                  <IconButton
                    aria-label="github"
                    variant="ghost"
                    size="lg"
                    isRound
                    _hover={{ bg: '#0D74FF' }}
                    icon={<RiKakaoTalkFill size="28px" />}
                  />
                </Link>
                <Link href={`mailto:${email}`}>
                  <IconButton
                    aria-label="email"
                    variant="ghost"
                    size="lg"
                    isRound
                    _hover={{ bg: '#0D74FF' }}
                    icon={<RiMailFill size="28px" />}
                  />
                </Link>
              </HStack>
            </Box>
          </WrapItem>
        </Wrap>
      </Box>
    </Box>
  );
};

export default ContactBox;
