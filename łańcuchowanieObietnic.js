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
const getPostsButton = document.querySelector("#getPosts");
getPostsButton.addEventListener("click", fetchPosts);

//     Zadanie 2
// stworz formularz z input o typie number do wybrania id posta z zakresu 1-100
// stworz funkcje do pobierania pojedynczego posta
// przypisz do formularza utworzona funkcje
// po wcisnieciu przycisku submit powinno nam wyswietlic posta w konsoli

const fetchSinglePost = async (id) => {
  fetch(`https://dummyjson.com/posts/${id}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Cannot fetch data!");
      }
      return response.json();
    })
    .then((post) => {
      console.log(post);
    })
    .catch((error) => {
      console.log(error);
    });
};
const getPostIdForm = document.querySelector("#getPostId");
const getPostInputId= document.querySelector("#postId");
getPostIdForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const postId = getPostInputId.value;
  fetchSinglePost(postId);
});

// Zadanie 3
// stworz 3 przyciski "Strona 1", "strona 2", "strona 3"
// stworz 1 funkcje z przyjmowanym parametrem "page", gdzie limit jest ustalony na sztywno do zmiennej ITEM_LIMIT
// przypisz eventy do przyciskow z html
// kazdy z tych przyciskow okresla odpowiednio elementy 1-10, 11-20, 21-30
// po wcisnieciu odpowiedniego przycisku powinno wyswietlic nam okreslone elementy
// 1 strona> limit = 10, skip = 0 2. strona> limit = 10, skip 10 3 strona> limit = 10, skip 20 
// Utworzenie globalnej zmiennej currPage
//skip = limit * currPage
let currPage = 1;
const ITEM_LIMIT = 10; // tak z duych liter zmienna stała statyczna
let skip = ITEM_LIMIT * currPage;
const fetchPage = async (page) => {
  fetch(`https://dummyjson.com/posts?limit=10&skip=${ITEM_LIMIT * page-1}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Cannot fetch data!");
      }
      return response.json();
    })
    .then((responseJSON) => {
      console.log(responseJSON);
    })
    .catch((error) => {
      console.log(error);
    });
};
const getPage1Button = document.querySelector("#page1");

const getPage2Button = document.querySelector("#page2");

const getPage3Button = document.querySelector("#page3");

const btnList = [getPage1Button, getPage2Button, getPage3Button];
btnList.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    currPage = index + 1;
  });
});

