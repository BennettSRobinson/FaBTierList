# 🦸 Flesh and Blood Tier List – Full Stack App

This project is a **Flesh and Blood Tier List Application** built with:

- **Frontend:** Angular + Apollo Client (GraphQL)
- **Backend:** Node.js + GraphQL + TypeORM + MySQL
- **Purpose:** Creating a Tier list for each year the TCG has been around on talishar. This app takes data from September 2022 - Present and provides the tier list per month.

---

## 📦 Tech Stack

### Frontend
- Angular 16+
- Angular Material
- RxJS
- TypeScript

### Backend
- Node.js (TypeScript)
- Apollo Server (GraphQL)
- TypeORM (MySQL)
- bcrypt (password hashing)
- dotenv (environment variables)

---

## 🚀 Getting Started

### 1️⃣ Clone Repository
```bash
git clone https://github.com/yourusername/FaBTierList.git
cd FabTierList
```
### Install Dependicies
```bash
npm install
```

### Configure Environment variables
Update environment.ts and environment.prod.ts with your GraphQL API URL:
```ts
export const environment = {
  production: false,
  apiEndpoint: 'http://localhost:4000/graphql'
};
```
### Run Application
```bash
npm start
```

## Back End
- clone the backend at https://github.com/BennettSRobinson/FaBTierList-server
- install dependencies
- run server

## Alternative
The application also has been fully deployed at https://fabtierlist.netlify.app
- Since I am using a free backend service the app can go idle so please wait at least a minute for the data to return

## Future
- creating a landing page with the nerd info and documentation on what the site is used for
- updating how the tiers work in regards to the heroes win rate
- Allow users to click a hero to view its specific matchups and see its tier ranking.


