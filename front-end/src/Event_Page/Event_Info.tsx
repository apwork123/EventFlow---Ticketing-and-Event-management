interface EventInfoProps {
  imageUrl: string;
  eventName: string;
}

export default function Event_Info(props: EventInfoProps) {
  return (
    <div style={{
      position: 'relative', // Add relative positioning to the parent container
    }}>
      <img src={props.imageUrl} alt='Event Image' style={{
        width: '100%',
        height: 350,
        filter: 'blur(5px)', // Add a blur effect to the image
      }} />
      <h1 style={{
        position: 'absolute',
        top: 0,
        left: '3rem',
        width: `calc(100% - 3rem)`, // Subtract 3rem from the width
        textAlign: 'start',
        color: 'white',
        fontSize: '2rem'
      }}>
        Event Name
      </h1>
    </div>
  )
}