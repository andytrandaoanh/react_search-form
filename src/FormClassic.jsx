import React from 'react';


class DataList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: this.props.query,
      error: null,
      isLoaded: false,
      items: []
    };
  }


  

  componentDidMount() {

  
    //const dataURL = "http://localhost:5000/query/" + this.state.query;
    const dataURL = "http://localhost:5000/query/" + this.props.query;

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
  }

  render() {

    console.log('parent-to-child: ' + this.props.query);

    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.word_id}>
              {item.word_form} {item.book_id}
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default DataList;
