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
            kakaolink="https://www.linkedin.com/in/%ED%9A%A8%EC%A4%80-%EC%9D%B4-a2127020a/"
          />
        </SlideFade>
        <SlideFade in delay={1}>
          <ContactBox
            name="James Baek (백도현 이사)"
            phone="010-6635-6423"
            email="James@orchidhotel.co.kr"
            location="L&K 컨설팅 (판교)"
            kakaolink="https://www.linkedin.com/in/james-dohyun-baek-44002734/"
          />
        </SlideFade>
      </Flex>
    </Container>
  );
};

export default Contact;
