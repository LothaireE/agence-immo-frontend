const PageBtn = ({ page, setPage, totalPages, nbRecords }) => {
  let pagesArr = [];

  for (let i = 1; i <= totalPages.last; i++) {
    pagesArr.push({ page: i });
  }

  return (
    <section className="d-flex my-2  col-8">
      <div className="col-8 d-flex justify-content-around">
        {page >= 2 && (
          <button class="btn btn-light col-5" onClick={() => setPage(page - 1)}>
            Page précédente
          </button>
        )}

        {page < totalPages.last && (
          <button class="btn btn-light col-5" onClick={() => setPage(page + 1)}>
            Page suivante
          </button>
        )}
      </div>

      <div className="col-4 input-group ">
        <label className="input-group-text border-0 bg-light" for="page-select">
          Aller à la page :
        </label>
        <select
          className="custom-select rounded-end border-light"
          onChange={(event) => {
            setPage(event.target.value);
          }}
          type="select"
          name="limit"
          id="page-select"
        >
          {pagesArr.map((item, index) => {
            console.log("item", item);
            return <option value={item.page}>{item.page}</option>;
          })}
        </select>
      </div>
    </section>
  );
};

export default PageBtn;
