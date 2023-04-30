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
import { BsGithub, BsDiscord } from 'react-icons/bs';
import { MdPhone, MdEmail, MdLocationOn, MdFacebook } from 'react-icons/md';

interface ContactProps {
  name: string;
  phone: string;
  email: string;
  location: string;
}

const ContactBox = ({ name, phone, email, location }: ContactProps) => {
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
                <IconButton
                  aria-label="facebook"
                  variant="ghost"
                  size="lg"
                  isRound
                  _hover={{ bg: '#0D74FF' }}
                  icon={<MdFacebook size="28px" />}
                />
                <IconButton
                  aria-label="github"
                  variant="ghost"
                  size="lg"
                  isRound
                  _hover={{ bg: '#0D74FF' }}
                  icon={<BsGithub size="28px" />}
                />
                <IconButton
                  aria-label="discord"
                  variant="ghost"
                  size="lg"
                  isRound
                  _hover={{ bg: '#0D74FF' }}
                  icon={<BsDiscord size="28px" />}
                />
              </HStack>
            </Box>
          </WrapItem>
        </Wrap>
      </Box>
    </Box>
  );
};

export default ContactBox;
