## Koljasha — визитка-ссылки [koljasha.ru](http://koljasha.ru)

Стек: Vite + Tailwind CSS v4 (плагин @tailwindcss/vite).

Команды: `npm run dev` — разработка, `npm run build` — сборка в `dist/`, `npm run preview` — предпросмотр сборки.

## Как запускать

- `npm install` — один раз, ставит зависимости.
- `npm run dev` — разработка с HMR.
- `npm run build` — сборка в `dist/` (в git не коммитится).
- `npm run preview` или `python3 -m http.server -d dist` — просмотр сборки.
- `src/index.html` — ИСХОДНИК-точка входа Vite, а `dist/` — собранный сайт (css/js с хешами + копии `public/`).
- В корне — только конфиги (`vite.config.js`, `package.json`) и docs (`readme.md`, `deploy/`); исходники — в `src/`, статика — в `public/`.
- Открывать `index.html` через `file://` нельзя (модули + неподготовленные ассеты) — только через `dev`/`preview`/http-сервер.

## Деплой на Nginx

1. `npm run build` — собрать сайт в `dist/`.
2. Скопировать СОДЕРЖИМОЕ `dist/` на сервер в `/var/www/koljasha` (например `rsync -av --delete dist/ user@koljasha.ru:/var/www/koljasha/`).
3. Положить `deploy/nginx-koljasha.conf` в `sites-available`, включить симлинком в `sites-enabled`.
4. Проверить `sudo nginx -t`, затем `sudo systemctl reload nginx`.

Почему не `file://`: ES-модули (`type="module"`) и путь `./main.js` блокируются политикой file:// (CORS/пути), плюс в исходнике нет собранных хешированных css/js. Через nginx отдаётся собранный `dist/index.html` с относительными хешированными ассетами и правильными MIME-типами — всё резолвится.
