fetch("https://jsonplaceholder.typicode.com/users/3")
.then(res => res.json())
.then(user => {
  document.body.innerHTML = `<div class="user-profile">
  <div class="user-profile-header">
  <div>${user.name}</div>
  <div>@${user.username}</div>
  </div>
  <div class="user-profile-company">
  <div> 🏙${user.company.name}</div>
  <div>${user.company.catchPhrase}</div>
  <div>${user.company.bs}</div>
  </div>
  <div class="user-profile-contact">
  <div>✉️${user.email}</div>
  <div>📞${user.phone}</div>
  <div>💻${user.website}</div>
  </div>
  <div class="user-profile-address">
  <div>${user.address.street}, ${user.address.suite}</div>
  <div>${user.address.city}, ${user.address.zipcode}</div>
  </div>
  </div>`
    console.log(user)
})