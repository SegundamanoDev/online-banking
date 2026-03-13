import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";

// Page Imports
import Home from "./components/Home";
import AboutBanner from "./components/About";
import Business from "./components/Business";
import BusinessAccount from "./components/BusinessAccount";
import Register from "./components/Register";
import Corporate from "./components/Coporate";
import CurrentAccount from "./components/CurrentAccount";
import Mortgage from "./components/Mortgage";
import Cards from "./components/Cards";
import SavingsPage from "./components/Savings";
import LoansPage from "./components/Loan";
import InsurancePage from "./components/Insurance";
import Navbar from "./components/Navbar";

// Dashboard Imports
import Dashboard from "./components/Dashboard"; // This is now your "Overview"
import DashboardLayout from "./components/DashboardLayout";
import Transactions from "./components/Transactions";
import Transfer from "./components/Transfer";
import GlobalMoney from "./components/GlobalMoney";
import DashboardCards from "./components/DashBoardCards";
import DashboardInsurance from "./components/DashboardInsurance";
import ScrollToTop from "./components/ScrollToTop";

// This helper hides the Navbar on dashboard routes
const NavigationWrapper = () => {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith("/dashboard");

  return !isDashboard ? <Navbar /> : null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <NavigationWrapper />
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "var(--app-card)",
            color: "var(--app-text)",
            border: "1px solid var(--app-border)",
            borderRadius: "12px",
          },
        }}
      />

      <Routes>
        {/* --- PUBLIC ROUTES --- */}
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/private" element={<AboutBanner />} />
        <Route path="/business" element={<Business />} />
        <Route path="/corporate" element={<Corporate />} />
        <Route path="/business-account" element={<BusinessAccount />} />
        <Route path="/current-account" element={<CurrentAccount />} />
        <Route path="/savings" element={<SavingsPage />} />
        <Route path="/mortgages" element={<Mortgage />} />
        <Route path="/credit-cards" element={<Cards />} />
        <Route path="/loans" element={<LoansPage />} />
        <Route path="/insurance" element={<InsurancePage />} />

        {/* --- DASHBOARD NESTED ROUTES --- */}
        {/* We use one parent Route for /dashboard */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          {/* Use 'index' as a prop on Route to show the main Dashboard content */}
          <Route index element={<Dashboard />} />

          <Route path="transactions" element={<Transactions />} />
          <Route path="transfer" element={<Transfer />} />
          <Route path="global" element={<GlobalMoney />} />
          <Route path="cards" element={<DashboardCards />} />
          <Route path="insurance" element={<DashboardInsurance />} />
        </Route>

        {/* --- 404 PAGE --- */}
        <Route
          path="*"
          element={
            <div className="min-h-screen flex items-center justify-center bg-app-bg text-app-text">
              <div className="text-center">
                <h1 className="text-6xl font-bold text-bank-accent">404</h1>
                <p className="mt-4 text-xl opacity-60">Page not found.</p>
                <button
                  onClick={() => window.history.back()}
                  className="mt-6 text-bank-accent"
                >
                  Go Back
                </button>
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
