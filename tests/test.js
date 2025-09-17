const {Builder, By, Key, until} = require ("selenium-webdriver");
const { Options } = require('selenium-webdriver/chrome');
const assert = require ('assert');

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function example(){
    const options = new Options();
    options.addArguments('--disable-gpu')

    let driver = await new Builder().forBrowser("chrome").setChromeOptions(options).build();

    try{
        await driver.get("https://lambdatest.github.io/sample-todo-app/")
        await driver.wait(until.elementsLocated(By.css('ul.list-unstyled li')), 10000);
        await driver.findElement(By.id("sampletodotext")).sendKeys("Learn Selenium", Key.RETURN)
        let boxes = await driver.findElements(By.css("ul.list-unstyled li"))

        console.log('tantos elementos de lista:',boxes.length);
        
        for (let i=0; i<boxes.length; i++){
            const btext = await boxes[i].getText()
            console.log('the item',i,'has the text:',btext)
            //console.log('the item',i,'has the text:', await boxes[i].findElement(By.css("span")).getText())
            if(btext == "Learn Selenium"){
                await boxes[i].findElement(By.css("input")).click()
            }
            
        }
        let title = await driver.getTitle()
        assert.equal(title,"Modern To-Do App | LambdaTest", "Title does not")
        
        setTimeout(() => {},2000)
    }
    finally{
        await driver.quit()
    }
    


    //await driver.quit()
}

example()