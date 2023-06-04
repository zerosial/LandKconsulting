import { Container, Flex } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';

import ContactBox from '~/lib/components/contact/ContactBox';

const Contact = () => {
  return (
    <Container maxW="full" mt={0} centerContent>
      <NextSeo title="Contact" />
      <Flex direction={{ base: 'column', md: 'row' }}>
        <ContactBox
          name="Jason Lee (이효준 이사)"
          phone="010-9336-9219"
          email="Jason@orchidhotel.co.kr"
          location="인천광역시 , 시엘로"
        />
        <ContactBox
          name="James Baek (백도현 이사)"
          phone="010-6635-6423"
          email="James@orchidhotel.co.kr"
          location="원주시 , 오키드호텔"
        />
      </Flex>
    </Container>
  );
};

export default Contact;
