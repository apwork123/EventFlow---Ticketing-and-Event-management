import React from 'react';
import Info_Card from './Info_Card';
import Event_Info from './Event_Info';
import EventTicketsList from './EventTicketsList/EventTicketsList';

export default function Event_Page(props) {
  return (
    <>
      <div>
        <Event_Info imageUrl={props.imageUrl} />
      </div>
      <div style={{maxWidth: 'fit-content',
        float: 'right'
        
      }}>
        <Info_Card imageUrl={props.imageUrl} />
      </div>
      <div>
        <EventTicketsList  />

      </div>
    </>
  );
}