import React, { memo } from 'react';
import { numberFormat } from '@/utils';
import { ShowCoin } from '@/components/molecules';
import { AiOutlineMenu } from 'react-icons/ai';
import classNames from 'classnames';

function Header() {
  return (
    <div className={classNames('grid', 'grid-cols-2', 'justify-between', 'items-center', 'px-4', 'py-1')}>
      <AiOutlineMenu className={classNames('text-3xl')}/>

      <div className={classNames('w-36')}>
        <ShowCoin point={numberFormat(30000)}/>
      </div>
    </div>
  );
}

export default memo(Header);
