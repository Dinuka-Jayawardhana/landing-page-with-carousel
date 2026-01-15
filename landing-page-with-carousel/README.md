# 🍔 Burger Heaven Landing Page

A modern, responsive landing page featuring a stunning 3D coverflow carousel. Built with **React**, **Vite**, and **Swiper**.

## ✨ Features

- **Interactive 3D Carousel**: Powered by Swiper.js with a coverflow effect.
- **Responsive Design**: Fully responsive layout that adapts to mobile, tablet, and desktop screens.
- **Auto-play**: Automatically cycles through delicious burger options.
- **Dynamic Content**: Menu items are loaded dynamically from a JSON file, making updates easy.
- **Modern UI**: Clean, polished aesthetic with "Burger Heaven" branding and call-to-action buttons.

## 🛠️ Tech Stack

- **[React](https://react.dev/)**: Frontend library for building the user interface.
- **[Vite](https://vitejs.dev/)**: Next-generation frontend tooling for fast development and building.
- **[Swiper](https://swiperjs.com/)**: Modern mobile touch slider for hardware-accelerated transitions.
- **CSS3**: Custom styling for layout and detailed animations.

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/Dinuka-Jayawardhana/landing-page-with-carousel.git
    cd landing-page-with-carousel
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start the development server**
    ```bash
    npm run dev
    ```
    The application will actiated at `http://localhost:5173`.

4.  **Build for production**
    ```bash
    npm run build
    ```

## 📂 Project Structure

```
landing-page-with-carousel/
├── public/              # Static assets
├── src/
│   ├── assets/          # Project images and icons
│   ├── Carousel/        # Carousel component specific files
│   │   ├── Carousel.jsx # Main carousel component logic
│   │   ├── Carousel.css # Carousel styling
│   │   └── data.json    # Data source for carousel items
│   ├── App.jsx          # Main application component
│   ├── App.css          # Global application styles
│   ├── main.jsx         # Application entry point
│   └── index.css        # Base styles
├── package.json         # Project dependencies and scripts
└── vite.config.js       # Vite configuration
```

## 📜 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
