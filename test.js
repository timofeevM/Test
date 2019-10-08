var wd = require('selenium-webdriver');
var assert = require('assert');

var SELENIUM_HOST = 'http://localhost:4444/wd/hub';
var URL = 'http://www.yandex.ru';

var client = new wd.Builder()
   .usingServer(SELENIUM_HOST)
   .withCapabilities({ browserName: 'firefox' })
   .build();

client.get(URL).then(function() {
    client.findElement({ name: 'text' }).sendKeys('test');
    setTimeout(function(){
	client.findElement({ css: '.suggest2-form__button' }).click();
    }, 2000);
    setTimeout(function(){
	client.getTitle().then(function(title) {
	str = "test Ч яндекс: ничего не найдено";
	assert.ok(title.length > str.length, 'Ќичего не нашлось :(');
    });
    }, 4000);
    	
});