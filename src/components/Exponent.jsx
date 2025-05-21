function Exponent(num, exponent) {
  const result = num ** exponent;

  let reusableMultiplication;

  if (exponent === 2) {
    reusableMultiplication = Math.pow(num, 2);
  } else if (exponent === 3) {
    reusableMultiplication =  Math.pow(num, 3);
  } else if (exponent === 4) {
    reusableMultiplication =  Math.pow(num, 4);
  } else if (exponent === 5) {
    reusableMultiplication =  Math.pow(num, 5);
  } else if (exponent === 6) {
    reusableMultiplication =  Math.pow(num, 6);
  }

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">
        {" "}
        {num}n^{exponent}
      </p>
      <p className="exponent-result">
        {" "}
        = <span className="total">{result}</span>
      </p>
    </div>
  );
}

export default Exponent;