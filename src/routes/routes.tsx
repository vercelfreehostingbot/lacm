import { createBrowserRouter, Navigate, Outlet } from "react-router";
import { useAppSelector } from "../redux/app/hooks";
import DashboardPage from "../pages/dashboard/DashboardPage";
import LoginPage from "../pages/login/LoginPage";
import DashboardLayout from "../layouts/DashboardLayout";
import { ProtectedRoute } from "../components/protectedRoute/ProtectedRoute";
import { RedirectIfAuthenticated } from "../components/redirectIfAuthenticated/RedirectIfAuthenticated";
import OperatorsPage from "../pages/dashboard/operators/OperatorsPage";
import DashboardNotFoundPage from "../pages/notFound/DashboardNotFoundPage";
import NotFoundPage from "../pages/notFound/NotFoundPage";
import IncomeVouchersPage from "../pages/dashboard/incomeVouchers/IncomeVouchersPage";
import ExpenseVouchersPage from "../pages/dashboard/expenseVouchers/ExpenseVouchersPage";
import ProfilePage from "../pages/dashboard/profile/ProfilePage";
import DoLettersPage from "../pages/dashboard/doLetters/DoLettersPage";
import IncomeReportPage from "../pages/dashboard/incomeReport/IncomeReportPage";
import ExpenseReportPage from "../pages/dashboard/expenseReport/ExpenseReportPage";
import GeneralSettingsPage from "../pages/dashboard/generalSettings/GeneralSettingsPage";

const dashboardChildren = [
    { index: true, Component: DashboardPage },
    { path: "accounts/income-vouchers", Component: IncomeVouchersPage },
    { path: "accounts/expense-vouchers", Component: ExpenseVouchersPage },
    { path: "do-letters", Component: DoLettersPage },
    { path: "income-report", Component: IncomeReportPage },
    { path: "expense-report", Component: ExpenseReportPage },
    { path: "operators", Component: OperatorsPage },
    { path: "general-settings", Component: GeneralSettingsPage },
    { path: "profile", Component: ProfilePage },
    { path: "*", Component: DashboardNotFoundPage },
];

// The /admin URL is the canonical admin entry point.
// Unauthenticated users see the login form WITHOUT changing the URL.
// After login, the same /admin route renders the dashboard.
function AdminRoute() {
    const { accessToken, user } = useAppSelector((state) => state.auth);

    if (!accessToken || !user) {
        return <LoginPage />;
    }

    return <Outlet />;
}

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to="/admin" replace />,
    },
    {
        path: "/admin",
        Component: AdminRoute,
        children: [
            {
                Component: DashboardLayout,
                children: dashboardChildren,
            },
        ],
    },
    {
        Component: RedirectIfAuthenticated,
        children: [
            {
                path: "/login",
                Component: LoginPage,
            },
        ],
    },
    {
        Component: ProtectedRoute,
        children: [
            {
                path: "/dashboard",
                Component: DashboardLayout,
                children: dashboardChildren,
            },
        ],
    },
    {
        path: "*",
        Component: NotFoundPage,
    },
]);
