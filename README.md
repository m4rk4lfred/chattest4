# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## XAMPP
Set up under htdocs, using xampp-control activate Apache and MYSQL
place under folder name CCIS_CONNECT-master strictly, otherwise change fetch() in Login.jsx and Signup.jsx

## MYSQL 
Run this on MYSQL  
CREATE TABLE IF NOT EXISTS messages (  
  id INT AUTO_INCREMENT PRIMARY KEY,  
  username VARCHAR(255) NOT NULL,  
  content TEXT NOT NULL,  
  timestamp DATETIME NOT NULL  
);  

ALTER TABLE messages ADD COLUMN room VARCHAR(255) NOT NULL DEFAULT 'Dev Circle';  

CREATE TABLE IF NOT EXISTS rooms (  
  id INT AUTO_INCREMENT PRIMARY KEY,  
  name VARCHAR(255) UNIQUE NOT NULL  
);  




## SETUP
-> Change database info in db.php and socketServer.js 
# RUN THESE  
npm run dev  
node src/socketServer.js  
node uploadServer.js



# UPDATED INSTALLED NPM
npm install express multer
npm install multer cors mysql


#IF THIS ERROR OCCUR (SyntaxError: Cannot use import statement outside a module)
- access the package.json then change the type to this -> "type": "module", 

