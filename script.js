

(() => {
    const updateButton = document.getElementById("addNewBook");
    const cancelButton = document.getElementById("cancel");
    const dialog = document.getElementById("bookReviewDialog");
    dialog.returnValue = "bookReviewDialog";

    // Update button opens a modeless dialog
    updateButton.addEventListener("click", () => {
      dialog.show();
    });

    // Form cancel button closes the dialog box
    cancelButton.addEventListener("click", () => {
      dialog.close("bookNotAdded");
    });
  })();
