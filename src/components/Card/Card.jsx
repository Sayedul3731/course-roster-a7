import { PropTypes } from "prop-types";

const Card = ({ technology }) => {
    const { img, course_name, details, price, credit } = technology;
    return (
        <div className="w-80 p-4 shadow-lg rounded-lg">
            <img className="w-72 h-36" src={img} alt="" />
            <h2 className="font-semibold my-3">{course_name}</h2>
            <p className="mb-3">{details}</p>
            <div className="flex justify-between">
                <p>$ Price : {price}</p>
                <p> Credit : {credit}hr</p>
            </div>
            <button className="bg-blue-600 px-20 ml-10 py-1 text-white rounded-lg mt-2">Select</button>
        </div>
    );
};
Card.propTypes = {
    technology: PropTypes.object
}
export default Card;