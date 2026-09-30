import { remote } from 'webdriverio';
const capabilities = {
    platformName: 'Android',
    'appium:automationName': 'UiAutomator2',
    'appium:appPackage': 'com.freegames.apuestatotal',
    'appium:autoGrantPermissions': true,
    'appium:noReset': true
};
const wdOpts = {
    hostname: 'localhost',
    port: 4723,
    path: '/',
    capabilities
};
async function runTest() {
    console.log(' Conectando a la app...');
    const driver = await remote(wdOpts);
    try {
        console.log(' Esperando botón "Ingresar"...');
        // Buscamos el elemento con UiSelector
        const btnIngresar = await driver.$('android=new UiSelector().text("Ingresar")');
        
        await btnIngresar.waitForDisplayed({ timeout: 15000 });
        console.log(' Botón encontrado. Haciendo clic...');
        await btnIngresar.click();
        // Pausa de 3 segundos para ver el resultado de la pantalla siguiente
        await driver.pause(3000);
        console.log(' Clic realizado con éxito.');
    } catch (error) {
        console.error('❌ Error en el test:', error);
    } finally {
        await driver.deleteSession();
        console.log('🏁 Sesión finalizada.');
    }
}
runTest();