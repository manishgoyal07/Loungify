function Square(props) {
  return (
    <div className={'square m-auto font-extrabold'} {...props}>{props.x ? 'x' : (props.o ? 'o' : '')}</div>
    // <h1 className={"square text-4xl font-extrabold dark:text-white"} {...props}>{props.x ? 'x' : (props.o ? 'o' : '')}</h1>
  );
}

export default Square;