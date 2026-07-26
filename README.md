🔐 Random Password Generator

A modern and responsive password generator built with **React.js** that helps users create secure, customizable passwords instantly. Users can control the password length and choose whether to include uppercase letters, lowercase letters, numbers, and special characters.

 ✨ Features

* 🔐 Generate strong random passwords
* 📏 Adjustable password length
* 🔠 Include uppercase letters
* 🔡 Include lowercase letters
* 🔢 Include numbers
* 🔣 Include special symbols
* ⚡ Instant password regeneration
* 📋 One-click copy to clipboard
* 📱 Responsive UI for desktop and mobile

## 🛠️ Tech Stack

* React.js
* JavaScript
* CSS / Tailwind CSS (if used)
* React Hooks

---

 🚀 Installation

Clone the repository:

```bash
git clone https://github.com/xaniar8996/SecureSho.git
```

Go to the project folder:

```bash
cd password-generator
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

 📁 Project Structure

```
src/
│
├── assets/
├── components/
├── pages/
├── App.tsx
└── main.tsx
```

 ⚙️ How It Works

The application dynamically builds a pool of available characters based on the user's selected options. It then randomly selects characters from that pool until the desired password length is reached.

Whenever the user changes:

* Password length
* Uppercase option
* Lowercase option
* Numbers option
* Symbols option

the password is regenerated automatically using React's `useEffect`.

 📚 Concepts Practiced

* React Hooks
* State Management
* Conditional Logic
* Random Number Generation
* String Manipulation
* Component-Based Architecture
* TypeScript Basics

## 💡 Future Improvements

* Password strength meter
* Exclude similar characters (O, 0, I, l)
* Prevent duplicate characters
* Generate multiple passwords at once
* Save password history
* Dark / Light mode
* Keyboard shortcuts
* Animated UI

## 🤝 Contributing

Contributions, issues, and feature requests are welcome.

---

Made with ❤️ by **Xaniar Naghavian
