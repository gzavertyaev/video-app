import { ReactNode } from 'react';

export interface SimpleControlButtonProps {
  onClick: () => void;
  img?: ReactNode;
  title?: string;
}
