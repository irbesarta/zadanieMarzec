// łańcuchowanie obietnic then i catch
// poniej znajdziesz kod z poprzedniego zadania zapisany z wykorzystaniem then i catch na pobieranie userów
const fetchUser = async () => {
    fetch("https://dummyjson.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Cannot fetch data!");
        }
        return response.json();
      })
      .then((users) => {
        console.log(users);
      })
      .catch((error) => {
        console.log(error);
      });
    };
// Zadanie 1
// stworz przycisk do pobierania danych
// napisz funkcje za pomoca metodych fetch do pobierania listy postów
// lista uzytkownikow powinna wyswietlic sie w konsoli po wcisnieciu przycisku
// aby to sie wykonalo musimy dodac event listener do przycisku na event click
const fetchPosts = async () => {
    fetch("https://dummyjson.com/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Cannot fetch data!");
        }
        return response.json();
      })
      .then((posts) => {
        console.log(posts);
      })
      .catch((error) => {
        console.log(error);
      });
    };
    const button = document.querySelector("#getPosts");
    button.addEventListener("click", fetchPosts);

    
