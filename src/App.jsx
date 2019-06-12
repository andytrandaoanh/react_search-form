import React, { useState, useEffect } from 'react';


class App extends React.Component {
   constructor(props) {
      super(props);
      
      this.state = {
         data: 'ab',
         isLoaded: false,
         items: []
      };


      this.updateState = this.updateState.bind(this);
      this.handleClick = this.handleClick.bind(this);
      
     
   };

   updateState(e) {
      this.setState({data: e.target.value});
   };

   handleClick(){

    const dataURL = "http://localhost:5000/query/" + this.state.data + '%';

    fetch(dataURL)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
      

   };



   render() {
   	 const { data, isLoaded, items } = this.state;
   	 console.log(items);

      return (
         <div>
            <h3>English Lexicon</h3>
            <form className="form-inline">
                <input type = "text" className="form-control" value = {this.state.data} 
                   onChange = {this.updateState} />
                <button type="button" className="btn btn-primary" onClick={this.handleClick}>
           				Look Up
          		</button>
            </form>
            <div>
          		{items.map(item => (
            		<button className="btn" key={item.word_id}>
              			{item.word_form} 
            		</button>
          		))}
        	 </div>

            


         </div>
      );
   }
}

export default App;



