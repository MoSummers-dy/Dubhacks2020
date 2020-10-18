import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab'
import CardColumns from 'react-bootstrap/CardColumns'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'
import img1 from './pics/11.jpg'
import img2 from './pics/2122.png'
import img3 from './pics/enjoyable-relationships.jpg'
import img4 from './pics/art.png'
import img5 from './pics/ss.jpg'
import img6 from './pics/sss.jpg'
import img7 from './pics/1.jpg'
import img8 from './pics/2.jpg'
import img9 from './pics/3.png'
import img10 from './pics/4.jpeg'
import img11 from './pics/5.jpg'
import img12 from './pics/6.png'
import g4 from './pics/g4.jpg'
import g5 from './pics/g5.jpg'
import g6 from './pics/g6.jpg'
import g7 from './pics/g7.jpg'

const Resources = (props) => {

    const [effect, setEffect] = useState({
        expanded: false,
        hover: false
    });

    const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

    const longTextList = () => {
        return (
            <ul>
                <li>Hellow</li>
                <li>Hellow</li>
                <li>Hellow</li>
                <li>Hellow</li>

            </ul>
        )
    }

    const give = () => {
                return (
                    <ul>
                        <li>Gentle--Be courteous and temperate in your approach; no attacks, threats or judging.</li>
                        <li>Interested--Listen; be interested in the other person.</li>
                        <li>Validate--Validate the other person’s feelings, wants, difficulties, and opinions about the situation.</li>
                        <li>Easy manner--Use a little humor; smile; be diplomatic; soft sell over hard sell.</li>
                    </ul>
                )
            }

    const fast = () => {
                return (
                    <ul>
                        <li>(Be) Fair--Be fair to YOURSELF and to the OTHER person.  Remember to VALIDATE YOUR OWN feelings and wishes, as well as the other person’s.</li>
                        <li>(No over) Apologies--Don’t over-apologize.  No apologizing for being alive or for making a request at all.  No apologies for having an opinion, for disagreeing.  No LOOKING ASHAMED, with eyes and head down or body slumped.  No invalidating the valid.</li>
                        <li>Stick to values--Stick to YOUR OWN values.  Don’t sell out your values or integrity for reasons that aren’t VERY important. Be clear on what you believe is the moral or valued way of thinking and acting, and “stick to your guns.”</li>
                        <li>(Be) Truthful--Don’t lie. Don’t act helpless when you are not.  Don’t exaggerate or make up excuses.</li>
                    </ul>
                )
            }

    const mythOne = () => {
                return (
                    <ol>
                        <li>I don’t deserve to get what I want or need.</li>
                        <li>If I make a request (or If I ask for help), this will show that I am a very weak person.</li>
                        <li>I have to know whether a person is going to say yes before I make a request.</li>
                        <li>If I ask for something or say no, I can’t stand it if someone gets upset with me.</li>
                        <li>If they say no, it will kill me.</li>
                        <li>Making requests is a really pushy (bad, self-centered, selfish, etc.) thing to do.</li>
                        <li>Saying no to a request is always a selfish thing to do</li>
                        <li>I should be willing to sacrifice my own needs for others.</li>
                        <li>I must be really inadequate if I can’t fix this myself.</li>
                        <li>Obviously, the problem is just in my head. If I would just think differently I wouldn’t have to bother everybody else.</li>
                        <li>If I don’t have what I want or need, it doesn’t make any difference; I don’t care really.</li>
                        <li>Skillfulness is a sign of weakness.</li>
                    </ol>
                )
            }

    const mythTwo = () => {
                return (
                    <ol>
                        <li>I shouldn’t have to ask (say no); they should know what I want (and do it).</li>
                        <li>They should have known that their behavior would hurt my feelings; I shouldn’t have to tell them.</li>
                        <li>I shouldn’t have to negotiate or work at getting what I want.</li>
                        <li>Other people should be willing to do more for my needs.</li>
                        <li>Other people should like, approve of, and support me.</li>
                        <li>They don’t deserve my being skillful or treating them well.</li>
                        <li>Getting what I want when I want it is most important.</li>
                        <li>I shouldn’t be fair, kind, courteous, or respectful if others are not so toward me.</li>
                        <li>Revenge will feel so good; it will be worth any negative consequences.</li>
                        <li>Only wimps have values.</li>
                    </ol>
                )
            }

    const quotes = () => {
        return (
        <div>
            <CardColumns>
            <Card bg="primary" text="white" className="text-center p-3">
                <blockquote className="blockquote mb-0 card-body">
                <p>
                “Sometimes the smallest step in the right direction ends up being the biggest step of your life. Tip toe if you must, but take the step.”
                </p>
                <Card.Img variant="top" src={img11} />
                </blockquote>
            </Card>
            <Card bg="primary" text="white" className="text-center p-3">
                <blockquote className="blockquote mb-0 card-body">
                <p>
                “One of the happiest moments in life is when you find the courage to let go of what you can’t change.”
                </p>
                <Card.Img variant="top" src={img7} />
                </blockquote>
            </Card>
            <Card bg="primary" text="white" className="text-center p-3">
                <blockquote className="blockquote mb-0 card-body">
                <p>
                “Starting today, I need to forget what’s gone. Appreciate what still remains and look forward to what’s coming next.”
                </p>
                <Card.Img variant="top" src={img4} />
                </blockquote>
            </Card>
            <Card bg="primary" text="white" className="text-center p-3">
                <blockquote className="blockquote mb-0 card-body">
                <p>
                “Sometimes you have to just pick yourself up and carry on.”
                </p>
                <Card.Img variant="top" src={img10} />
                </blockquote>
            </Card>
            <Card bg="primary" text="white" className="text-center p-3">
                <blockquote className="blockquote mb-0 card-body">
                <p>
                “The best way to cheer yourself up is to try to cheer somebody else up.” – Mark Twain
                </p>
                <Card.Img variant="top" src={img12} />
                </blockquote>
            </Card>
            <Card bg="primary" text="white" className="text-center p-3">
                <blockquote className="blockquote mb-0 card-body">
                <p>
                “Every day may not be good. But there is something good in every day.”
                </p>
                <Card.Img variant="top" src={img8} />
                </blockquote>
            </Card>
            <Card bg="primary" text="white" className="text-center p-3">
                <blockquote className="blockquote mb-0 card-body">
                <p>
                “It’s just a bad day not a bad life.”
                </p>
                <Card.Img variant="top" src={img9} />
                </blockquote>
            </Card>
            <Card bg="primary" text="white" className="text-center p-3">
                <blockquote className="blockquote mb-0 card-body">
                <p>
                “My entire life can be described in one sentence: It didn’t go as planned, and that’s okay.”
                </p>
                <Card.Img variant="top" src={img2} />
                </blockquote>
            </Card>
            <Card bg="primary" text="white" className="text-center p-3">
                <blockquote className="blockquote mb-0 card-body">
                <p>
                "Let us be of good cheer, however, remembering that the misfortunes hardest to bear are those which never come." – James Russell Lowell
                </p>
                <Card.Img variant="top" src={img1} />
                </blockquote>
            </Card>
            <Card bg="primary" text="white" className="text-center p-3">
                <blockquote className="blockquote mb-0 card-body">
                <p>
                “You don’t always need a plan. Sometimes you just need to breathe, trust, let go and see what happens.”
                </p>
                <Card.Img variant="top" src={img3} />
                </blockquote>
            </Card>

            </CardColumns>
        </div>
        );
    }

    const gallery = () => {
        return (
            <Carousel>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={g4}
                    alt="Third slide"
                    height="200px"
                    />
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={g5}
                    alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={g6}
                    alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={g7}
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
          );
    }

    return <>
        <h2 class="m-5" style={{
            textAlign: 'center'
        }}>Resources</h2>
        <div class="m-5">
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                        <Nav.Link eventKey="first">GIVE FAST</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="second">Relationship Myth</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="third">Quotes</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="forth">Fun Pics</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    </Col>
                    <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                        <Card>
                            <Card.Body>
                                <Card.Title>GIVE FAST</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">GIVE</Card.Subtitle>
                                <Card.Text>
                                    {give()}
                                </Card.Text>
                                <Card.Subtitle className="mb-2 text-muted">FAST</Card.Subtitle>
                                <Card.Text>
                                    {fast()}
                                </Card.Text>
                                <Card.Img variant="top" src={img5} />
                            </Card.Body>
                        </Card>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            <Card>
                                <Card.Body>
                                    <Card.Title>Relationship Myths</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Myths in the Way of Objectives Effectiveness</Card.Subtitle>
                                    <Card.Text>
                                        {mythOne()}
                                    </Card.Text>
                                    <Card.Subtitle className="mb-2 text-muted">Myths in the Way of Relationship and Self-Respect Effectiveness</Card.Subtitle>
                                    <Card.Text>
                                        {mythTwo()}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Img variant="top" src={img6} />
                            </Card>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                            {quotes()}
                        </Tab.Pane>
                        <Tab.Pane eventKey="forth">
                            {gallery()}
                        </Tab.Pane>
                    </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    </>;
}

export default Resources;