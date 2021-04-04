const myRequest = new Request("https://api.github.com/users/Jose-LolG0D/repos");

fetch(myRequest)
  .then((res) => {
    if (res.status === 200) {
      const json = res.json().then((data) => {
        data.forEach((project) => {
          addCard(project.name, project.description, project.html_url);
        });
      });
    } else {
      throw new Error("An Error occured contacting the GitHub API");
    }
  })
  .catch((err) => {
    console.error(err);
  });

function addCard(name, description, link) {
  var card_html = `<div class="card">
<h1 class="title">${name}</h1>
<h3 class="description">${description} <a class="parenthesis" href="${link}">(</a><a class="more" href="${link}">Go to Repo</a><a class="parenthesis" href="${link}">)</a></h3>
</div>`;

  $(".cards")
    .append(card_html)
    .ready(
      //Wrap description lines from 'My Projects' section
      $(function () {
        $(".card .description").dotdotdot({ truncate: "letter", keep: "a", watch: true, height: "watch" });
      })
    );
}
