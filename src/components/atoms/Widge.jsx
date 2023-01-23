import "../atoms/widges.css"
function Widge({ item }) {
  return (
    <h3 className="uno">
      {item.id}. {item.name}
    </h3>
  );
}

export default Widge;
