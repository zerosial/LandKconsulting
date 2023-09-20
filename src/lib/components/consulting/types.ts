import type { ReactNode } from 'react';

export interface StatsCardProps {
  title: string;
  stat: string;
  icon: ReactNode;
}

export interface ConsultingTextProps {
  title?: string;
  heading?: string;
  firstBold: string;
  firstBody: string;
  secondBody: string;
  thirdBody: string;
}
