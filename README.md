# Roman Empire History

A fullstack web application about Roman history, built as a learning project to practice backend and frontend development while learning Roman history.

## Tech stack

- **Backend:** Java, Spring Boot
- **Frontend:** React + Vite
- **Styling:** CSS
- **Routing:** React Router
- **Architecture:** REST API + React client

## Current features

- Browse the main historical periods of Rome
- View detailed pages for each period
- View important events for each period
- View detailed pages for events
- View important historical figures for each period
- View detailed pages for figures
- Global search across periods and events
- Local event search inside each period
- Highlighted search matches
- Filters by period type, event location, and year range

## Project structure

```text
roman-empire-project/
├── backend/
├── frontend/
└── react-frontend/
```

## How to run the project

## Backend
```text
cd backend
mvn spring-boot:run
```

## Frontend
```text
cd react-frontend
npm install
npm run dev
```

## Roman proverbs and quotes

Each entry lives in `backend/src/main/resources/content/proverbs&quotes/<slug>.md`.
The filename determines its URL. The opening HTML comment contains `order` (the
collection/navigation order) and `kind` (the category). The first `#` heading is
the Latin title. Keep the `##` headings for English translation, Author and
attribution, Meaning, Cultural context, Significance and legacy, A note on the
wording, and Sources and further reading: the backend derives the index metadata
from these sections and serves the article through `/api/roman-quotes/{slug}`.
`/api/roman-quotes` returns the ordered index. Add or edit an article and restart
(or rebuild) the backend to load the changes; no frontend content registry is needed.
The frontend uses the same `ArticleRenderer` and article styles as events and figures.
