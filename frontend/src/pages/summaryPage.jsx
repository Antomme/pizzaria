import Header from "../components/header";
import { Footer } from "../components/footer";

/**
 * Renders the order summary page.
 *
 * Displays all selected pizzas with their quantities,
 * calculates the total price based on stored unit prices,
 * and presents a final payment action.
 *
 * Only pizzas with an amount greater than 0 are displayed.
 *
 * @param {Object} props - Component props.
 * @param {Object<string, { amount: number, price: number }>} props.order 
 *        The current order state keyed by pizza name.
 * @returns {JSX.Element} The rendered order summary page.
 */

export default function SummaryPage({ order }) {

    const safeOrder = order || {};

    const orderedItems = Object.entries(safeOrder).filter(([_, pizza]) => pizza.amount > 0);

    let sum = 0;


    for (let i = 0; i < orderedItems.length; i++) {
        let pizzaPrice = orderedItems[i][1].price;
        let pizzaAmount = orderedItems[i][1].amount;
        sum += pizzaPrice * pizzaAmount;
    }

    return (
        <div>
            <Header input="Order Summary" />
            <div className="container">
                {orderedItems.length === 0 ? (
                    <p>Keine Pizzen ausgewählt.</p>
                ) : (
                    orderedItems.map(([pizzaName, orderData]) => (
                        <div key={pizzaName} className="pizza-summary-item">
                            {pizzaName} x {orderData.amount} = {orderData.amount * orderData.price} €
                        </div>
                    )))}
                <div className="total">Total: {sum} €</div>
                <button>Pay now!</button>
            </div>
            <Footer />
        </div>
    );
}
