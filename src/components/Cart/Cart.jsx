import { PropTypes } from "prop-types";

const Cart = ({ selectedTechnology, totalCredit }) => {
    return (
        <div className=" shadow-lg p-3 rounded-xl">
            <h3 className="font-semibold my-3 text-blue-600">Credit Hour Remaining  hr</h3>
            <hr />
            <h1 className="text-2xl font-bold my-3">Course Name</h1>

            {
                selectedTechnology.map(technology => <li key={technology.id}>{technology.course_name}</li>
                )
            }
            <hr className="mt-4" />
            <h3 className="font-semibold my-4">Total Credit Hour : {totalCredit}</h3>
            <hr />


        </div>
    );
};

Cart.propTypes = {
    selectedTechnology: PropTypes.array
}
export default Cart;