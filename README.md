🚧 Work in Progress

**MoviesTracker** is a personal portfolio project for tracking movies and TV shows across different watch states such as watched, want to watch, or stopped. Titles can be rated using a 5-star rating system.

The application is built with [**NestJS**](https://nestjs.com/) and follows a modular architecture focused on scalability, testability, and clear separation of concerns. Data persistence is handled using [**TypeORM**](https://typeorm.io/) with a [**MySQL**](https://www.mysql.com/) database. The API is designed to be consumed by the [**MoviesTracker frontend**](https://github.com/NLav/MoviesTracker).

The codebase follows clean code principles and emphasizes maintainability and consistency, supported by [**ESLint**](https://eslint.org/) and [**Prettier**](https://prettier.io/) to enforce code quality and formatting standards.

## Running locally

Install dependencies:

```
npm install
```

Start the database and run migrations:

```
docker compose up -d
npm run typeorm:migration:run
npm run typeorm:seed # optional
```

Start the development server:

```
npm run start:dev
```
