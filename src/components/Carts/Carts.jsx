import { PropTypes } from "prop-types";
import Cart from "../Cart/Cart";

const Carts = ({selectedTechnology, totalCredit}) => {
    return (
     <div className="md:w-1/3 lg:w-1/3">
        <Cart totalCredit={totalCredit} selectedTechnology={selectedTechnology}></Cart>
     </div>
    );
};
Carts.propTypes = {
    selectedTechnology: PropTypes.array,
    totalCredit: PropTypes.number
}
export default Carts;