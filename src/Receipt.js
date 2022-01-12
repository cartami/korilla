import React from 'react'

class Receipt extends React.Component {

    render() {
        const toggle = () => {
            console.log(this.props.receipt.paid);
            this.props.receipt.paid = true;
        }
        return (
            <div style={{ border: '2px solid orange'}} >
                <h1>{this.props.receipt.person}</h1>
                <p><b>Main: </b>{this.props.receipt.order.main}</p>
                <p><b>Protein: </b>{this.props.receipt.order.protein}</p>
                <p><b>Main: </b>{this.props.receipt.order.rice}</p>
                <p><b>Suace: </b>{this.props.receipt.order.sauce}</p>
                <p><b>Drink: </b>{this.props.receipt.order.drink}</p>
                <p><b>Cost: </b>{this.props.receipt.order.cost}</p>
                <p><b>toppings: </b>{this.props.receipt.order.toppings.map(topping => (
                    topping + ", "
                ))}</p>
                <button onClick={toggle}>Paid</button>
                <p>Paid: {this.props.receipt.paid+''}</p>
            </div>
        )

    }
}

export default Receipt