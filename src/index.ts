import inquirer from "inquirer";
import chalk from "chalk";

const welcome = async (): Promise<void> => {
  console.log(`
    ${chalk.red("Bienvenido a The Food Delivery")}`);

  console.log(`
    ${chalk.green(
      `Puedes escoger entre 4 platos diferentes en cada tipo de comida.
      Debes responder todas las preguntas. 
      `
    )}
    
  `);
};

const firstQuestions = async (): Promise<void> => {
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
    .then(async (answers): Promise<void> => {
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
};

const questions2 = async (): Promise<void> => {
  await inquirer
    .prompt([
      {
        type: "input",
        name: "bebida",
        message: "Quieres añadir bebida? Escribe tu respuesta",
      },
      {
        type: "list",
        name: "moreThings",
        message: "Alguna cosa más?",
        choices: ["Si", "No"],
      },
    ])
    .then(async (answers): Promise<void> => {
      if (answers.moreThings === "Si") {
        await inquirer.prompt({
          type: "input",
          name: "more",
          message: "Ni de coña. Adiós",
        });
      } else if (answers.moreThings === "No") {
        await inquirer.prompt({
          type: "input",
          name: "noMore",
          message:
            "Adiós, tu pedido no se va a realizar. Has perdido el tiempo.",
        });
      }
    });
};

await welcome();
await firstQuestions();
await questions2();
