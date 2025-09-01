# Notes-App-with-local-storage

🚀 Features
➕ Add new notes
🗑️ Delete notes
💾 Notes are saved in localStorage
🔄 Notes persist after page reload
🖥️ No backend required (works offline)

#Project structure
📁 Notes-App
 ┣ 📄 index.html   # Main HTML file
 ┣ 📄 style.css    # Styling file
 ┣ 📄 script.js    # JavaScript (localStorage logic)
 ┗ 📄 README.md 

 ⚙️ How It Works
✍️ User types a note in the input field and clicks Add Note.
🗂️ The note is saved in localStorage using localStorage.setItem().
📋 Notes are retrieved with localStorage.getItem() and displayed on the page.
🗑️ User can delete a note → it is removed from localStorage and UI updates.

🧑‍💻 Technologies Used
HTML5
CSS3
JavaScript (ES6)
localStorage API
