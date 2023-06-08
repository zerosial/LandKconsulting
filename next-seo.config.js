/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: 'L&K',
  titleTemplate: '%s | L&K',
  defaultTitle: 'L&K',
  description:
    'L&K는 호텔/숙박시설 건립을 하는 과정에서 클라이언트를 대리하여 전반적 프로젝트를 총괄함에 따라 동일 기간 내 동시다발적 프로젝트를 진행하지 않으며, 한 가지 프로젝트만 맡아서 진행합니다. 컨설팅을 진행함에 있어 클라이언트와의 지속적인 소통을 통해 클라이언트가 추구하는 호텔/숙박시설을 만들어 낼 수 있도록 합니다.',
  canonical: 'https://landk.vercel.app/',
  openGraph: {
    url: 'https://landk.vercel.app/',
    title: 'L&K Consulting',
    description:
      'L&K는 호텔/숙박시설 건립을 하는 과정에서 클라이언트를 대리하여 전반적 프로젝트를 총괄함에 따라 동일 기간 내 동시다발적 프로젝트를 진행하지 않으며, 한 가지 프로젝트만 맡아서 진행합니다. 컨설팅을 진행함에 있어 클라이언트와의 지속적인 소통을 통해 클라이언트가 추구하는 호텔/숙박시설을 만들어 낼 수 있도록 합니다.',
    images: [
      {
        url: 'https://landk.vercel.app/picture/orchid_lobie.jpg',
        alt: 'L&K image',
      },
    ],
    site_name: 'L&K',
  },
  twitter: {
    handle: '@landk',
    cardType: 'summary_large_image',
  },
};

export default defaultSEOConfig;
