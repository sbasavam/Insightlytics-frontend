# Insightlytics Frontend

Thank you for reviewing my React frontend implementation.  
This is a responsive analytics dashboard that connects seamlessly to the Insightlytics backend API.

## Features

- JWT-based authentication (login and registration)
- Dynamic data visualization using Chart.js
- Responsive dashboard UI using Tailwind CSS
- Axios-based API integration
- React Hook Form for form handling and validation

## Prerequisites

- Node.js v16 or higher
- npm v8+ or Yarn

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/sbasavam/Insightlytics-frontend.git
cd Insightlytics-frontend


2. Install dependencies

npm install
# or
yarn install


3. Configure environment
Create a .env file in the project root:

VITE_API_URL=https://insightlytics-backend.onrender.com/api  ##for Production

VITE_API_URL=http://localhost:5000/api ##for local


4. Run the development server

npm run dev
# or
yarn dev


Project Structure
src/
│
├── assets/         # Static assets like images and icons
├── components/     # Reusable UI components (charts, cards, layout)
├── context/        # React context providers (e.g., auth context)
├── pages/          # Top-level route pages (Login, Register, Dashboard)
├── services/       # API service layer (Axios instance and endpoints)
├── App.jsx         # Root application component with routes
└── main.jsx        # Entry point to initialize the app


API Integration
This frontend communicates with the Insightlytics backend deployed on Render:
Base API URL: https://insightlytics-backend.onrender.com/api


For questions or feedback, contact:
sanganabasavam1999@gmail.com