import inquirer from "inquirer";

await inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "Cuál es tu nombre?",
    },
    {
      type: "list",
      name: "food",
      message: "Que quieres comer?",
      choices: ["Pizza", "Sushi", "Fish & Chips", "Indian"],
    },
  ])
  .then(async (answers) => {
    if (answers.food === "Pizza") {
      await inquirer.prompt({
        type: "list",
        name: "pizza",
        message: "Estas son nuestras pizzas:",
        choices: ["Margarita", "Hawaiana", "4 estaciones", "Caprese"],
      });
    } else if (answers.food === "Sushi") {
      await inquirer.prompt({
        type: "list",
        name: "sushi",
        message: "Estos son nuestros platos:",
        choices: [
          "California Roll",
          "Tataki de atún",
          "Nigiri de salmón",
          "42 piezas variadas",
        ],
      });
    } else if (answers.food === "Fish & Chips") {
      await inquirer.prompt({
        type: "list",
        name: "Fish",
        message: "Estos son nuestros tamaños:",
        choices: ["Pequeño", "Mediano", "Grande", "XXXL"],
      });
    } else if (answers.food === "Indian") {
      await inquirer.prompt({
        type: "list",
        name: "indian",
        message: "Estos son nuestros platos:",
        choices: [
          "Pollo masala",
          "Tandori de verduras",
          "Curry rojo de cordero",
          "Arroz indio",
        ],
      });
    }
  });

await inquirer
  .prompt([
    {
      type: "input",
      name: "bebida",
      message: "Quieres añadir bebida? Escribe tu respuesta",
    },
    {
      type: "checkbox",
      name: "moreThings",
      message: "Alguna cosa más?",
      choices: [
        {
          name: "Si",
          checked: false,
        },
        {
          name: "No",
          checked: false,
        },
      ],
    },
  ])
  .then(async (answers) => {
    if (answers.moreThings === true) {
      await inquirer.prompt({
        type: "input",
        name: "more",
        message: "Que quieres pesao?",
      });
    } else if (answers.moreThings === false) {
      await inquirer.prompt({
        type: "input",
        name: "noMore",
        message: "Adiós, tu pedido no se va a realizar. Has perdido el tiempo",
      });
    }
  });
