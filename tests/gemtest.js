const { Builder, By, Key, until } = require('selenium-webdriver');
const { Options } = require('selenium-webdriver/chrome');

// Función asíncrona principal para ejecutar el script
async function main() {
  // Configura las opciones del navegador para que se ejecute en modo headless
  const options = new Options();
  options.addArguments('--headless');
  options.addArguments('--disable-gpu');

  // Inicializa el WebDriver de Chrome
  let driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();
  
  try {
    // Navega a la URL de la aplicación de ejemplo
    await driver.get('https://lambdatest.github.io/sample-todo-app/');

    // Espera a que la lista de elementos 'to-do' sea visible
    await driver.wait(until.elementsLocated(By.css('ul.list-unstyled li')), 10000);

    // Encuentra todos los elementos 'li' de la lista y los guarda en una variable
    const todoItems = await driver.findElements(By.css('ul.list-unstyled li'));
    
    // Imprime la cantidad de elementos encontrados para verificar
    console.log(`Se encontraron ${todoItems.length} elementos en la lista.`);

    // Itera sobre los elementos encontrados e imprime su texto
    for (let i = 0; i < todoItems.length; i++) {
      const itemText = await todoItems[i].getText();
      console.log(`Elemento ${i + 1}: ${itemText}`);
    }

  } finally {
    // Cierra el navegador al finalizar
    await driver.quit();
  }
}

// Llama a la función principal para ejecutar el script
main();

//This comment is added for 'update-files' branch for github