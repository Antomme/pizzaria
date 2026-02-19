import Header from "../components/header";
import { Footer } from "../components/footer";

export default function SummaryPage({ order }) {
    // Falls order leer ist
    if (!order) order = {};

    const orderedItems = Object.entries(order).filter(([_, pizza]) => pizza.amount > 0);

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
                {orderedItems.map(([pizzaName, orderData]) => (
                    <div key={pizzaName} className="pizza-summary-item">
                        {pizzaName} x {orderData.amount} = {orderData.amount * orderData.price} €
                    </div>
                ))}
                <div className="total">Total: {sum} €</div>
                <button>Pay now!</button>
            </div>
            <Footer />
        </div>
    );
}
