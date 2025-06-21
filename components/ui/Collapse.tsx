'use client';

import { ChevronDown } from 'lucide-react';
import React, { ReactNode, useState } from 'react';

import COLORS from './Colors';

interface ICollapse {
  header: ReactNode;
  content: ReactNode;
}

const Collapse = ({ content, header }: ICollapse) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <div className="bg-background px-[16px] py-[12px]">
      <div className="flex cursor-pointer items-center justify-between" onClick={toggle}>
        <div>{header}</div>

        <ChevronDown
          size={24}
          color={COLORS['text-dark-secondary']}
          className={`transition-transform duration-250 ${isOpen ? 'rotate-180' : ''}`}
        />
      </div>

      {isOpen && <div className="pt-[20px] text-sm">{content}</div>}
    </div>
  );
};

export default Collapse;
