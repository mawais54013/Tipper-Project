import React from 'react';
import './tipCal.css';

class TipCalculator extends React.Component {
    constructor(props) {
        super(props);
        // set up props to update later
        this.state = {
            value: '0.00',
            tip: '15',
            people: '1',
        };
        // handle change methods for each input
        this.handleChange = this.handleChange.bind(this);
        this.handleTipChange = this.handleTipChange.bind(this);
        this.handlePeopleChange = this.handlePeopleChange.bind(this);
    }
    // total bill amount
    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    // tip amount
    handleTipChange(event) {
        this.setState({ tip: event.target.value });
    }
    // number of people
    handlePeopleChange(event) {
        this.setState({ people: event.target.value });
    }

    render() {
        // first calculate tip total 
        let tipNum = (parseFloat(this.state.value) * (parseInt(this.state.tip) / 100)) / parseInt(this.state.people) + 0.00;
        let tipTotal = parseFloat(tipNum).toFixed(2);
        // then calculate the total full amount after tip 
        let totalNum = (parseFloat(this.state.value) + (parseFloat(tipTotal) * parseInt(this.state.people))) / parseInt(this.state.people);
        let fullTotal;
        // conditions if total amount is not a number or less than 0 use this error
        if (isNaN(totalNum) || totalNum < 0) {
            tipTotal = 'All fields must be positive numbers';
            fullTotal = 'All fields must be positive numbers';
        }
        // otherwise display the final amount based on people count 
        else {
            if (this.state.people > 1) {
                fullTotal = '$' + parseFloat(totalNum).toFixed(2) + ' per person';
                tipTotal = '$' + parseFloat(tipNum).toFixed(2) + ' per person'
            }
            else {
                fullTotal = '$' + parseFloat(totalNum).toFixed(2);
                tipTotal = '$' + parseFloat(tipNum).toFixed(2);
            }
        }
        // output area 
        return (
            <div id="div1">
                <h2>Tip Calculator</h2>
                {/* first div */}
                <div className="div2">
                    <br />
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Bill Amount:
                    <br />
                            <input type="number" value={this.state.value} onChange={this.handleChange} />
                        </label>
                        <br /> 
                        <label>
                            Tip %:
                            <br/>
                            <input type="text" value={this.state.tip} onChange={this.handleTipChange} />
                        </label>
                        <br />
                        <label>
                            Number of People:
                            <input type="number" value={this.state.people} onChange={this.handlePeopleChange} />
                        </label>
                        <br />
                    </form>
                </div>
                {/* second div */}
                <div className='div3' id="divFix">
                    <h2>Tip</h2>
                    <p id="pTag">{tipTotal}</p>

                    <h2>Total</h2>
                    <p id="pTag">{fullTotal}</p>
                </div>
            </div>
        );
    }
}

export default TipCalculator;