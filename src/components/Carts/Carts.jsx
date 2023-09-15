import { PropTypes } from "prop-types";
import Cart from "../Cart/Cart";

const Carts = ({selectedTechnology, totalCredit, remainingCredit}) => {
    return (
     <div className="md:w-1/3 lg:w-1/3">
        <Cart totalCredit={totalCredit} remainingCredit={remainingCredit} selectedTechnology={selectedTechnology}></Cart>
     </div>
    );
};
Carts.propTypes = {
    selectedTechnology: PropTypes.array,
    totalCredit: PropTypes.number,
    remainingCredit: PropTypes.number
}
export default Carts;