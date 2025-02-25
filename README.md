
# Geek_Park_Frontend_Project

This project is a content management system developed using **React + Ant Design + MobX + Axios**. It features user authentication, role-based access control, data management, and more. The goal is to provide an efficient and intuitive content management experience.

## 🌟 Features

- **Tech Stack**: React, Ant Design, MobX, Axios
- **State Management**: Uses MobX for global state management to enhance responsiveness.
- **UI Components**: Based on Ant Design for a sleek and user-friendly experience.
- **Role-Based Access Control (RBAC)**: Implements role-based access control for user permissions.
- **Data Visualization**: Integrated ECharts for dynamic data display.
- **API Requests**: Axios is used for API request handling, including request interception and centralized error handling.

## 📂 Project Structure
📦 project-root  
├── 📂 src  
│   ├── 📂 server # json-server 
│   ├── 📂 assets # Static assets (images, styles, etc.)  
│   ├── 📂 components # Reusable components  
│   ├── 📂 pages # Page components  
│   ├── 📂 store # MobX store for state management  
│   ├── 📂 utils # Utility functions and helpers  
├── 📄 package.json # Dependency management  
├── 📄 README.md # Project documentation

## 🚀 Quick Start

### 1️⃣ Install Dependencies

```sh
npm install
```

### 2️⃣ Run the Development Server

```sh
npm run start
```

This will start the application on `http://localhost:3000`.

### 3️⃣ Build for Production

```sh
npm run build
```

### 4️⃣ server

```sh
npm run server
```

## 🔑 Key Features

- **User Authentication/Registration**: JWT-based authentication for secure login and registration.
- **Role Management**: Supports role-based access control (RBAC) for managing user roles and permissions.
- **Permission Management**: Dynamically manages menus and button-level access control based on roles.
- **Content Management**: CRUD operations for content management (create, read, update, delete).
- **Data Visualization**: ECharts integration for visually appealing data charts and graphs.
- **Responsive Layout**: Supports both desktop and mobile devices, ensuring an optimized experience across platforms.

## 📚 Documentation

This section contains further details on the project's structure, components, and how to use the system effectively.
https://www.yuque.com/fechaichai/tzzlh1

1. **Authentication**  
   - JWT is used for user authentication. The login page handles user credentials, and once authenticated, a token is generated and used for subsequent API requests.
   
2. **Role Management & RBAC**  
   - Roles are assigned to users, and each role has specific permissions that determine access to various parts of the system (menus, pages, buttons, etc.).

3. **Components**  
   - Reusable components such as form inputs, tables, modals, etc., can be found in the `components` directory.

4. **API Integration**  
   - All API requests are handled via Axios, and requests are intercepted for authorization and error handling.
   - https://apifox.com/apidoc/shared-fa9274ac-362e-4905-806b-6135df6aa90e/api-32115295

5. **ECharts Integration**  
   - Data visualizations are implemented using ECharts, which enables rich charts like bar, pie, line, etc.

## 🛠️ Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Ant Design**: UI component library for React that follows a clean and modern design.
- **MobX**: State management library for managing global application state.
- **Axios**: Promise-based HTTP client for making requests.
- **ECharts**: JavaScript charting library for data visualization.

