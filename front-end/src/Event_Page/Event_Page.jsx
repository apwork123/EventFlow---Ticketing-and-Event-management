import React from 'react';
import Info_Card from './Info_Card';
import Event_Info from './Event_Info';

export default function Event_Page(props) {
  return (
    <>
      <div>
        <Event_Info imageUrl={props.imageUrl} />
      </div>
      <div style={{display: 'flex',
        justifyContent: 'flex-end',
        marginRight: '6rem'
      }}>
        <Info_Card imageUrl={props.imageUrl} />
      </div>
    </>
  );
}