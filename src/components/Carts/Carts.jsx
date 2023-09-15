import { PropTypes } from "prop-types";
import Cart from "../Cart/Cart";

const Carts = ({selectedTechnology}) => {
    return (
     <div className="md:w-1/3 lg:w-1/3">
        <Cart selectedTechnology={selectedTechnology}></Cart>
     </div>
    );
};
Carts.propTypes = {
    selectedTechnology: PropTypes.func
}
export default Carts;