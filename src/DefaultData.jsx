import React, { useState, useEffect } from "react";

function DefaultData(props) {
  const [words, setWords] = useState([]);
  const [query, setQuery]= useState([props.query]);
  
  console.log('mother-to-child ' + props.query);

  const getWords = () => {
    const urlAPI = "http://localhost:5000/query/" +  props.query;
    
    return fetch(urlAPI)
      .then(res => res.json())
      .then(res => setWords(res));
  };

  useEffect(() => {
    getWords();
  }, []);


  return (
    <div className="table-responsive">
    	<table className="table table-striped">
    		<thead><tr><th>Word ID</th><th>Word Form</th><th>Boodk ID</th></tr></thead>
    		<tbody>
		      {words.map((word, index) => {
		        //return <p>{JSON.stringify(word)}</p>;
		        return <tr><td>{word.word_id}</td><td>{word.word_form}</td><td>{word.book_id}</td></tr>;

		      })}
      </tbody>

      </table>
    </div>
  );
}


export default DefaultData;