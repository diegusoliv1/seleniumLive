
//Declaro o Builder que fara nossa execução do selenium webdriver.
const {Builder, By, Key, util} = require("selenium-webdriver")
async function minicursoRamper(){

    //Declarando o navegador 
    let driver = await new Builder().forBrowser("firefox").build();

    // actions Para ações com o botão do mouse
    const actions = driver.actions({async: true});

    //Ramper
    //passando a informação para o navegador.
    await driver.get("http://localhost:5500/#/login");
    await driver.sleep(3000)
    console.log("Abri o navegador");

    // login
    await driver.findElement(By.id("email")).sendKeys("diego.oliveira@ramper.com.br", Key.RETURN);
    // await driver.sleep(1000)
    console.log("Inseri o e-mail");

    //Senha
    await driver.findElement(By.id("password")).sendKeys("123", Key.RETURN);
    await driver.sleep(1000);

    //Buscando o item dropdown do menu
    const dropProspectar = await driver.findElement(By.id("dropProspectar"));

    await actions.doubleClick(dropProspectar).perform();
    await driver.sleep(1000);

    const dropContatos =  driver.findElement(By.xpath("/html/body/div[4]/ng-controller/nav/div/div[1]/ul/li[2]/span/ul/li[1]/a/div[2]/div[1]/span"));
    await actions.doubleClick(dropContatos).perform();
    await driver.sleep(1000);

    const btContatosNew = driver.findElement(By.xpath("/html/body/div[4]/div/div[1]/div[1]/div/div/div/div[2]/div/div[2]/button"));
    await actions.doubleClick(btContatosNew).perform();
    await driver.sleep(1000);
    
    const btContatoManual = driver.findElement(By.xpath("/html/body/div[4]/div/div[1]/div[4]/div/div/div[2]/div/img"));
    
    await actions.doubleClick(btContatoManual).perform();
    await driver.sleep(1000);
    
    // Google
    // abro o navegador
    // await driver.get("http://google.com");
    // await driver.sleep(1000);
    // console.log("Abri o navegador");

    // await driver.findElement(By.name("q")).sendKeys("Ramper", Key.RETURN);
    // driver.sleep(3000);

    // driver.quit();

}

minicursoRamper();