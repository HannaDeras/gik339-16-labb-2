fetch("http://localhost:3000/users")
  .then((response) => response.json())

  .then((users) => {
    const ul = document.createElement("ul");
    users.forEach((users) => {
      const li = document.createElement("li");
      li.innerHTML = ` ${users.firstName} ${users.lastName} <br> ${users.username}`;

      li.style.background = `${users.color}`;

      ul.append(li);
    });
    document.body.append(ul);
  });
