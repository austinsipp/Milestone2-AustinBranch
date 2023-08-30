import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function About() {
  return (
    <div className="about-container">
        <h2>Our Development Team</h2>
    <div className="CardContainer">
        
      <div className="Card-About">
        <Card >
          <Card.Img
            variant="top"
            src="https://avatars.githubusercontent.com/u/98053237?s=400&u=8b758f2ed60b6a4b4bfa2298c6e47807b98f6c66&v=4"
          />
          <Card.Body>
            <Card.Title>Carlo Quesada</Card.Title>
            <Card.Text>
              Carlo bio
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Front-end Developer</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">GitHub </Card.Link>
            <Card.Link href="#">Linkedin </Card.Link>
          </Card.Body>
        </Card>
      </div>

      <div className="Card-About">
        <Card >
          <Card.Img
            variant="top"
            src="https://avatars.githubusercontent.com/u/52388985?v=4"
          />
          <Card.Body>
            <Card.Title>Aaron Canales</Card.Title>
            <Card.Text>Aaron bio</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Back-end Developer</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">GitHub </Card.Link>
            <Card.Link href="#">Linkedin </Card.Link>
          </Card.Body>
        </Card>
      </div>
      <div className="Card-About">
        <Card >
          <Card.Img
            variant="top"
            src="https://avatars.githubusercontent.com/u/114309924?v=4"
          />
          <Card.Body>
            <Card.Title>Alicia Gutierrez</Card.Title>
            <Card.Text>Alicia Bio</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Front-end Developer</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">GitHub </Card.Link>
            <Card.Link href="#">Linkedin </Card.Link>
          </Card.Body>
        </Card>
      </div>
      <div className="Card-About">
        <Card >
          <Card.Img
            variant="top"
            src="https://avatars.githubusercontent.com/u/118779304?v=4"
          />
          <Card.Body>
            <Card.Title>Austin Sipp</Card.Title>
            <Card.Text>Austin Bio</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Back-end Developer</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">GitHub </Card.Link>
            <Card.Link href="#">Linkedin </Card.Link>
          </Card.Body>
        </Card>
      </div>
      <div className="Card-About">
        <Card >
          <Card.Img
            variant="top"
            src="https://avatars.githubusercontent.com/u/120067975?v=4"
          />
          <Card.Body>
            <Card.Title>Edwin Tolentino</Card.Title>
            <Card.Text>Edwin Bio</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Graphic Designer</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">GitHub </Card.Link>
            <Card.Link href="#">Linkedin </Card.Link>
          </Card.Body>
        </Card>
      </div>
    </div>
    </div>
  );
}

export default About