# GULP 2022 / **gulp-4** / *gulpjs*

Сборка *Gulp* из разных источников. Тип *commonjs*

## **Что должен быть установлен на компьютере изначально?**
1. Програмная платформа [Node.js](https://nodejs.org/en/)
2. Утилита командной строки для *Gulp* [gulp-cli](https://www.npmjs.com/package/gulp-cli)
3. Система управления версиями [Git](https://git-scm.com/)
4. Редактор кода [Visual Studio Code](https://code.visualstudio.com/)
   - Плагин редактора кода [Path Autocomplete](https://marketplace.visualstudio.com/items?itemName=ionutvmi.path-autocomplete)

### *Настройка плагина __Path Autocomplete__*
- В редакторе кода зажимаем сочетание клавиш `CTRL+SHIFT+P` или `F1`
- В строке поиска вводим: **Open Settings**
- Выбираем **Preferences: Open Settings (JSON)** (*Параметры: Открыть параметры (JSON)*)
- Открывается *settings.json*

**Настройка:**
```json
{
	"path-autocomplete.pathMappings": {
		"@img": "${folder}/src/img",
	}
}
```
Если файл не пустой, пишем только код настройки (без фигурных скобок на первой и последней строке):
```json
"path-autocomplete.pathMappings": {
	"@img": "${folder}/src/img",
}
```
#### *Пример использования плагина __Path Autocomplete__*
В любой вложенности папок путь к картинке начинается с помощью `@img/`:
1. HTML
```html
<img src="@img/logo.png" alt="Logo" width="150" height="50">
```
Получаем на выходе:
```html
<img src="img/logo.png" alt="Logo" width="150" height="50">
```
2. SCSS
```scss
body {
	background: url("@img/bg.png") center / cover no-repeat;
}
```
Получаем на выходе:
```scss
body {
	background: url("../img/bg.png") center / cover no-repeat;
}
```

## **Как начать использовать сборку?**
Скачать [архив](https://github.com/javidrashkhansoi/gulp-2022/archive/refs/heads/main.zip) и разархивировать, либо в командной строке написать команду:
```bash
git clone https://github.com/javidrashkhansoi/gulp-2022.git
```
После разархивации открываем папку в терминале и вводим команду:
```bash
npm i
```

## **С какими расширениями файлов работает сборщик?**
- Разметка: *.html*
- Стили: *.scss*
- JavaScript: *.js*
- Изображения: *.jpg*, *.jpeg*, *.png*, *.webp*, *.svg*, *.ico*, *.gif*
- Шрифты: *.otf*, *.ttf*, *.eot*, *.otc*, *.ttc*, *.svg*, *.woff*, *.woff2*

### *Какая должна быть структура файлов?*
```
project-name - |
               | - gulpfile.js  - |
                                  | - config  - | (Конфигурационные файлы)
                                                | -- app.js     -- (Настройки разных плагинов)
                                                | -- path.js    -- (Настройки путей)
                                  | - data    - | (JSON файлы для добавления в разметку)
                                  | - task    - | (Файлы задач)
                                                | -- clear.js   -- (Задача очистки папки назначения)
                                                | -- font.js    -- (Задача для обработки шрифтов)
                                                | -- html.js    -- (Задача для обработки HTML файлов)
                                                | -- img.js     -- (Задача для обработки изображений)
                                                | -- js.js      -- (Задача для обработки JavaScript файлов)
                                                | -- scss.js    -- (Задача для обработки SCSS файлов)
                                                | -- server.js  -- (Задача обновления браузера)
                                  | -- index.js -- (Основной Gulp файл)
               | - src          - |
                                  | - font    - | (Файлы шрифтов)
                                  | - html    - | (HTML файлы)
                                                | - chunk       - (Папка для подключаемых разметок)
                                                | -- index.html
                                                | -- (Другие основные HTML файлы)
                                  | - img     - | (Файлы иображений)
                                  | - js      - | (JavaScript файлы)
                                                | - module      - (Папка для подключаемых скриптов)
                                                | -- script.js  -- (Основной JavaScript файл)
                                  | - scss    - | (SCSS файлы)
                                                | - block       - (Папка для подключаемых стилей)
                                                | -- style.scss -- (основной SCSS файл)
               | -- package.json  -- (Настройки проекта и Gulp)
```
- После команды `npm i` в корне проекта создаются папка *node_modules* и файл *package-lock.json*
- После команды `npm start` или `npm run build` в корне проекта создаются папка с названием проекта и обработанные файлы внутри этой папки
- После обработки HTML файла в папке **gulpfile.js** создается файл *version.json*

## **Как начать сборку в режиме разработчика?**
Сборка в режиме разработчика начинается командой:
```bash
npm start
```
### *Что происходит в режиме разработки?*
1. Удаляется путь назначения файлов (если он есть)
2. Обрабатываются файлы HTML, SCSS, JavaScript, изображения, шрифты
3. Начинается отслежка файлов (кроме шрифтов)
4. Открывается браузер и обновляется при каждом изменении в файлах (после сохранения изменений)
### *Как обработать шрифты?*
Шрифты обрабатываются командой:
```bash
gulp font
```
#### *Как обрабатываются шрифты?*
- Проверяется, новые ли шрифты (кроме *.ttf* и *.woff2* файлов)
- Конвертируются в *.ttf* файл
- Вставляются в исходную папку
- *.ttf* файлы проверяются, новые ли они
- Конвертируются в *.woff2* файл
- Вставляются в путь назначения
- *.woff2* файлы проверяются, новые ли они
- Копируются в путь назначения
### *Как происходит обработка файлов в режиме разработки?*
Для всех задач есть обработчик ошибок. Если будет ошибка, с помощью уведомления подскажет, в каком файле допушена ошибка
1. HTML
    - Подключаются другие блоки кода, если они есть
    - В начале путей к картинкам `@img/` меняется на `img/`
    - Создается файл с указанным именем в пути назначения
2. SCSS
    - В начале путей к картинкам `@img/` меняется на `../img/`
    - Компилируется в CSS
    - Добавляется суффикс *.min*
    - Создается файл *style.min.css* в пути назначения
3. JavaScript
    - Код обрабатывает *Webpack*
    - Создается файл *script.min.js* в пути назначения
4. Изображения
    - Проверяется, новые ли изображения (кроме SVG файлов)
    - Копируются в путь назначения
    - Проверяется, новый ли SVG файл
    - Копируется в путь назначения
### *Как остановить работу в режиме разработчика?*
Отслежка файлов приостановливается сочитанием клавиш `CTRL+C`

## **Сборка в режиме _"production"_**
Сборка в режиме _"production"_ начинается командой:
```bash
npm run build
```

### *Что происходит в режиме "production"?*
1. Удаляется путь назначения файлов (если он есть)
2. Обрабатываются файлы HTML, SCSS, JavaScript, изображения, шрифты

### *Что допольнительного происходит с файлами в режиме __"production"__?*
1. HTML
    - Строится конструкция `picture > source`
    - В терминале показывается размер до сжатия файла
    - Сжимается файл
    - В терминале показывается размер после сжатия файла
    - К тегам `<a>` добавляется атрибут `tabindex="-1"`
    - К путям стилей и скриптов добавляется версии
2. SCSS
    - Добавляются *.webp* форматы изображений
    - Добавляются вендорные префиксы
    - В терминале показывается размер до сжатия файла
    - Объединяются медиазапросы
    - Объединяются общие свойства
    - Вставляется в путь назначения без суффикса
    - Сжимается файл
    - В терминале показывается размер после сжатия файла
3. JavaScript
    - *Babel* делает код кроссбраузерным
    - Сжимается файл
4. Изображения
    - Конвертируются в формат `.webp`
    - Вставляются в путь назначения
    - Проверяется, новые ли изображения (кроме SVG файлов)
    - Сжимаются

### *Как определить, поддерживает ли браузер _.webp_ изображения?*
Поддержка браузером _.webp_ изображений определяется следующим JavaScript кодом:
```js
function testWebp(cb) {
	const webp = new Image();
	webp.onload = webp.onerror = function () {
		cb(web.height == 2);
	};
	webp.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebp(function (support) {
	const isWebp = support === true ? "webp" : "no-webp";
	document.documentElement.classList.add(isWebp);
});
```
Если браузер поддерживает формат *.webp*, к тегу `<html>` добавится класс *webp*, а если нет, то класс *no-webp*

## **Из-за чего могут возникнуть ошибки?**
- Не дайте проекту название *gulp*
- Не назовите файлы кириллицей
- Не используйте пробелы в названиях
- Тег `<img>` пишите в одну строку




## **Какие есть еще команды?**
Для обработки HTML файлов:
```bash
gulp html
```
Для обработки SCSS файлов:
```bash
gulp scss
```
Для обработки JavaScript файлов:
```bash
gulp js
```
Для обработки изображений:
```bash
gulp img
```

## **Какие файлы можно удалять после завершения проекта?**
После завершения проекта можно удалять папку *node_modules* и файл *package-lock.json*

## **Какие пакеты используются?**

|Название пакета|Ссылка на npm-пакет|Ссылка на git-репозиторий|Ссылка на официальный сайт|
|:--------------|:-----------------:|:-----------------------:|:------------------------:|
|gulp|[npm][1]|[git][2]|[gulpjs.com][3]|
|gulp-autoprefixer|[npm][4]|[git][5]|-|
|gulp-babel|[npm][6]|[git][7]|-|
|gulp-csso|[npm][8]|[git][9]|-|
|gulp-file-include|[npm][10]|[git][11]|-|
|gulp-fonter|[npm][12]|[git][13]|-|
|gulp-group-css-media-queries|[npm][14]|[git][15]|-|
|gulp-htmlmin|[npm][16]|[git][17]|-|
|gulp-if|[npm][18]|[git][19]|-|
|gulp-imagemin|[npm][20]|[git][21]|-|
|gulp-load-plugins|[npm][22]|[git][23]|-|
|gulp-newer|[npm][24]|[git][25]|-|
|gulp-notify|[npm][26]|[git][27]|-|
|gulp-plumber|[npm][28]|[git][29]|-|
|gulp-rename|[npm][30]|[git][31]|-|
|gulp-replace|[npm][32]|[git][33]|-|
|gulp-sass|[npm][34]|[git][35]|-|
|gulp-shorthand|[npm][36]|[git][37]|-|
|gulp-size|[npm][38]|[git][39]|-|
|gulp-ttf2woff2|[npm][40]|[git][41]|-|
|gulp-version-number|[npm][42]|[git][43]|-|
|gulp-webp|[npm][44]|[git][45]|-|
|gulp-webp-html-nosvg|[npm][46]|[git][47]|-|
|gulp-webpcss|[npm][48]|[git][49]|-|
|@babel/core|[npm][50]|[git][51]|[babel.dev/docs/en/babel-core][52]|
|@babel/preset-env|[npm][53]|-|[babel.dev/docs/en/babel-preset-env][54]|
|@babel/register|[npm][55]|-|[babel.dev/docs/en/babel-register][56]|
|browser-sync|[npm][57]|[git][58]|[browsersync.io][59]|
|del|[npm][60]|[git][61]|-|
|require-dir|[npm][62]|[git][63]|-|
|sass|[npm][64]|[git][65]|-|
|webp-converter|[npm][66]|[git][67]|-|
|webpack-stream|[npm][68]|[git][69]|-|

[1]: https://www.npmjs.com/package/gulp
[2]: https://github.com/gulpjs/gulp
[3]: https://gulpjs.com/
[4]: https://www.npmjs.com/package/gulp-autoprefixer
[5]: https://github.com/sindresorhus/gulp-autoprefixer
[6]: https://www.npmjs.com/package/gulp-babel
[7]: https://github.com/babel/gulp-babel
[8]: https://www.npmjs.com/package/gulp-csso
[9]: https://github.com/ben-eb/gulp-csso
[10]: https://www.npmjs.com/package/gulp-file-include
[11]: https://github.com/haoxins/gulp-file-include
[12]: https://www.npmjs.com/package/gulp-fonter
[13]: https://github.com/Mazgrze/gulp-fonter
[14]: https://www.npmjs.com/package/gulp-group-css-media-queries
[15]: https://github.com/avaly/gulp-group-css-media-queries
[16]: https://www.npmjs.com/package/gulp-htmlmin
[17]: https://github.com/jonschlinkert/gulp-htmlmin
[18]: https://www.npmjs.com/package/gulp-if
[19]: https://github.com/robrich/gulp-if
[20]: https://www.npmjs.com/package/gulp-imagemin
[21]: https://github.com/sindresorhus/gulp-imagemin
[22]: https://www.npmjs.com/package/gulp-load-plugins
[23]: https://github.com/jackfranklin/gulp-load-plugins
[24]: https://www.npmjs.com/package/gulp-newer
[25]: https://github.com/tschaub/gulp-newer
[26]: https://www.npmjs.com/package/gulp-notify
[27]: https://github.com/mikaelbr/gulp-notify
[28]: https://www.npmjs.com/package/gulp-plumber
[29]: https://github.com/floatdrop/gulp-plumber
[30]: https://www.npmjs.com/package/gulp-rename
[31]: https://github.com/hparra/gulp-rename
[32]: https://www.npmjs.com/package/gulp-replace
[33]: https://github.com/lazd/gulp-replace
[34]: https://www.npmjs.com/package/gulp-sass
[35]: https://github.com/dlmanning/gulp-sass
[36]: https://www.npmjs.com/package/gulp-shorthand
[37]: https://github.com/kevva/gulp-shorthand
[38]: https://www.npmjs.com/package/gulp-size
[39]: https://github.com/sindresorhus/gulp-size
[40]: https://www.npmjs.com/package/gulp-ttf2woff2
[41]: https://github.com/nfroidure/gulp-ttf2woff2
[42]: https://www.npmjs.com/package/gulp-version-number
[43]: https://github.com/shinate/gulp-version-number
[44]: https://www.npmjs.com/package/gulp-webp
[45]: https://github.com/sindresorhus/gulp-webp
[46]: https://www.npmjs.com/package/gulp-webp-html-nosvg
[47]: https://github.com/FreelancerLifeStyle/gulp-webp-html-nosvg
[48]: https://www.npmjs.com/package/gulp-webpcss
[49]: https://github.com/lexich/gulp-webpcss
[50]: https://www.npmjs.com/package/@babel/core
[51]: https://github.com/babel/babel
[52]: https://babel.dev/docs/en/babel-core
[53]: https://www.npmjs.com/package/@babel/preset-env
[54]: https://babel.dev/docs/en/babel-preset-env
[55]: https://www.npmjs.com/package/@babel/register
[56]: https://babel.dev/docs/en/babel-register
[57]: https://www.npmjs.com/package/browser-sync
[58]: https://github.com/BrowserSync/browser-sync
[59]: https://browsersync.io/
[60]: https://www.npmjs.com/package/del
[61]: https://github.com/sindresorhus/del
[62]: https://www.npmjs.com/package/require-dir
[63]: https://github.com/aseemk/requireDir
[64]: https://www.npmjs.com/package/sass
[65]: https://github.com/sass/dart-sass
[66]: https://www.npmjs.com/package/webp-converter
[67]: https://github.com/scionoftech/webp-converter
[68]: https://www.npmjs.com/package/webpack-stream
[69]: https://github.com/shama/webpack-stream

