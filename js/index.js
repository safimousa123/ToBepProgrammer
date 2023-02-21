function onInit() {
  console.log("i am ready");
}

function culcSalary() {
  const hourCostAngular = 220;
  const hourCostReact = 150;
  const hourCostVue = 90;
  const hoursByMonth = +prompt("How many hours do you work per month ? ");

  const framework = +prompt(
    "With wich framework do you want to work? , Angular press 1 | React press 2 | Vue press 3"
  );

  if (framework === 1) {
    alert(
      "your salary in angular can be : " +
        (hourCostAngular * hoursByMonth).toLocaleString()
    );
  } else if (framework === 2) {
    alert(
      "your salary in React can be : " +
        (hourCostReact * hoursByMonth).toLocaleString()
    );
  } else if (framework === 3) {
    alert(
      "your salary in Vue can be : " +
        (hourCostVue * hoursByMonth).toLocaleString()
    );
  } else {
    alert("You havent selected a framework");
  }
  console.log({ framework });
  //   alert("Your salary can be : " + hourCost * hoursByMonth + "$");
}
