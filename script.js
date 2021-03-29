const getData = async () => {
  const url = "https://jsonplaceholder.typicode.com/photos";

  try {
    const res = await fetch(url);
    const data = await res.json();

    for (let i = 0; i < 20; i++) {
      const element = data[i].title;
      console.log(element);
    }
    
    setTimeout(() => console.log("Información Enviada"), 3000);

  } catch (error) {
    console.log(error);
  }
};
getData();