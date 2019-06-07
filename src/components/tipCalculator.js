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
    
      render() {

          let tipNum = (parseFloat(this.state.value) * (parseInt(this.state.tip)/100))/parseInt(this.state.people) + 0.00;
          let tipTotal;
          tipTotal = parseFloat(tipNum).toFixed(2);

          let totalNum = (parseFloat(this.state.value) + (parseFloat(tipTotal) * parseInt(this.state.people)))/parseInt(this.state.people);
          console.log(totalNum)
          let fullTotal;
          
          if(isNaN(totalNum))
          {
              tipTotal = 'All fields must be numbers';
              fullTotal = 'All fields must be numbers';
          }
          else
          {
            if(this.state.people > 1)
            {
                fullTotal = '$' + parseFloat(totalNum).toFixed(2) + ' per person';
                tipTotal = '$' + parseFloat(tipNum).toFixed(2) + ' per person'

            }
            else 
            {
                fullTotal = '$' + parseFloat(totalNum).toFixed(2);
                tipTotal = '$' + parseFloat(tipNum).toFixed(2);
            }
          }

        return (
         <div id="div1">
             <h2>Tip Calculator</h2>
            <div className="div2">
                <br/>
                <form onSubmit={this.handleSubmit}>
                    <label>
                    Bill:
                    <br/>
                    <input type="number" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <br/>
                    <br />
                    <label>
                        Tip %:
                        <br />
                        <input type="text" value={this.state.tip} onChange={this.handleTipChange} />
                    </label>
                    <br/>
                    <br />
                    <br/>
                    <label>
                        Number of People: 
                        <br />
                        <input type="number" value={this.state.people} onChange={this.handlePeopleChange} />
                    </label>
                    <br />
                </form>
            </div>

            <div className='div3'>
                <h4>Tip</h4>
                <p>{tipTotal}</p>

                <h4>Total</h4>
                <p>{fullTotal}</p>
            </div>
          </div>
        );
      }
}

export default TipCalculator;