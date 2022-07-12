import React, {useState} from 'react';
import Dialog, {alert, confirm, modal} from './dialog';
import Button from '../button/button';

export default function () {
  const [y, setY] = useState(false);
  const openModal = () => {
    const close = modal(<h1>hi
      <Button onClick={() => close()}>close</Button>
    </h1>);
  };
  return (
    <div className={'dialog'}>
      <div style={{position: 'relative', zIndex: 9}}>
        <h1>普通对话框</h1>
        <Button onClick={() => setY(!y)}>Click</Button>
        <Dialog visible={y} closeOnClickMask={true} buttons={
          [
            <Button onClick={() => {setY(false);}}>确认</Button>,
            <Button onClick={() => {setY(false);}}>取消</Button>
          ]
        } onClose={() => {setY(false);}}>
          <strong>hi</strong>
        </Dialog>
      </div>

      <div>
        <h1>消息对话框</h1>
        <Button onClick={() => alert('hi')}>alert</Button>
      </div>

      <div>
        <h1>确认对话框</h1>
        <Button onClick={() => confirm('hi', () => {
          console.log('你点击了yes');
        }, () => {
          console.log('你点击了no');
        })}>confirm
        </Button>
      </div>

      <div>
        <h1>模态对话框</h1>
        <Button onClick={openModal}>modal</Button>
      </div>
    </div>
  );
}