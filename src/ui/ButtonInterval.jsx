function ButtonInterval({ interval, selected = false, onClick }) {
  const className = `px-3 py-1 rounded-lg ${
    selected
      ? "bg-cyan-500 text-white hover:bg-cyan-600"
      : "bg-gray-100 hover:bg-gray-200"
  }`;
  return (
    <button className={className} onClick={onClick}>
      {interval}
    </button>
  );
}

export default ButtonInterval;
