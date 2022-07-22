import "./App.css";
import { useState } from "react";

function App() {
  // pour gérer le contenu des input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordbis, setPasswordbis] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  // pour gérer l'ensemble du formulaire
  const [result, setResult] = useState("");

  // pour éviter le rafraichissement systématique de la page
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Email", email);
    console.log("Password", password);
    console.log("Firstname", firstname);
    console.log("Lastname", lastname);
    console.log("Passwordbis", passwordbis);

    let formSended = "";
    if (password === passwordbis) formSended = true;
    else formSended = false;

    if (formSended === true) {
      //alert("Formulaire envoyé !");
      return (
        <div>
          <p>Email : {email}</p>
          <p>Password : {password}</p>
          <button
            onClick={({ result }) => {
              setResult;
            }}
          >
            Editer ces informations
          </button>
        </div>
      );
    } else alert("Les mots de passe ne sont pas identiques !!!");
  };

  return (
    <div className="App">
      <h1>Create account</h1>

      <h2>Firstname</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="firstname"
          value={firstname}
          onChange={(event) => {
            setFirstname(event.target.value);
          }}
        />
        <br />
        <h2>Surname</h2>
        <input
          type="text"
          placeholder="lastname"
          value={lastname}
          onChange={(event) => {
            setLastname(event.target.value);
          }}
        />
        <br />
        <h2>Email</h2>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />

        <br />
        <h2 className1="pswd1">Password</h2>
        <input
          type="text"
          placeholder="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />

        <br />
        <h2 className="pswd2">Confirm your password</h2>
        <input
          type="text"
          placeholder="confirm your password"
          value={passwordbis}
          onChange={(event) => {
            setPasswordbis(event.target.value);
          }}
        />

        <br />

        <input className="submit" type="submit" value="Register" />
        <br />
      </form>
    </div>
  );
}

export default App;
