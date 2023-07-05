import { ShowCoin } from '@/components/molecules';
import classNames from 'classnames';
import { numberFormat } from '@/utils';

export default function ComponentTest() {
  return (
    <div>
      <h1>이 곳은 컴포넌트 테스트 하는 곳이다</h1>
      ㅡㅡㅡㅡㅡㅡㅡ
      <div className={classNames('w-40')}>
        <p>포인트</p>
        <ShowCoin point={numberFormat(30000)}/>
      </div>
    </div>
  );
}
