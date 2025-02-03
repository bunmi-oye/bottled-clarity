import React from 'react';
import { WrapperType } from './Wrapper.type';

const Wrapper = ({ className = '', children }: WrapperType) => {
  return <section className={`w-full ${className}`}>{children}</section>;
};

export default Wrapper;
