/* eslint-disable sonarjs/no-duplicate-string */
import { BsFillBuildingFill } from 'react-icons/bs';
import { GiReceiveMoney, GiAbstract118 } from 'react-icons/gi';

import type { HeaderNavItem } from './header/types';

export const HOME_CAROUSEL_IMAGES = [
  {
    title: '호텔 및 숙박시설 컨설팅 및 위탁 운영사',
    image: 'picture/orchid_lobie.jpg',
  },
  {
    title: '호텔 및 숙박시설 컨설팅 및 위탁 운영사',
    image: 'picture/cielo2.jpg',
  },
  {
    title: '호텔 및 숙박시설 컨설팅 및 위탁 운영사',
    image: 'picture/cielo_lobie.jpg',
  },
];

export const ABOUT_KOREAN_TEXT = {
  title:
    'L&K는 OS 컨설팅을 주력사업으로 하는 컨설팅 회사이며 모 회사는 관광호텔을 운영하는 법인입니다',
  heading: 'L&K에 대하여',
  firstHotel: '오키드호텔 원주 - 운영 및 소유',
  secondHotel: '시엘로호텔 시흥 - 운영 컨설팅',
  firstBody:
    '를 현재 진행하고 있습니다. L&K는 1st 프로젝트인 오키드호텔을 설계, 건축, 준공하는 과정에서 수 많은 컨설팅 업체들을 접하였으며, 이 과정에서 많은 불 필요한 시간과 지출을 경험 하였습니다. 이를 탈피하고자 많은 고심 끝에 새로운 컨설팅 컨셉으로 클라이언트에게 최적화된 컨설팅을 지원하고자 본 사업체를 설립하게 되었습니다.',
  secondBody:
    'L&K의 임직원은 2017년 호텔 설계를 시작으로 관광호텔 인허가, 호텔 건축 설계, 인테리어 설계, 브랜딩, 호텔 내 F F&E 선정 및 중국 소싱, 호텔 운영시스템 설계까지 모든 과정을 직접 진행하였으며, 이후 2021년 “시엘로호텔시흥”을 컨설팅 및 총괄 관리 하였습니다. 이 과정에서의 얻은 경험치를 바탕으로 최적화된 컨설팅을 지원하겠습니다.',
};

export const CONSULTING_KOREAN_TEXT = {
  title: '핵심가치',
  heading: 'L&K의 OS Consulting',
  firstBold: 'PM(프로젝트 매니징)',
  firstBody:
    'L&K는 호텔/숙박시설 설계, 건축을 진행하는 과정에서 클라이언트를 대리하여',
  secondBody:
    '역할을 총괄합니다. 이에 동일 기간 내 동시다발적 프로젝트를 진행하지 않으며, 한 가지 프로젝트만 맡아서 진행합니다. 컨설팅을 진행함에 있어 클라이언트와의 지속적인 소통을 통해 클라이언트가 추구하는 호텔/숙박시설을 만들어 낼 수 있도록 합니다.',
  thirdBody:
    '호텔은 단순 숙박시설이 아닌 문화공간입니다. 방문하는 고객들은 24시간 이상 체류하며 공간을 경험하게 됩니다. 이에 L&K는 공간에 대한 가치, 원가 절감, 운영 효율 극대화를 3가지 핵심 가치로 여기고 있습니다.',
};

export const CONSULTING_KOREAN_TABLE = [
  {
    id: 1,
    title: '시장조사를 통한 타겟 수립',
  },
  {
    id: 2,
    title: '운영 컨셉 확정',
  },
  {
    id: 3,
    title: '건축 / 인테리어 / 브랜딩 설계 지원',
  },
  {
    id: 4,
    title: '공간 내 모든 소모품 및 자산 소싱 지원',
  },
  {
    id: 5,
    title: '인허가 및 운영시스템 구축 지원',
  },
];

export const CONSULTING_KOREAN_TABS = [
  {
    title: 'Space Value Maximization',
    stat: '공간 가치 극대화',
    icon: <BsFillBuildingFill size="3em" />,
  },
  {
    title: 'Cost Reduction',
    stat: '원가 절감 극대화',
    icon: <GiReceiveMoney size="3em" />,
  },
  {
    title: 'Operation Maximization',
    stat: '운영 효율 극대화',
    icon: <GiAbstract118 size="3em" />,
  },
];

export const PARTNERS_KOREAN_TEXTS = {
  DESCRIPTION:
    'L&K는 자사 호텔 건축/설계/운영까지 준비과정에서 많은 파트너사와 협업을 하였습니다. 이 과정에서 선별된 된 파트너사와는 현재까지도 업무를 교류하며 함께 파트너 관계를 유지하고 있습니다.',
  OPTION_DESCRIPTION:
    '저희의 파트너는 클라이언트에게 드리는 한가지 옵션입니다. 충분히 검토를 하시고 함께 소통하여 최적화된 파트너를 찾는 것이 핵심입니다.',
  CARDS: [
    {
      heading: 'Lecor',
      description: '브랜드 비지니스 전개의 최첨단',
      subDescription: 'Branding Company',
      imageBlack: '/picture/Lecor_black.png',
      image: '/picture/Lecor.png',
    },
    {
      heading: 'Flot',
      description: '호텔에 최적화된 디자인',
      subDescription: 'Design Company',
      imageBlack: '/picture/Flot_black.png',
      image: '/picture/Flot.png',
    },
  ],
};

export const HEADER_NAV_ITEMS: Array<HeaderNavItem> = [
  {
    label: 'About L&K',
    href: '/about',
  },
  {
    label: 'OS Consulting',
    href: '/consulting',
  },
  {
    label: 'Portfolio',
    href: '/portfolio',
  },
  {
    label: 'Partners',
    href: '/partners',
  },
  {
    label: 'Contact Us',
    href: '/contact',
  },
];
