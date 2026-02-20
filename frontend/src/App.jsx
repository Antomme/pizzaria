import { useState, useEffect } from "react";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import WelcomePage from './pages/welcomePage';
import OrderPage from './pages/orderPage';
import SummaryPage from './pages/summaryPage';

/**
 * Main application component.
 * 
 * Manages the global order state, auto-resets it after 15 minutes,
 * and defines routing for Welcome, Order, and Summary pages.
 * If the restaurant is closed, navigates the user back to the WelcomePage.
 * 
 * @returns {JSX.Element} The RouterProvider wrapping the application routes
 */

export default function App() {
  const [order, setOrder] = useState({}); // z.B. { "Margherita": 2 }

  // Auto-Reset nach X Sekunden (z.B. 60s)
  useEffect(() => {
    if (Object.keys(order).length === 0) return; // nichts zu resetten

    const timeout = setTimeout(() => {
      setOrder({});
      console.log("Order auto-reset after timeout!");
    }, 60000 * 15); // 60000ms = 60 Sekunden

    return () => clearTimeout(timeout); // Timer aufräumen bei Änderungen oder unmount
  }, [order]);

  const router = createBrowserRouter([
    { path: "/", element: <WelcomePage isShopOpen={isShopOpen()} /> },
    {
      path: "/order",
      element: isShopOpen()
        ? <OrderPage order={order} setOrder={setOrder} />
        : <Navigate to="/" replace />
    },
    {
      path: "/summary",
      element: isShopOpen()
        ? <SummaryPage order={order} />
        : <Navigate to="/" replace />
    }
  ]);

  return <RouterProvider router={router} />;
}

/**
 * Checks whether the restaurant is currently open.
 * 
 * Weekday hours (Mon-Fri): 10:00 – 22:00  
 * Weekend hours (Sat-Sun): 12:00 – 23:00
 * 
 * @returns {boolean} True if the current time is within the restaurant's opening hours
 */

function isShopOpen() {
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();

    let openHour, closeHour;

    if (day >= 1 && day <= 5) {
        // Montag-Freitag
        openHour = 10;
        closeHour = 22;
    } else {
        // Samstag-Sonntag
        openHour = 12;
        closeHour = 23;
    }

    const isOpen = hour >= openHour && hour < closeHour;

    return isOpen;
}