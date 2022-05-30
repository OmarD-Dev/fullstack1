let favorite = document.getElementsByClassName("fa-bookmark");

let trash = document.getElementsByClassName("fa-ban");

Array.from(favorite).forEach(function(element) {
      element.addEventListener('click', function(){
        const currentUser = document.querySelector('#userName').innerText
        const birthdayID = this.parentNode.parentNode.childNodes[5].innerText
        console.log(birthdayID)
        console.log(currentUser)
        fetch('addFavorite', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'currentUser':currentUser,
            'birthdayID':birthdayID
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});

// Array.from(unfavorite).forEach(function(element) {
//   element.addEventListener('click', function(){
//     const currentUser = document.querySelector('#userName').innerText
//     const birthdayID = this.parentNode.parentNode.childNodes[5].innerText
//     console.log(birthdayID)
//     console.log(currentUser)
//     fetch('unfavorite', {
//       method: 'put',
//       headers: {'Content-Type': 'application/json'},
//       body: JSON.stringify({
//         'currentUser':currentUser,
//         'birthdayID':birthdayID
//       })
//     })
//     .then(response => {
//       if (response.ok) return response.json()
//     })
//     .then(data => {
//       console.log(data)
//       window.location.reload(true)
//     })
//   });
// });

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const date = this.parentNode.parentNode.childNodes[3].innerText
        fetch('delete', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'name': name,
            'date': date
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
