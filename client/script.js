const url = "http://localhost:3000/users"; //Här hämtar vi users från vår server

const responseUsers = fetch(url);

responseUsers
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((users) => console.log(users));

fetch(url)
  .then((response) => response.json())
  .then((users) => {
    users.forEach((users) => {
      const html = `<ul>
      <li style = "background:${users.color};" >
    ${users.firstName} ${users.lastName}
    </li>
    <span style = "background:${users.color};"> ${users.username} </span>
     </ul>`;

      document.body.insertAdjacentHTML("beforeend", html);
    });
    return "hej";
  })

  .then((data) => console.log(data));
