import { PropTypes } from "prop-types";

const Cards = ({technologies}) => {
    console.log(technologies);
    return (
        <div>
            <h1>Cards: {technologies.length}</h1>
        </div>
    );
};

Cards.propTypes = {
    technologies: PropTypes.array
}
export default Cards;