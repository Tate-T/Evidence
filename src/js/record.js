(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-record-open]"),
    closeModalBtn: document.querySelector("[data-record-close]"),
    modal: document.querySelector("[data-record]"),
    backdrop: document.querySelector(".backdrop"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.backdrop.addEventListener("click", toggleModal);

  function toggleModal(e) {
    if (e.currentTarget === refs.backdrop && e.target !== e.currentTarget)
      return;
    refs.modal.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll");
  }
})();
