import {
    BarChart3,
    FileText,
    LayoutDashboard,
    Settings,
    Users,
    Wallet,
} from "lucide-react";

export const sidebarMenuSections = [
    {
        title: "main",
        items: [
            { label: "dashboard", path: "/admin", icon: LayoutDashboard },
            {
                label: "accounts",
                icon: Wallet,
                children: [
                    { label: "incomeVouchers", path: "/admin/accounts/income-vouchers" },
                    { label: "expenseVouchers", path: "/admin/accounts/expense-vouchers" },
                ],
            },
            { label: "doLetters", path: "/admin/do-letters", icon: FileText },
        ],
    },
    {
        title: "reports",
        items: [
            { label: "incomeReport", path: "/admin/income-report", icon: BarChart3 },
            { label: "expenseReport", path: "/admin/expense-report", icon: BarChart3 },
            // { label: "summaryReport", path: "/admin/summary-report", icon: BarChart3 },
        ],
    },
    {
        title: "administration",
        items: [
            { label: "operators", path: "/admin/operators", icon: Users },
        ],
    },
    {
        title: "settings",
        items: [
            { label: "generalSettings", path: "/admin/general-settings", icon: Settings },
        ],
    },
];