# Files App Frontend

📂 Welcome to the Files App Frontend repository! This is a web application built with React.js that allows users to upload and search files. It also includes an admin dashboard feature for moderation.

## Features

1. ✅ User Authentication: Create your own account to access the app's features.
2. 📥 File Upload: Easily upload your files to the app.
3. 🔍 File Search: Search for files uploaded by other users.
4. 🚀 Admin Dashboard: Access the admin dashboard to moderate the application.

## Technologies Used

1. 🔧 React.js - A JavaScript library for building user interfaces.
2. 🎨 CSS - Cascading Style Sheets for styling the application.
3. 💻 HTML - Hypertext Markup Language for structuring the web pages.
4. 🔧 TypeScript - A typed superset of JavaScript that compiles to plain JavaScript.
5. 🚀 Nest.js - A progressive Node.js framework for building efficient and scalable server-side applications.
6. 🗄️ MongoDB - A NoSQL database for storing and retrieving data.
7. 🔍 Atlas Search - A search functionality provided by MongoDB Atlas.
 
## Getting Started

🛠️ To get started with the Files App, follow these steps:

  ### Backend:
  1. Clone repo https://github.com/creend/Files-App-Backend
  2. `npm install`
  3. Crete .env file
  4. In .env set `SECRET_TOKEN=YOUR SECRET TOKEN`
  5. In .env set `DATABASE_URL=YOUR MONGO DB DATABASE URL`
  6. In mongodb cloud configure atlas search
  7. First index's name is "default" and indexed fields are dynamic
  8. Second index's name is "autocomplete" and indexed field is "title"
  https://www.youtube.com/watch?v=3IDlOI0D8-8&t=897s (Full autocomplete mongodb guide)
  9. `npm run start:dev`

  ### Frontend:

  1. Clone repo https://github.com/creend/Files-App-Frontend
  2. `npm install`
  3. `npm run dev`

🌟 Congratulations! You now have the Files App Frontend up and running locally.

## License

📝 This project is licensed under the [MIT License](LICENSE).

## Contact

📬 For any inquiries or feedback, please reach out to the project maintainer:

👤 Creend

📧 Email: creend42@gmail.com

💼 GitHub: [@creend](https://github.com/creend)
