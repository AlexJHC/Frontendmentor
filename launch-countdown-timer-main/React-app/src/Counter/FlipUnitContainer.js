// function component
export default function FlipUnitContainer({ digit, shuffle, unit }) {	
  
  // assign digit values
  let currentDigit = digit ;
  let previousDigit = digit + 1;

  // to prevent a negative value
  if ( unit !== 'hours') {
    previousDigit = previousDigit === -1 
      ? 59 
      : previousDigit;
  } else {
    previousDigit = previousDigit === -1 
      ? 23 
      : previousDigit;
  }

  // add zero
  if ( currentDigit < 10 ) {
    currentDigit = `0${currentDigit}`;
  } 
  if ( previousDigit < 10 ) {
    previousDigit = `0${previousDigit}`;
  }

  // shuffle digits
  const digit1 = shuffle 
    ? previousDigit 
    : currentDigit;
  const digit2 = !shuffle 
    ? previousDigit 
    : currentDigit;

  // shuffle animations
  const animation1 = shuffle 
    ? 'fold' 
    : 'unfold';
  const animation2 = !shuffle 
    ? 'fold' 
    : 'unfold';

  return(
    <div className={'flipUnitContainer'}>
      <div className='upperCard'>
        <span>{currentDigit}</span>
      </div>
      <div className='lowerCard'>
        <span>{previousDigit}</span>
      </div>
      <div className={`flipCard ${animation1}`}>
        <span>{digit1}</span>
      </div>
      <div className={`flipCard ${animation2}`}>
        <span>{digit2}</span>
      </div>
    </div>
  );
};


