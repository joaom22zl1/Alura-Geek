function consumirAPI() {
  let url =
    "https://api.rawg.io/api/games?key=7a244728cfb14f9e91a3d7d899cd0084&dates=2023-01-01,2023-12-31&platforms=18,1,7"
  fetch(url).then(function (response) {
    response.json().then(function (data) {
      console.log(data)
    })
  })
}

consumirAPI()

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
