import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import FollowButton from './FollowButton/FollowButton';

interface Props {
  imageUrl: string;
}


function Info_Card(props: Props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleReadMoreClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
  <>
    <Card style={{ width: '18rem', backgroundColor: '#1f2937', color: 'black', padding: '10px',border: '2px solid black', borderRadius: '7px' }}>
      <Card.Body>
        <img src={props.imageUrl} />
        <div style={{marginBottom: '10px'}}>
          <Card.Title style={{fontSize: '30px', color: 'white'}}>Event/Artist  Name</Card.Title>
        </div>
        <div style={{display: 'flex',
          justifyContent: 'center'
        }}>
          <FollowButton />
        </div>
        <div style={{marginTop: '10px'}}>
          <Card.Subtitle style={{ color: 'gray', fontSize: '14px' }}>Genre/Category..etc.</Card.Subtitle>
        </div>
        <Card.Text style={{ color: 'white' }}>
          This contains general information about the artist or the event.
        </Card.Text>
        {!isExpanded && (
          <Card.Text style={{ color: 'grey', cursor: 'pointer' }} onClick={handleReadMoreClick}>
            Read more
          </Card.Text>
        )}
        {isExpanded && (
          <div>
            <Card.Text style={{ color: 'white' }}>
              This is the additional content that will be shown when the card is expanded.
            </Card.Text>
            <Card.Text style={{ color: 'grey', cursor: 'pointer' }} onClick={handleReadMoreClick}>
              Read less
            </Card.Text>
          </div>
        )}
      </Card.Body>
    </Card>
    
  </>
  );
}

export default Info_Card;