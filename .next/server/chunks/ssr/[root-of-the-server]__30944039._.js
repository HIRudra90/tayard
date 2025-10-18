module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/Desktop/Book Tracking/book-tracker/src/app/dashboard/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Book Tracking/book-tracker/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Book Tracking/book-tracker/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const STATUS_ORDER = [
    'wishlist',
    'reading',
    'completed'
];
function formatIsoTimestamp(iso) {
    if (!iso) return '';
    return iso.replace('T', ' ').split('.')[0];
}
function DashboardPage() {
    const [books, setBooks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [filterStatus, setFilterStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('all');
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [author, setAuthor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [addStatus, setAddStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('wishlist');
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [openMenuId, setOpenMenuId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('dark');
    const statusMeta = {
        wishlist: {
            bg: '#60a5fa',
            text: '#041022'
        },
        reading: {
            bg: '#facc15',
            text: '#031527'
        },
        completed: {
            bg: '#10b981',
            text: '#031527'
        }
    };
    const fetchBooks = async ()=>{
        setLoading(true);
        try {
            const res = await fetch('/api/books');
            if (!res.ok) throw new Error(await res.text());
            setBooks(await res.json());
        } catch  {
            setError('Failed to load books.');
        } finally{
            setLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            const stored = localStorage.getItem('booktracker_theme');
            if (stored) setTheme(stored);
        } catch  {}
        fetchBooks();
        const clickHandler = (e)=>{
            if (containerRef.current && !containerRef.current.contains(e.target)) {
                setOpenMenuId(null);
            }
        };
        document.addEventListener('click', clickHandler);
        return ()=>document.removeEventListener('click', clickHandler);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        localStorage.setItem('booktracker_theme', theme);
    }, [
        theme
    ]);
    const onAdd = async (e)=>{
        e?.preventDefault();
        if (!title.trim()) return setError('Title required');
        setSaving(true);
        try {
            const res = await fetch('/api/books', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title,
                    author,
                    status: addStatus
                })
            });
            if (!res.ok) throw new Error(await res.text());
            setTitle('');
            setAuthor('');
            setAddStatus('wishlist');
            fetchBooks();
        } catch  {
            setError('Failed to add book.');
        } finally{
            setSaving(false);
        }
    };
    const updateStatus = async (id, newStatus)=>{
        setBooks((prev)=>prev.map((b)=>b.id === id ? {
                    ...b,
                    status: newStatus
                } : b));
        setOpenMenuId(null);
        try {
            const res = await fetch(`/api/books/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    status: newStatus
                })
            });
            if (!res.ok) throw new Error(await res.text());
        } catch  {
            setError('Failed to update status.');
        }
    };
    const removeBook = async (id)=>{
        if (!confirm('Delete this book?')) return;
        try {
            await fetch(`/api/books/${id}`, {
                method: 'DELETE'
            });
            setBooks((prev)=>prev.filter((b)=>b.id !== id));
        } catch  {
            setError('Delete failed.');
        }
    };
    const visible = books.filter((b)=>filterStatus === 'all' ? true : b.status === filterStatus).filter((b)=>(b.title ?? '').toLowerCase().includes(search.toLowerCase()) || (b.author ?? '').toLowerCase().includes(search.toLowerCase()));
    const isDark = theme === 'dark';
    const borderColor = isDark ? 'rgba(255,255,255,0.25)' : 'rgba(30,58,138,0.25)';
    const muted = isDark ? '#9aa7b6' : '#4b5563';
    const buttonBlue = isDark ? '#4f9bff' : '#2563eb';
    const buttonBase = {
        padding: '10px 16px',
        height: 42,
        borderRadius: 6,
        border: `1px solid ${borderColor}`,
        cursor: 'pointer',
        fontWeight: 700,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
    };
    const buttonPrimary = {
        ...buttonBase,
        background: buttonBlue,
        color: '#fff'
    };
    const inputBase = {
        padding: '12px 14px',
        borderRadius: 6,
        border: `1px solid ${borderColor}`,
        background: isDark ? '#071727' : '#ffffff',
        color: isDark ? '#e6eef7' : '#05253f',
        fontSize: 14,
        flex: 1
    };
    const page = {
        minHeight: '100vh',
        background: isDark ? '#05070a' : 'linear-gradient(180deg,#e0f0ff,#f6faff)',
        color: isDark ? '#e6eef7' : '#05253f',
        fontFamily: 'Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial',
        padding: 18
    };
    const wrapper = {
        maxWidth: 1120,
        margin: '6px auto'
    };
    const cardStyle = ()=>({
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            background: isDark ? '#0b2540' : '#ffffff',
            padding: '18px 20px',
            borderRadius: 10,
            border: `1px solid ${borderColor}`,
            boxShadow: isDark ? '0 6px 20px rgba(0,0,0,0.5)' : '0 4px 16px rgba(37,99,235,0.08)'
        });
    const pillButton = (bg, txt)=>({
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '8px 14px',
            borderRadius: 6,
            background: bg,
            color: txt,
            fontWeight: 800,
            cursor: 'pointer',
            minWidth: 110,
            justifyContent: 'center'
        });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: page,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: wrapper,
            ref: containerRef,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: 16
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    children: "Your Books"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Book Tracking/book-tracker/src/app/dashboard/page.tsx",
                                    lineNumber: 200,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        color: muted
                                    },
                                    children: "Dashboard To Get Hired"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Book Tracking/book-tracker/src/app/dashboard/page.tsx",
                                    lineNumber: 201,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Book Tracking/book-tracker/src/app/dashboard/page.tsx",
                            lineNumber: 199,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                gap: 8
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setTheme((t)=>t === 'dark' ? 'light' : 'dark'),
                                    style: buttonBase,
                                    children: isDark ? 'Lite' : 'Dark'
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Book Tracking/book-tracker/src/app/dashboard/page.tsx",
                                    lineNumber: 204,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: fetchBooks,
                                    style: buttonBase,
                                    children: "Refresh"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Book Tracking/book-tracker/src/app/dashboard/page.tsx",
                                    lineNumber: 207,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Book Tracking/book-tracker/src/app/dashboard/page.tsx",
                            lineNumber: 203,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Book Tracking/book-tracker/src/app/dashboard/page.tsx",
                    lineNumber: 198,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'flex',
                        gap: 8,
                        alignItems: 'center'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            placeholder: "Search by title or author",
                            value: search,
                            onChange: (e)=>setSearch(e.target.value),
                            style: inputBase
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Book Tracking/book-tracker/src/app/dashboard/page.tsx",
                            lineNumber: 213,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            value: filterStatus,
                            onChange: (e)=>setFilterStatus(e.target.value),
                            style: {
                                ...inputBase,
                                width: 160
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "all",
                                    children: "All statuses"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Book Tracking/book-tracker/src/app/dashboard/page.tsx",
                                    lineNumber: 215,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "wishlist",
                                    children: "Wishlist"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Book Tracking/book-tracker/src/app/dashboard/page.tsx",
                                    lineNumber: 216,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "reading",
                                    children: "Reading"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Book Tracking/book-tracker/src/app/dashboard/page.tsx",
                                    lineNumber: 217,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "completed",
                                    children: "Completed"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Book Tracking/book-tracker/src/app/dashboard/page.tsx",
                                    lineNumber: 218,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Book Tracking/book-tracker/src/app/dashboard/page.tsx",
                            lineNumber: 214,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                marginLeft: 'auto'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setSearch('');
                                    setFilterStatus('all');
                                },
                                style: buttonBase,
                                children: "Clear"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Book Tracking/book-tracker/src/app/dashboard/page.tsx",
                                lineNumber: 221,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Book Tracking/book-tracker/src/app/dashboard/page.tsx",
                            lineNumber: 220,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Book Tracking/book-tracker/src/app/dashboard/page.tsx",
                    lineNumber: 212,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: onAdd,
                    style: {
                        display: 'flex',
                        gap: 8,
                        marginTop: 12,
                        alignItems: 'center'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            placeholder: "Title (required)",
                            value: title,
                            onChange: (e)=>setTitle(e.target.value),
                            style: inputBase
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Book Tracking/book-tracker/src/app/dashboard/page.tsx",
                            lineNumber: 227,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            placeholder: "Author (optional)",
                            value: author,
                            onChange: (e)=>setAuthor(e.target.value),
                            style: {
                                ...inputBase,
                                width: 300
                            }
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Book Tracking/book-tracker/src/app/dashboard/page.tsx",
                            lineNumber: 228,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            value: addStatus,
                            onChange: (e)=>setAddStatus(e.target.value),
                            style: {
                                ...inputBase,
                                width: 140
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "wishlist",
                                    children: "Wishlist"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Book Tracking/book-tracker/src/app/dashboard/page.tsx",
                                    lineNumber: 230,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "reading",
                                    children: "Reading"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Book Tracking/book-tracker/src/app/dashboard/page.tsx",
                                    lineNumber: 231,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "completed",
                                    children: "Completed"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Book Tracking/book-tracker/src/app/dashboard/page.tsx",
                                    lineNumber: 232,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Book Tracking/book-tracker/src/app/dashboard/page.tsx",
                            lineNumber: 229,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                marginLeft: 'auto',
                                display: 'flex',
                                gap: 8
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    disabled: saving,
                                    style: buttonPrimary,
                                    children: saving ? 'Adding…' : 'Add'
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Book Tracking/book-tracker/src/app/dashboard/page.tsx",
                                    lineNumber: 236,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>{
                                        setTitle('');
                                        setAuthor('');
                                        setAddStatus('wishlist');
                                    },
                                    style: buttonBase,
                                    children: "Clear"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Book Tracking/book-tracker/src/app/dashboard/page.tsx",
                                    lineNumber: 237,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Book Tracking/book-tracker/src/app/dashboard/page.tsx",
                            lineNumber: 235,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Book Tracking/book-tracker/src/app/dashboard/page.tsx",
                    lineNumber: 226,
                    columnNumber: 9
                }, this),
                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        color: '#f87171',
                        marginTop: 8
                    },
                    children: error
                }, void 0, false, {
                    fileName: "[project]/Desktop/Book Tracking/book-tracker/src/app/dashboard/page.tsx",
                    lineNumber: 241,
                    columnNumber: 19
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'grid',
                        gap: 14,
                        marginTop: 20
                    },
                    children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            color: muted
                        },
                        children: "Loading…"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Book Tracking/book-tracker/src/app/dashboard/page.tsx",
                        lineNumber: 246,
                        columnNumber: 13
                    }, this) : visible.length ? visible.map((b)=>{
                        const st = b.status ?? 'wishlist';
                        const meta = statusMeta[st];
                        const isOpen = openMenuId === b.id;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: cardStyle(),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontWeight: 800,
                                                fontSize: 18
                                            },
                                            children: b.title
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Book Tracking/book-tracker/src/app/dashboard/page.tsx",
                                            lineNumber: 255,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                color: muted,
                                                fontStyle: 'italic'
                                            },
                                            children: [
                                                b.author && `${b.author} • ` || '',
                                                st
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Book Tracking/book-tracker/src/app/dashboard/page.tsx",
                                            lineNumber: 256,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Book Tracking/book-tracker/src/app/dashboard/page.tsx",
                                    lineNumber: 254,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 10,
                                        position: 'relative'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                position: 'relative'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    onClick: (e)=>{
                                                        e.stopPropagation();
                                                        setOpenMenuId(isOpen ? null : b.id);
                                                    },
                                                    style: pillButton(meta.bg, meta.text),
                                                    children: st
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Book Tracking/book-tracker/src/app/dashboard/page.tsx",
                                                    lineNumber: 264,
                                                    columnNumber: 23
                                                }, this),
                                                isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        position: 'absolute',
                                                        top: 'calc(100% + 8px)',
                                                        left: 0,
                                                        background: isDark ? '#071d2e' : '#fff',
                                                        border: `1px solid ${borderColor}`,
                                                        borderRadius: 6,
                                                        zIndex: 50
                                                    },
                                                    children: STATUS_ORDER.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            onClick: ()=>updateStatus(b.id, s),
                                                            style: {
                                                                padding: '10px 14px',
                                                                cursor: 'pointer',
                                                                background: s === st ? meta.bg : isDark ? '#071d2e' : '#fff',
                                                                color: s === st ? meta.text : isDark ? '#e6eef7' : '#05253f'
                                                            },
                                                            children: s
                                                        }, s, false, {
                                                            fileName: "[project]/Desktop/Book Tracking/book-tracker/src/app/dashboard/page.tsx",
                                                            lineNumber: 287,
                                                            columnNumber: 29
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Book Tracking/book-tracker/src/app/dashboard/page.tsx",
                                                    lineNumber: 275,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Book Tracking/book-tracker/src/app/dashboard/page.tsx",
                                            lineNumber: 263,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>removeBook(b.id),
                                            style: buttonPrimary,
                                            children: "Delete"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Book Tracking/book-tracker/src/app/dashboard/page.tsx",
                                            lineNumber: 304,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                color: muted,
                                                fontSize: 12
                                            },
                                            children: formatIsoTimestamp(b.created_at)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Book Tracking/book-tracker/src/app/dashboard/page.tsx",
                                            lineNumber: 305,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Book Tracking/book-tracker/src/app/dashboard/page.tsx",
                                    lineNumber: 262,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, b.id, true, {
                            fileName: "[project]/Desktop/Book Tracking/book-tracker/src/app/dashboard/page.tsx",
                            lineNumber: 253,
                            columnNumber: 17
                        }, this);
                    }) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            color: muted
                        },
                        children: "No books yet — add one above."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Book Tracking/book-tracker/src/app/dashboard/page.tsx",
                        lineNumber: 311,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/Book Tracking/book-tracker/src/app/dashboard/page.tsx",
                    lineNumber: 244,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Book Tracking/book-tracker/src/app/dashboard/page.tsx",
            lineNumber: 197,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/Book Tracking/book-tracker/src/app/dashboard/page.tsx",
        lineNumber: 196,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/Book Tracking/book-tracker/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/Desktop/Book Tracking/book-tracker/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Desktop/Book Tracking/book-tracker/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/Desktop/Book Tracking/book-tracker/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Desktop/Book Tracking/book-tracker/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__30944039._.js.map