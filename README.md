# Cyril's Chaats

This is a simple, full-stack web application for a chaat shop's digital menu and order management system. It allows customers to place an order and generates a QR code for payment, while the backend saves all transaction data to a MongoDB database.

## Features ✨

  * **Interactive Frontend**: A clean and responsive menu built with HTML, CSS, and vanilla JavaScript.
  * **Order Management**: Customers can easily add and remove items, with real-time updates to the total bill.
  * **QR Code Payment**: Generates a UPI QR code for a seamless payment process.
  * **Persistent Data Storage**: All transaction details are saved to a MongoDB database via a Node.js backend.
  * **Real-time Insights**: The backend logs transaction data, allowing for future development of a sales dashboard.

## Technology Stack 💻

  * **Frontend**: HTML, CSS, JavaScript
  * **Backend**: Node.js, Express.js
  * **Database**: MongoDB

## How to Run the Application 

Follow these steps to get the application running on your local machine.

### Prerequisites

  * **Node.js**: Make sure you have Node.js and npm installed.
  * **MongoDB**: Ensure that MongoDB Community Server is installed and running on your system.

### 1\. Start the MongoDB Server

Open a terminal and start the `mongod.exe` executable, specifying the port if necessary.

```bash
# Example: Running on default port 27017
"C:\Program Files\MongoDB\Server\8.0\bin\mongod.exe"

# Example: Running on port 27018
"C:\Program Files\MongoDB\Server\8.0\bin\mongod.exe" --port 27018
```

Leave this terminal window open.

### 2\. Set Up the Backend

In a **separate** terminal, navigate to the `server` folder and install the dependencies.

```bash
cd chaat-app/server
npm install
```

After the installation is complete, start the backend server. Make sure the port in `server.js` matches the port you chose for MongoDB.

```bash
node server.js
```

### 3\. Open the Frontend

Now, you can open the `index.html` file in your web browser. You can either double-click the file or use a live server extension in your code editor.

## Project Structure 📂

```
chaat-app/
├── public/
│   ├── images/
│   │   ├── (food images)
│   ├── index.html
│   └── styles.css
├── server/
│   ├── node_modules/
│   ├── server.js
│   └── package.json
├── .gitignore
├── package.json
└── README.md
```

<!--
## Future Enhancements 📈

  * **Real Payment Gateway Integration**: Connect to a live UPI or other payment gateway to process actual transactions. 
  * **Sales Dashboard**: Create a new frontend page to display sales data from the database.
  * **User Authentication**: Implement a login system to restrict access to the dashboard.
  * **Item Management**: Add a feature to allow staff to add, update, or remove menu items from the database directly.  -->
