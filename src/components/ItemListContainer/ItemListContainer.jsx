import "../../scss/components/ItemListContainer/_ItemListContainer.scss";

export const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container">
      <h2 className="list__h2">ItemListContainer</h2>
      <p>{greeting}</p>
    </div>
  );
};
