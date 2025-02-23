import React from 'react';
import './FinalPoem.css';
import PropTypes from 'prop-types';

const FinalPoem = (props) => {

  const finalizedPoem = props.poem.map((line, i) => {
    return (
      <p key={i}>
        {line}
      </p>
    )
  });

  return (
    <div className="FinalPoem">
      { props.ready ? 
        <section className="FinalPoem__poem">
          <h3>Final Poem</h3>
          { finalizedPoem }
        </section> 
        : 
        <div className="FinalPoem__reveal-btn-container">
          <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick={ props.onFinalSubmit }/>
        </div>
      }
    </div>
  );
}

FinalPoem.propTypes = {
  poem: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
  onFinalSubmit: PropTypes.func.isRequired,
}

export default FinalPoem;
