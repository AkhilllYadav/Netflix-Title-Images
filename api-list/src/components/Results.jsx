import React from 'react';
import './Results.css';

const Results = ({ results }) => {
  return (
    <div className="results">
      {results.map((result) => (
        <div key={result.netflix_id} className="result-item">
          <h3 className="result-title">{result.title}</h3>
          <div className="images">
            {result.images.length > 0 ? (
              result.images.map((image, index) => (
                <img key={index} src={image.url} alt={result.title} className="result-image" />
              ))
            ) : (
              <p>No images available.</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Results;
