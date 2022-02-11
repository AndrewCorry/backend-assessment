



document.getElementById("mageList").onclick = function (){
    axios.post("http://localhost:4000/api/post/",)
    .then(function (res) {
      console.log(res.data)

    })
  }

  addEventListener