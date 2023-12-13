![sample](https://github.com/zerosial/James_Portfolio/assets/97251710/95c3f83c-06b2-4d48-9db8-056212b28cd5)

<div align="center">
  <p>이 프로젝트는 <a href="https://nextjs.org/" target="_blank">Next.js</a> 프로젝트 기반 <code>create-next-app</code>, 과 <a href="https://chakra-ui.com" target="_blank"><b>Chakra UI</b></a> 그리고 <a href="https://www.typescriptlang.org" target="_blank"><b>TypeScript</b></a> 셋팅입니다.</p>

</div>

## 도메인

https://landk.vercel.app/

## 🎨 프로젝트 요약

- 1. 중소 호텔 컨설팅 사이트 (L&K)의 컨설팅 안내 페이지를 만들기 위해 제작되었습니다.

  메인페이지, About, Consulting, Portfolio, Partners, Contact US 및 헤더와 푸터를 포함한 컴포넌트

- 2. 어느 환경에서던 같은 경험을 위한 반응형 웹으로 제작되었습니다.

  테스트 환경 : S8, S20+, 아이폰 SE , 9 , 10 , 테블릿 (노트 7, 8), PC 및 소형노트북 (13인치)

- 3. 다크/라이트 모드 및 유저 친화성을 위한 작업

- 4. 재사용성 증가를 위한 리팩토링 진행중입니다

## 🔋 ⚡ 기본 셋팅된 템플릿

- ✔️ linting과 formatting 도구 및 자동화 기능이 들어가 있습니다.

  `eslint`, `prettier`, `husky`, `lint-staged`, `commitlint`, `commitizen`, `standard-version`

- 📱 PWA 옵션 분리

  `next-pwa` 기본 비활성화 되어있지만 `next.config.js` 에서 PWA 활성화 및 최적화가 가능합니다

- 🔎 SEO optimization configured

  `next-seo` 와 `next-sitemap`. 을 통하여 기본적으로 셋팅값이 분리되어 있어 Seo 최적화 및 통일이 편리합니다.

- 🎨 기본 산입된 디자인은 변경되었습니다.

## 사전 요구 사항

1. [Node.js](https://nodejs.org/en/) 이나 nvm 의 설치가 필요합니다.
2. `pnpm` 의 설치가 필요합니다.

## Getting Started

1.  `pnpm` or `pnpm install` 을 통하여 사전 패키지를 설치해 주세요

2.  하단의 명령어를 실행한다면 개발자 서버에서 작동합니다.

```bash
pnpm dev
```

## E2E 테스트 (로컬 환경)

1.  `pnpm build`명령어를 통해 빌드하고 `pnpm start` 명령어를 통해 시작합니다.
