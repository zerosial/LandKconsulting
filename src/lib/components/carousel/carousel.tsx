/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-shadow */
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Container,
} from '@chakra-ui/react';
import React from 'react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import Slider from 'react-slick';

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};
interface ImagesProps {
  images: Image[];
  height: string;
}
interface Image {
  title: string;
  image: string;
}

export default function CaptionCarousel({ images, height }: ImagesProps) {
  const [slider, setSlider] = React.useState<Slider | null>(null);
  const top = useBreakpointValue({ base: '50%', md: '50%' });
  const side = useBreakpointValue({ base: '5%', md: '40px' });

  return (
    <>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform="translate(0%, -50%)"
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt size="40px" color="white" />
      </IconButton>
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform="translate(0%, -50%)"
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt size="40px" color="white" />
      </IconButton>
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {images.map((card, index) => (
          <Box
            key={index}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}
          >
            <Container pl={1} size="container.lg" height={height}>
              <Stack
                spacing={6}
                w="100vw"
                maxW="xl"
                position="absolute"
                top="50%"
                transform="translate(0, -50%)"
              >
                <Box
                  backdropFilter="auto"
                  backdropBrightness="50%"
                  mt="30vh"
                  maxW="98vw"
                >
                  <Heading
                    fontFamily="body"
                    textAlign="center"
                    fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
                    color="white"
                  >
                    {card.title}
                  </Heading>
                </Box>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </>
  );
}
