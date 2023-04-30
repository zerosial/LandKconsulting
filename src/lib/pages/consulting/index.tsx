import {
  Box,
  chakra,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from '@chakra-ui/react';
import type { ReactNode } from 'react';
import { GiReceiveMoney } from 'react-icons/gi';
import { GrVolumeControl } from 'react-icons/gr';
import { VscSymbolNamespace } from 'react-icons/vsc';

import ConsultingText from '~/lib/components/consulting/ConsultingText';

interface StatsCardProps {
  title: string;
  stat: string;
  icon: ReactNode;
}
function StatsCard(props: StatsCardProps) {
  const { title, stat, icon } = props;
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py="5"
      shadow="xl"
      border="1px solid"
      borderColor={useColorModeValue('gray.800', 'gray.500')}
      rounded="lg"
    >
      <Flex justifyContent="space-between">
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight="medium" color="purple.400" isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize="2xl" fontWeight="medium">
            {stat}
          </StatNumber>
        </Box>
        <Box
          my="auto"
          color={useColorModeValue('gray.800', 'gray.200')}
          alignContent="center"
        >
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}

const Consulting = () => {
  return (
    <Box maxW="7xl" mx="auto" pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1 textAlign="center" fontSize="4xl" py={10} fontWeight="bold">
        핵심가치
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard
          title="Space Value Maximization"
          stat="공간 가치 극대화"
          icon={<VscSymbolNamespace size="3em" />}
        />
        <StatsCard
          title="Cost Reduction"
          stat="원가 절감 극대화"
          icon={<GiReceiveMoney size="3em" />}
        />
        <StatsCard
          title="Operation Maxi migration"
          stat="운영 효율 극대화"
          icon={<GrVolumeControl size="3em" />}
        />
      </SimpleGrid>
      <ConsultingText />
    </Box>
  );
};

export default Consulting;
