(() => {
    const updateButton = document.getElementById("addNewBook");
    const cancelButton = document.getElementById("cancel");
    const dialog = document.getElementById("bookReviewDialog");
    dialog.returnValue = "bookReviewDialog";

    function openCheck(dialog) {
      if (dialog.open) {
        console.log("Dialog open");
      } else {
        console.log("Dialog closed");
      }
    }

    // Update button opens a modeless dialog
    updateButton.addEventListener("click", () => {
      dialog.show();
      openCheck(dialog);
    });

    // Form cancel button closes the dialog box
    cancelButton.addEventListener("click", () => {
      dialog.close("animalNotChosen");
      openCheck(dialog);
    });
  })();