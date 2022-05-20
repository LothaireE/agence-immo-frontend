const PageBtn = ({ page, setPage }) => {
  console.log(page);
  return (
    <div className="d-flex">
      {page >= 2 && (
        <button class="btn btn-light" onClick={() => setPage(page - 1)}>
          Page précédente
        </button>
      )}
      <button class="btn btn-light" onClick={() => setPage(1)}>
        retour à la page 1
      </button>
      <button class="btn btn-light" onClick={() => setPage(page + 1)}>
        Page suivante
      </button>
    </div>
  );
};

export default PageBtn;
