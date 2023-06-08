import { Container, Flex, SlideFade } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';

import ContactBox from '~/lib/components/contact/ContactBox';

const Contact = () => {
  return (
    <Container maxW="full" mt={0} centerContent>
      <NextSeo title="Contact" />
      <Flex direction={{ base: 'column', md: 'row' }}>
        <SlideFade in delay={0.5}>
          <ContactBox
            name="Jason Lee (이효준 이사)"
            phone="010-9336-9219"
            email="Jason@orchidhotel.co.kr"
            location="L&K 컨설팅 (원주)"
            kakaolink="http://www.orchidhotel.co.kr/"
          />
        </SlideFade>
        <SlideFade in delay={1}>
          <ContactBox
            name="James Baek (백도현 이사)"
            phone="010-6635-6423"
            email="James@orchidhotel.co.kr"
            location="L&K 컨설팅 (판교)"
            kakaolink="http://www.hotelcielo.co.kr/"
          />
        </SlideFade>
      </Flex>
    </Container>
  );
};

export default Contact;
