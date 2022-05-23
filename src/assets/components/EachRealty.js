const EachRealty = ({ eachRealty }) => {
  return (
    <article className="row col-4 py-2">
      <div className="shadow-sm border rounded-1 d-flex flex-column">
        <span className="border-bottom lh-lg mb-1">{eachRealty.type}</span>

        <h4>{eachRealty.address_1}</h4>
        <h5>
          {eachRealty.zipcode}, {eachRealty.city}.
        </h5>
        <p></p>
        <p>{eachRealty.description}</p>
        <p>{eachRealty.price} €</p>
        <p>{eachRealty.surface} sq/m</p>
      </div>
    </article>
  );
};

export default EachRealty;
