document.getElementById("form1").addEventListener("submit", resMentria);

function resMentria(e) {
  let tarea = document.getElementById("tarea").value;
  let mentira2 = document.getElementById("mentira2").value;
  let presmentira3entacion = document.getElementById("mentira3").value;

  let mentira = {
    tarea: tarea,
    mentira2: mentira2,
    mentira3: mentira3,
  };

  console.log(mentira);

  document.getElementById("form1").reset();
  e.preventDefault();
}