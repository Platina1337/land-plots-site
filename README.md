# Land Plots Site

Одностраничный информационный сайт для презентации земельных участков.

## Стек

- **Astro 5** — статическая генерация (SSG)
- **TypeScript** — типизация данных
- **Markdown + YAML** — контент участков без CMS

## Быстрый старт

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # сборка в dist/
npm run preview  # предпросмотр сборки
```

## Документация

Подробный план проекта, модель данных и этапы — в [PROJECT_PLAN.md](./PROJECT_PLAN.md).

## Добавление участка

1. Создайте файл `src/content/plots/my-plot.md` по схеме из `PROJECT_PLAN.md`.
2. Добавьте фото в `public/images/plots/`.
3. Пересоберите сайт.

## Лицензия

Private.
