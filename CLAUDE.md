# SuVerse Labs Site

## Контекст
- Сайт-портфолио для визового кейса O-1/EB-1 (extraordinary ability)
- Должен демонстрировать влияние на национальные интересы США (AI, clean energy, freight)
- React 18 + TypeScript + Vite 5 + Express.js + Tailwind + shadcn/ui
- Роутинг: wouter (SPA)
- Контент захардкожен в client/src/data/ (posts.ts, projects.ts, nav.ts)

## Проекты (7)
- PingPoint — AI freight tracking (demo: telematics.suverse.io)
- Fleet & Carbon Dashboard — мониторинг флота и CO2
- Carbon Vault — REC marketplace, углеродные кредиты
- AgentOS — AI-агенты для логистики (demo: agentos.suverse.io)
- LaunchLoop — B2B marketplace для продвижения tech-продуктов через creators
- Validator & DePIN — нодa-валидаторы блокчейнов
- Tax Credit — маркетплейс налоговых кредитов (demo: app.suverse.io)

## Домены
- suverse.io — основной сайт (nginx → статика + API :3000)
- agentos.suverse.io → :5000 (AgentOS, systemd)
- telematics.suverse.io → :8080 (PingPoint, Docker)

## Деплой
```bash
cd /opt/suverse-site
npm run build
cp -r dist/* /var/www/suverse.io/
```
Backend (контактная форма): PORT=3000 node /var/www/suverse.io/index.cjs

## Важно при написании контента
- Упоминать US national interests: EPA, DOE, DOT, FMCSA, IRA, Bipartisan Infrastructure Law
- Новости должны быть свежими и профессиональными, с конкретными данными
- Позиционирование: AI & Blockchain Infrastructure for Sustainable Transportation
- Контактная форма отправляет в Telegram + email через Resend

## Структура
- client/src/data/ — весь контент (posts.ts, projects.ts)
- client/src/pages/ — страницы (Home, About, Founder, Projects, Technology, etc.)
- client/src/pages/projects/ — отдельные страницы проектов
- client/src/components/ — layout (Header, Footer), shared (ProjectCard, NewsCard), ui (shadcn)
- server/ — Express backend (routes.ts = POST /api/contact)
- .env — Telegram bot token + chat ID
