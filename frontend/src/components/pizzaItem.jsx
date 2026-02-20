/**
 * Renders a single pizza menu item with quantity selection.
 *
 * Displays pizza details (image, name, description, price)
 * and provides a numeric input to select the desired amount.
 * If the pizza is marked as sold out, the input is disabled
 * and a corresponding CSS class is applied.
 *
 * @param {Object} props - Component props.
 * @param {Object} props.pizza - Pizza data object.
 * @param {string} props.pizza.name - Name of the pizza.
 * @param {string} props.pizza.description - Description of the pizza.
 * @param {number} props.pizza.price - Price per unit.
 * @param {string} props.pizza.imageUrl - Image source URL.
 * @param {boolean} props.pizza.soldOut - Availability flag.
 * @param {number} props.amount - Currently selected quantity.
 * @param {Function} props.onAmountChange - Callback triggered when quantity changes.
 * @returns {JSX.Element} A menu item with quantity input.
 */

export default function PizzaItem({ pizza, amount, onAmountChange }) {
    
    const handleChange = (e) => {
        const value = parseInt(e.target.value) || 0;
        onAmountChange(pizza.name, value, pizza.price);
    };

    return (
        <div className={classes(pizza.soldOut)}>
            <img src={pizza.imageUrl} alt={pizza.name} />
            <div className="pizza-details">
                <h3>{pizza.name}</h3>
                <p>{pizza.description}</p>
                <span>{pizza.price} €</span>

                <input
                    className="pizza-amount"
                    type="number"
                    min="0"
                    value={amount}
                    disabled={pizza.soldOut}
                    onChange={handleChange}
                />
            </div>
        </div>
    );
}

/**
 * Generates the CSS class string for a pizza item.
 *
 * Adds the "sold-out" modifier class if the pizza is unavailable.
 *
 * @param {boolean} soldOut - Indicates whether the pizza is sold out.
 * @returns {string} The computed CSS class string.
 */
function classes(soldOut){
    let cls = "pizza";
    if(soldOut) cls += " sold-out";
    return cls;
}
