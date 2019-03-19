# ExchangeRate

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

นี่จะเป็นการเข้าถึง bot API ของทางธนาคารแห่งประเทศไทย โดยเขียนด้วย Javascript และใช้ angular ดึงไปใช้

คุณสามารถเข้าดูอัตราการแลกเปลี่ยนเงินตราของแต่ละประเทศได้ โดยทำตามวิธีการติดตั้งด้านบน แล้วก็เข้าไปแก้ไข Code ที่หน้า index.html แล้วแก้ตรงส่วน
<script type="text/javascript" src="/assets/function.js?ClientId=yourClientId"></script>
โดย yourClientId สามารถไปสมัคร และรับได้ที่เว็บของธนาคารแห่งประเทศไทย โดยทำตาม Getting started ในเว็บ https://apiportal.bot.or.th/bot/public/
