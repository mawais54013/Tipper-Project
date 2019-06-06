import React from 'react';
import './tipCal.css';

class TipCalculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '0.00',
            tip: '15',
            people: '1',
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleTipChange = this.handleTipChange.bind(this);
        this.handlePeopleChange = this.handlePeopleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }

      handleTipChange(event) {
        this.setState({tip: event.target.value});
      }

      handlePeopleChange(event) {
        this.setState({people: event.target.value});
      }
    
      handleSubmit(event) {
        console.log(this.state.tip)
        event.preventDefault();
      }
    
      render() {
        return (
         <div id="div1">
            <div className="div2">
                <form onSubmit={this.handleSubmit}>
                    <label>
                    Bill:
                    <br/>
                    <input type="number" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <br/>
                    <label>
                        Tip %:
                        <br />
                        <input type="text" value={this.state.tip} onChange={this.handleTipChange} />
                    </label>
                    <br />
                    <br/>
                    <label>
                        Number of People: 
                        <br />
                        <input type="number" value={this.state.people} onChange={this.handlePeopleChange} />
                    </label>
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>

            <div className='div3'>
                <p>edbhjk</p>
            </div>
          </div>
        );
      }
}

export default TipCalculator;