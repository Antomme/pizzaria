import { useState } from "react";

export default function PizzaSummaryItem({ pizzaName, orderData, order, setOrder }) {

    const [isEditing, setIsEditing] = useState(false);
    const [newAmount, setNewAmount] = useState(orderData.amount);

    const handleDelete = () => {
        setOrder(prev => {
            const newOrder = { ...prev };
            delete newOrder[pizzaName];
            return newOrder;
        });
    };

    const handleEdit = () => setIsEditing(true);

    const handleBlur = () => {
        setOrder(prev => ({
            ...prev,
            [pizzaName]: {
                ...prev[pizzaName],
                amount: newAmount
            }
        }));
        setIsEditing(false);
    };

    return (
        <div className="pizza-summary-item">
            <img className="img" src={orderData.pizzaImg} alt={pizzaName} />

            {isEditing ? (
                <input className="pizza-amount"
                    type="number"
                    min="0"
                    value={newAmount}
                    onChange={(e) => setNewAmount(parseInt(e.target.value) || 0)}
                    onBlur={handleBlur}
                    autoFocus
                />
            ) : (
                <p>{pizzaName} x {orderData.amount} = {orderData.amount * orderData.price} €</p>
            )}

            <div className="item-buttons">
                <img className="edit-btn" src="/icons/write.png" alt="Edit" onClick={handleEdit} />
                <img className="delete-btn" src="/icons/delete.png" alt="Delete" onClick={handleDelete} />
            </div>
        </div>
    );
}
