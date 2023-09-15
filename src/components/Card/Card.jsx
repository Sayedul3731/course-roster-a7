import { PropTypes } from "prop-types";
import { FaBookOpen } from "react-icons/fa";

const Card = ({ technology, handleSelectedTechnologies }) => {
    const { id, img, course_name, details, price, credit } = technology;
    return (
        <div className=" h-auto md:h-auto p-4 shadow-lg rounded-lg">
            <img className="md:w-72 lg:w-full h-36" src={img} alt="" />
            <h2 className="font-semibold my-1">{course_name}</h2>
            <p className="mb-3">{details}</p>
            <div className="flex justify-between mb-1">
                <p>$ Price : {price}</p>
                <div className="flex items-center">
                    <p className="mr-3"><FaBookOpen></FaBookOpen></p>
                    <p> Credit : {credit}hr</p>
                </div>
            </div>
            <button onClick={() => handleSelectedTechnologies(technology, id, credit)} className="bg-blue-600  w-full mx-auto py-1 font-semibold text-white rounded-lg mt-2">Select</button>
        </div>
    );
};
Card.propTypes = {
    technology: PropTypes.object,
    handleSelectedTechnologies: PropTypes.func
}
export default Card;