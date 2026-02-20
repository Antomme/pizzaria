import { useEffect, useState } from "react";
import PizzaItem from "./pizzaItem";

/**
 * Renders the pizza menu.
 *
 * Fetches the list of pizzas from the backend API on mount
 * and displays them using the PizzaItem component.
 * The currently selected quantities are derived from the
 * order state and passed down to each PizzaItem.
 *
 * @param {Object} props - Component props.
 * @param {Object} props.order - Current order state keyed by pizza name.
 * @param {Function} props.onAmountChange - Callback triggered when a pizza quantity changes.
 * @returns {JSX.Element} The rendered pizza menu.
 */

export default function Menu({ order, onAmountChange }) {
    const [pizzas, setPizzas] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/pizzas")
            .then(res => res.json())
            .then(data => setPizzas(data._embedded.pizzas || []))
            .catch(console.error);
    }, []);

    return (
        <div className="menu">
            {pizzas.map(pizza => (
                <PizzaItem
                    key={pizza.name}
                    pizza={pizza}
                    amount={order[pizza.name]?.amount || 0} // hier wird der Wert angezeigt
                    onAmountChange={onAmountChange} // Callback weitergeben
                    price={pizza.price}
                />
            ))}
        </div>
    );
}
