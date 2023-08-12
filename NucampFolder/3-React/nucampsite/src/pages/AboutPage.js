import { Container, Row, Col, Card, CardBody, CardHeader } from "reactstrap";

const AboutPage = () => {
	return (
		<Container>
			<Row className="row-content">
				<Col sm="6">
					<h3>Our Mission</h3>
					<p>
						We present a curated database of the best campsites in
						the vast woods and backcountry of the World Wide Web
						Wilderness. We increase access to adventure for the
						public while promoting safe and respectful use of
						resources. The expert wilderness trekkers on our staff
						personally verify each campsite to make sure that they
						are up to our standards. We also present a platform for
						campers to share reviews on campsites they have visited
						with each other.
					</p>
				</Col>
				<Col sm="6">
					<Card>
						<CardHeader className="bg-primary text-white">
                        <h3>Facts at a Glance</h3>
                        </CardHeader>

					</Card>
				</Col>
				<Col></Col>
			</Row>
			<Row className="row-content"></Row>
		</Container>
	);
};

export default AboutPage;
