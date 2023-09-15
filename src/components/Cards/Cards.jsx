import { PropTypes } from "prop-types";
import Card from "../Card/Card";
const Cards = ({technologies}) => {
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 w-2/3 gap-6'>
        {
          technologies.map(technology => <Card key={technology.credit} technology={technology}></Card>)
        }
        </div>
    );
};

Cards.propTypes = {
    technologies: PropTypes.array
}
export default Cards;