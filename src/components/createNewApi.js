function createNewApi() {

  const apiUrl = "https://api.jsonbin.io/v3/b/642585f1ace6f33a2200b1e5";

  
    fetch(apiUrl)
     .then((response) => response.json())
     .then((actualData) => {
       localStorage.setItem("dogs", JSON.stringify(actualData));
     })
     .catch((error) => {
       console.log(error);
     }, []);
}

export default createNewApi;





  /*
   function createNewApi() {
  fetch(apiUrl)
  .then((response) => response.json())
  .then((actualData) => {
  localStorage.clear()
  localStorage.setItem("dogs", JSON.stringify(actualData));
  })
  .catch((error) => {
  console.log(error);
  });
  }
  
  export default createNewApi; */