import Info_Card from './Info_Card';
import Event_Info from './Event_Info';
import EventTicketsList from './EventTicketsList/EventTicketsList';

interface EventInfoProps {
  imageUrl: string;
  eventName: string;
}

export default function Event_Page(props: EventInfoProps) {
  return (
    <>
      <div>
        <Event_Info imageUrl={props.imageUrl} eventName={props.eventName} />
      </div>
      <div style={{maxWidth: 'fit-content',
        float: 'right',
        marginRight: '2rem'
        }}>
        <Info_Card imageUrl={props.imageUrl} />
      </div>
      <div>
        <EventTicketsList  />

      </div>
    </>
  );
}