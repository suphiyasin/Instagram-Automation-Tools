import puppeteer from 'puppeteer';
import path from 'path';
import nodemailer from 'nodemailer';
import { fileURLToPath } from 'url';
import fs from 'fs';
const KADI = process.argv[2]; 
const pw = process.argv[3]; 

if (!KADI) {
  console.error('Kullancı adı bulunadmı . Lütfen komutun sonuna kullanıcı adını ekleyin.');
  process.exit(1); 
}

if (!pw) {
  console.error('şifre bulunamadı bulunamadı. Lütfen komutun sonuna şifre ekleyin.');
  process.exit(1); 
}




(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto('https://www.instagram.com');
  
  // Kullanıcı adı alanının yüklenmesini bekleyin
  await page.waitForSelector('input[name="username"]');
  await page.type('input[name="username"]', KADI);

  // Parola alanının yüklenmesini bekleyin
  await page.waitForSelector('input[name="password"]');
  await page.type('input[name="password"]', pw);

  await page.click('button[type="submit"]');
  await page.waitForNavigation();

  const cookies = await page.cookies();
  console.log('Çerezler:', cookies);

  fs.writeFileSync('./Hesaplar/cookies.json', JSON.stringify(cookies));
  
  await browser.close();
})();
