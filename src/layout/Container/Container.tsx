import React from 'react';
import { ContainerType } from './Container.type';

const Container = ({ className = '', children }: ContainerType) => {
  return (
    <div
      className={`w-full max-w-[1200px] mx-auto px-4 py-8 md:px-10 md:py-16 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
