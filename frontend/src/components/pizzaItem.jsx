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

function classes(soldOut){
    let cls = "pizza";
    if(soldOut) cls += " sold-out";
    return cls;
}
