$(document).ready(function () {
  $("#searchUser").on("keyup", function (e) {
    let username = e.target.value;
    console.log(username);

    $.ajax({
      URL: "https://api.github.com/users/" + username,
      data: {
        client_id: "fbb29f3e3e850d1270b3",
        client_secret: "503817bd17f66e3f3a99ae81744d46eedc0bc277",
      },
    }).done(function (user) {
      console.log(user);
      $("#profile").html(`
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">${user.name}</h3>
          </div>
          <div class="panel-body">
            <div class="row">
              <div class="col-md-3">
                <img class="thumbnail" src="${user.avatar_url}">
              </div>
              <div class="col-md-9">

              </div>
            </div>
          </div>
        `);
    });
  });
});
