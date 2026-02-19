import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WelcomePage from './pages/welcomePage';
import OrderPage from './pages/orderPage';
import SummaryPage from './pages/summaryPage';

export default function App() {
  const [order, setOrder] = useState({}); // z.B. { "Margherita": 2 }

  // Auto-Reset nach X Sekunden (z.B. 60s)
  useEffect(() => {
    if (Object.keys(order).length === 0) return; // nichts zu resetten

    const timeout = setTimeout(() => {
      setOrder({});
      console.log("Order auto-reset after timeout!");
    }, 60000*15); // 60000ms = 60 Sekunden

    return () => clearTimeout(timeout); // Timer aufräumen bei Änderungen oder unmount
  }, [order]);

  const router = createBrowserRouter([
    { path: "/", element: <WelcomePage /> },
    { path: "/order", element: <OrderPage order={order} setOrder={setOrder} /> },
    { path: "/summary", element: <SummaryPage order={order} /> }
  ]);

  return <RouterProvider router={router} />;
}
