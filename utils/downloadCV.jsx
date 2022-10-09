export const downloadCV = () => {
  // using Java Script method to get PDF file
  fetch("CV_KevinLundberg.pdf").then((response) => {
    console.log("fetch");
    response.blob().then((CV) => {
      // Creating new object of PDF file
      const fileURL = window.URL.createObjectURL(CV);
      // Setting various property values
      let alink = document.createElement("a");
      alink.href = fileURL;
      alink.download = "CV_KevinLundberg.pdf";
      alink.click();
    });
  });
};
