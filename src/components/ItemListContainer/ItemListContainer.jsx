import "../../scss/components/ItemListContainer/_ItemListContainer.scss";

export const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container my-5">
      <h2 className="list__h2">ItemListContainer</h2>
      <p>{greeting}</p>
      <button className="btn btn-primary">Click me</button>
    </div>
  );
};
