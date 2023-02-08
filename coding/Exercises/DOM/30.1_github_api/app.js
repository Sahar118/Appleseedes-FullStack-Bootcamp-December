const input = document.querySelector("#input");
// const pic = document.querySelector("#myImg");
const button = document.querySelector("#btn");
const username = document.querySelector("#name");
const repos = document.querySelector("#public-repos");

const github = () => {
  button.addEventListener("click", 
  async function () {
    const res = await fetch(`https://api.github.com/users/${input.value}`);
    const data = await res.json();
    console.log(data);
    document.querySelector("#myImg").setAttribute("src", `${data.avatar_url}`);
    
    username.innerHTML = data.name;
    repos.innerHTML = `Public repos: ${data.public_repos}`;
  });
};

github();