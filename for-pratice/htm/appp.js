const coursen = document.querySelector("#cousename");
const courser = document.querySelector("#courserating");
const addbutton = document.querySelector("#add");
const courselist = document.querySelector("#courselist");
const alertCtrl = document.querySelector("ion-alert-controller");

addbutton.addEventListener("click", () => {
  const courses = coursen.value;
  const couserr = courser.value;
  if (
    courses.trim().length <= 0 ||
    couserr.trim().length <= 0 ||
    couserr < 1 ||
    couserr > 5
  ) {
    alertCtrl
      .create({
        message: "The rating is invalid!",
        header: "Invalid rating!",
        buttons: ["OK"],
      })
      .then((alertElement) => {
        alertElement.present();
      });

    return;
  }
  //   const list = document.createElement("ion-item");
  //   addbutton.textContent = courses + "" + couserr;

  const list = document.createElement("ion-item");
  list.innerHTML = `<strong>${courses}</strong>&nbsp;${couserr}/5`;
  courselist.appendChild(list);
});
