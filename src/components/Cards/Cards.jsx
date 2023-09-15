import { PropTypes } from "prop-types";
import Card from "../Card/Card";
const Cards = ({technologies, handleSelectedTechnologies}) => {
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 md:w-2/3 lg:w-2/3 gap-6'>
        {
          technologies.map( (technology, idx) => <Card key={idx} handleSelectedTechnologies={handleSelectedTechnologies}   technology={technology}></Card>)
        }
        </div>
    );
};

Cards.propTypes = {
    technologies: PropTypes.array,
    handleSelectedTechnologies: PropTypes.func
}
export default Cards;