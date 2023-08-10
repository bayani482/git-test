import { Card, CardImg, CardText,CardBody, CardTitle} from 'reactstrap'

const DisplayCard = ({item}) => {
    const {image, name, description } = item;
    return(
    <card>
        <CardImg src = {image} alt={name} />
        <CardBody>
            <CardTitle>{name}</CardTitle>
            <CardText> {description}</CardText>
        </CardBody>
    </card>

    );
};

export default DisplayCard;