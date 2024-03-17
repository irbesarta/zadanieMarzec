// 1. stworz przycisk do pobierania danych napisz funkcje za pomoca metodych fetch do pobierania listy uzytkownikow, lista uzytkownikow powinna wyswietlic sie w konsoli po wcisnieciu przycisku aby to sie wykonalo musimy dodac event listener do przycisku na event click
// zadanie 1
const fetchUsers = async () => {
    const usersURL = "https://dummyjson.com/users";
    try {
      const response = await fetch(usersURL);
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const { users } = await response.json();
      console.log(users);
    } catch (error) {
      console.log(error);
    }
  };
  // zadanie 2

// 2. na bazie zadania poprzedniego utworz funkcje ktora na bazie pobranej listy dodaje nam elementy do listy uzytkownikow
  const button = document.querySelector("#get-users-button");
  button.addEventListener("click", () => fetchUsers());
  const createUser = async (body) => {
    try {
      const response = await fetch("https://dummyjson.com/users/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      if (!response.ok) {
        throw new Error("Cannot create user");
      }
      const createdUser = await response.json();
      console.log(createdUser);
      alert("Udało się", createdUser);
    } catch (error) {
      console.log(error);
    }
  };
  // createUser({ firstName: "Jan", lastName: "Kowalski" });
  // zadanie 3 i 4
//   3. kazdy z elementów powinien miec przycisk do usuwania aktualnego elementu, element powinien zostac usuniety z widoku oraz wyslac zapytanie o usuniecie uzytkownika po ID
  const deleteUser = async (id) => {
    const userURL = `https://dummyjson.com/users/${id}`;
    try {
      const response = await fetch(userURL, {
        method: "DELETE",
        headers:{},
      });
      if (!response.ok) {
        throw new Error("Cannot delete user");
      }
      const deletedUser = await response.json();
      console.log(deletedUser);
      alert("Uzytkownik zostal usuniety!")
    } catch (error) {
      console.log(error);
    }
  };
  const deletedInput = document.querySelector("#user-id");
    const deleteUserForm = document.querySelector("#deleted-user");
    deleteUserForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const userId = deletedInput.value;
    deleteUser(userId)
    console.log(userId);
  });
  // zadanie 4
//   4. stworz formularz z input o typie number do wybrania id uzytkownika z zakresu 1-100 stworz funkcje do pobierania pojedynczego uzytkownika przypisz do formularza utworzona funkcje po wcisnieciu przycisku submit powinno nam wyswietlic uzytkownika w konsoli
  const fetchUsersId = async (id) => {
    const usersIdURL = `https://dummyjson.com/users/${id}`;
    try {
      const response = await fetch(usersIdURL);
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const user  = await response.json();
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

const requestUserForm = document.querySelector("#requested-user")
requestUserForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const requestedId = requestUserForm.querySelector("input").value;
    fetchUsersId(requestedId);
    console.log(requestedId);
});

//5. stworz formularz ktory bedzie aktualizowal firstName oraz lastName uzytkownika formularz bedzie zawieral 3 inputy (okresla id, imie, nazwisko) oraz przycisk input od id powinien byc sprawdzany (min=1, max=100) napisz funkcje ktora pobiera dane z formularza oraz aktualizuje wybranego uzytkownika przypisz funkcje jako event listener do formularza
// const updateUser = async (id, body) => {
//   const userURL = `https://dummyjson.com/users/${id}`;
//   try {
//     const response = await fetch(userURL, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(body),
//     });
//     if (!response.ok) {
//       throw new Error("Cannot update user");
//     }
//     const updatedUser = await response.json();
//     console.log(updatedUser);
//     alert("Uzytkownik zostal zaktualizowany!")
//   } catch (error) {
//     console.log(error);
//   }
// };
// const updateUserForm = document.querySelector("#edited-user-form");
// updateUserForm.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const id = updateUserForm.querySelector("#edited-user-id").value;
//   const firstName = updateUserForm.querySelector("#edited-userName").value;
//   const lastName = updateUserForm.querySelector("#edited-userLastName").value;
//   updateUser(id, { firstName, lastName });
//   console.log(id, firstName, lastName);
// });

//zadanie 6. stworz formularz do utworzenia nowego uzytkownika stworz funkcje ktora bedzie pobierac pola z formularza i tworzyc na ich bazie nowego uzytkownika w bazie po utworzeniu dajmy alert dla uzytkownika o nowym produkcie pamietamy o sprawdzeniu czy dane nie sa puste dodajemy event listener do formularza z referencja funkcji
const createNewUser = async (body) => {
    try {
      const response = await fetch("https://dummyjson.com/products/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
  
      if (!response.ok) throw new Error("Cannot create product with those data!");
  
      const createNewUser = await response.json();
  
      alert(`Pomyslnie dodano uzytkownika ${createNewUser.firstName}!`);
      console.log(createNewUser);
    } catch (error) {
      console.log(error);
    }
  };
//   const newUser = {
//     firstName: "Apple",
//     lastName: "ddd"Pobierxz listę urzy
//   };
//   if (createNewUser.firstName) {
//     createNewUser(newUser);
//   }

    const createNewUserForm = document.querySelector("#create-user-form");
    createNewUserForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const firstName = createNewUserForm.querySelector("#created-userName").value;
    const lastName = createNewUserForm.querySelector("#created-userLastName").value;
    createNewUser({ firstName, lastName });
    console.log(firstName, lastName);
    }
    );


  
  
  
  
  
  
  
  
  
  
  
  
  
  
  