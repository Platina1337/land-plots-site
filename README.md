# Land Plots Site

Одностраничный информационный сайт для презентации земельных участков.

## Стек

- **Astro 7** — статическая генерация (SSG)
- **TypeScript** — типизация данных
- **Markdown + YAML** — контент участков без CMS

## Быстрый старт

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # сборка в dist/
npm run preview  # предпросмотр сборки
```

Требуется Node.js 22.19 или новее.

## Настройка перед публикацией

1. Замените название, телефон, email и адрес в `src/data/site.ts`.
2. Скопируйте `.env.example` в `.env` и заполните:
   - `SITE_URL` — будущий адрес сайта;
   - `PUBLIC_FORM_ENDPOINT` — endpoint Formspree (необязательно);
   - `PUBLIC_YANDEX_METRIKA_ID` — ID Метрики (необязательно).
3. Замените домен в `public/robots.txt`.
4. Добавьте реальные участки и фотографии.

## Документация

Подробный план проекта, модель данных и этапы — в [PROJECT_PLAN.md](./PROJECT_PLAN.md).

## Добавление участка

1. Создайте файл `src/content/plots/my-plot.md` по схеме из `PROJECT_PLAN.md`.
2. Добавьте фото в `public/images/plots/`.
3. Пересоберите сайт.

Для каждого опубликованного участка Astro автоматически создаст страницу
`/plots/<имя-файла>`, карточку и маркер на карте.

## Деплой

Workflow `.github/workflows/deploy.yml` собирает проект и публикует его в
GitHub Pages после push в `main`. Переменные задаются в GitHub:
**Settings → Secrets and variables → Actions → Variables**.

## Лицензия

Private.
