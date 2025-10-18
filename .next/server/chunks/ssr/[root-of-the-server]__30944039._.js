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
    // default server-safe theme; loaded from localStorage on client
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
    // Helper to log unknown errors safely
    function logUnknownError(e, prefix = '') {
        if (e instanceof Error) {
            // eslint-disable-next-line no-console
            console.error(prefix, e.message, e);
        } else {
            // eslint-disable-next-line no-console
            console.error(prefix, e);
        }
    }
    // fetch books
    const fetchBooks = async ()=>{
        setLoading(true);
        setError(null);
        try {
            const res = await fetch('/api/books');
            if (!res.ok) {
                const txt = await res.text().catch(()=>'Failed to read error body');
                throw new Error(txt || `Server responded ${res.status}`);
            }
            const data = await res.json();
            setBooks(Array.isArray(data) ? data : []);
        } catch (e) {
            logUnknownError(e, 'fetchBooks error:');
            setError('Failed to load books (see console).');
        } finally{
            setLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // load theme on client (avoids SSR/CSR mismatch)
        try {
            const stored = localStorage.getItem('booktracker_theme');
            if (stored && (stored === 'dark' || stored === 'light')) setTheme(stored);
        } catch  {
        // ignore localStorage errors
        }
        fetchBooks();
        const clickHandler = (e)=>{
            if (containerRef.current && !containerRef.current.contains(e.target)) {
                setOpenMenuId(null);
            }
        };
        document.addEventListener('click', clickHandler);
        return ()=>document.removeEventListener('click', clickHandler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            localStorage.setItem('booktracker_theme', theme);
        } catch  {
        // ignore
        }
    }, [
        theme
    ]);
    const onAdd = async (e)=>{
        e?.preventDefault();
        setError(null);
        const t = title.trim();
        if (!t) {
            setError('Title required');
            return;
        }
        setSaving(true);
        try {
            const res = await fetch('/api/books', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: t,
                    author: author.trim() || null,
                    status: addStatus
                })
            });
            if (!res.ok) {
                const txt = await res.text().catch(()=>'server error');
                throw new Error(txt || `Server ${res.status}`);
            }
            setTitle('');
            setAuthor('');
            setAddStatus('wishlist');
            await fetchBooks();
        } catch (e) {
            logUnknownError(e, 'onAdd error:');
            setError('Failed to add book (see console).');
        } finally{
            setSaving(false);
        }
    };
    const updateStatus = async (id, newStatus)=>{
        // optimistic UI
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
            if (!res.ok) {
                const txt = await res.text().catch(()=>'server error');
                throw new Error(txt || `Server ${res.status}`);
            }
        } catch (e) {
            logUnknownError(e, 'updateStatus error:');
            setError('Failed to update status (see console).');
            // revert by refetching fresh server state
            fetchBooks();
        }
    };
    const removeBook = async (id)=>{
        if (!confirm('Delete this book?')) return;
        try {
            const res = await fetch(`/api/books/${id}`, {
                method: 'DELETE'
            });
            if (!res.ok) {
                const txt = await res.text().catch(()=>'server error');
                throw new Error(txt || `Server ${res.status}`);
            }
            setBooks((prev)=>prev.filter((b)=>b.id !== id));
        } catch (e) {
            logUnknownError(e, 'removeBook error:');
            setError('Delete failed (see console).');
            fetchBooks();
        }
    };
    const visible = books.filter((b)=>filterStatus === 'all' ? true : b.status === filterStatus).filter((b)=>{
        if (!search.trim()) return true;
        const q = search.toLowerCase();
        return (b.title ?? '').toLowerCase().includes(q) || (b.author ?? '').toLowerCase().includes(q);
    });
    // ----- styling (kept same as previous) -----
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
        color: '#fff',
        boxShadow: isDark ? '0 4px 10px rgba(79,155,255,0.14)' : '0 4px 14px rgba(37,99,235,0.18)'
    };
    const buttonGhost = {
        ...buttonBase,
        background: isDark ? '#0b1a29' : '#f2f6ff',
        color: isDark ? '#e6eef7' : '#05253f'
    };
    const inputBase = {
        padding: '12px 14px',
        borderRadius: 6,
        border: `1px solid ${borderColor}`,
        background: isDark ? '#071727' : '#ffffff',
        color: isDark ? '#e6eef7' : '#05253f',
        fontSize: 14,
        boxSizing: 'border-box',
        flex: 1
    };
    const page = {
        minHeight: '100vh',
        background: isDark ? '#05070a' : 'linear-gradient(180deg,#e7f3ff,#f9fbff)',
        color: isDark ? '#e6eef7' : '#05253f',
        fontFamily: 'Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial',
        padding: 18
    };
    const wrapper = {
        maxWidth: 1120,
        margin: '6px auto'
    };
    const cardStyle = (index)=>({
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            background: isDark ? '#0b2540' : '#ffffff',
            padding: '18px 20px',
            borderRadius: 10,
            border: `1px solid ${borderColor}`,
            boxShadow: isDark ? '0 6px 20px rgba(0,0,0,0.5)' : '0 4px 16px rgba(37,99,235,0.08)',
            transition: 'transform 160ms ease'
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
    const menuStyle = {
        position: 'absolute',
        left: 0,
        top: 'calc(100% + 8px)',
        background: isDark ? '#071d2e' : '#fff',
        border: `1px solid ${borderColor}`,
        borderRadius: 6,
        boxShadow: '0 6px 20px rgba(0,0,0,0.25)',
        zIndex: 50,
        minWidth: 160
    };
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
                                    lineNumber: 273,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        color: muted
                                    },
                                    children: "Dashboard To Get Hired"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Book Tracking/book-tracker/src/app/dashboard/page.tsx",
                                    lineNumber: 274,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Book Tracking/book-tracker/src/app/dashboard/page.tsx",
                            lineNumber: 272,
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
                                    style: buttonGhost,
                                    children: isDark ? 'Lite' : 'Dark'
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Book Tracking/book-tracker/src/app/dashboard/page.tsx",
                                    lineNumber: 277,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: fetchBooks,
                                    style: buttonGhost,
                                    children: "Refresh"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Book Tracking/book-tracker/src/app/dashboard/page.tsx",
                                    lineNumber: 280,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Book Tracking/book-tracker/src/app/dashboard/page.tsx",
                            lineNumber: 276,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Book Tracking/book-tracker/src/app/dashboard/page.tsx",
                    lineNumber: 271,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'flex',
                        gap: 8,
                        marginTop: 12,
                        alignItems: 'center'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            placeholder: "Search by title or author",
                            value: search,
                            onChange: (e)=>setSearch(e.target.value),
                            style: {
                                ...inputBase,
                                flex: 1
                            }
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Book Tracking/book-tracker/src/app/dashboard/page.tsx",
                            lineNumber: 286,
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
                                    lineNumber: 288,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "wishlist",
                                    children: "Wishlist"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Book Tracking/book-tracker/src/app/dashboard/page.tsx",
                                    lineNumber: 289,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "reading",
                                    children: "Reading"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Book Tracking/book-tracker/src/app/dashboard/page.tsx",
                                    lineNumber: 290,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "completed",
                                    children: "Completed"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Book Tracking/book-tracker/src/app/dashboard/page.tsx",
                                    lineNumber: 291,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Book Tracking/book-tracker/src/app/dashboard/page.tsx",
                            lineNumber: 287,
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
                                style: buttonGhost,
                                children: "Clear"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Book Tracking/book-tracker/src/app/dashboard/page.tsx",
                                lineNumber: 294,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Book Tracking/book-tracker/src/app/dashboard/page.tsx",
                            lineNumber: 293,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Book Tracking/book-tracker/src/app/dashboard/page.tsx",
                    lineNumber: 285,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: onAdd,
                    style: {
                        display: 'flex',
                        gap: 8,
                        alignItems: 'center',
                        marginTop: 12
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            placeholder: "Title (required)",
                            value: title,
                            onChange: (e)=>setTitle(e.target.value),
                            style: inputBase
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Book Tracking/book-tracker/src/app/dashboard/page.tsx",
                            lineNumber: 300,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            placeholder: "Author (optional)",
                            value: author,
                            onChange: (e)=>setAuthor(e.target.value),
                            style: {
                                ...inputBase,
                                width: 320
                            }
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Book Tracking/book-tracker/src/app/dashboard/page.tsx",
                            lineNumber: 301,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            value: addStatus,
                            onChange: (e)=>setAddStatus(e.target.value),
                            style: {
                                padding: '10px 14px',
                                borderRadius: 6,
                                border: '1px solid rgba(0,0,0,0.06)',
                                background: statusMeta[addStatus].bg,
                                color: statusMeta[addStatus].text,
                                fontWeight: 800
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "wishlist",
                                    children: "Wishlist"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Book Tracking/book-tracker/src/app/dashboard/page.tsx",
                                    lineNumber: 303,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "reading",
                                    children: "Reading"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Book Tracking/book-tracker/src/app/dashboard/page.tsx",
                                    lineNumber: 304,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "completed",
                                    children: "Completed"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Book Tracking/book-tracker/src/app/dashboard/page.tsx",
                                    lineNumber: 305,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Book Tracking/book-tracker/src/app/dashboard/page.tsx",
                            lineNumber: 302,
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
                                    lineNumber: 309,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>{
                                        setTitle('');
                                        setAuthor('');
                                        setAddStatus('wishlist');
                                        setError(null);
                                    },
                                    style: buttonGhost,
                                    children: "Clear"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Book Tracking/book-tracker/src/app/dashboard/page.tsx",
                                    lineNumber: 312,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Book Tracking/book-tracker/src/app/dashboard/page.tsx",
                            lineNumber: 308,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Book Tracking/book-tracker/src/app/dashboard/page.tsx",
                    lineNumber: 299,
                    columnNumber: 9
                }, this),
                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        color: '#ff8080',
                        marginTop: 8
                    },
                    children: error
                }, void 0, false, {
                    fileName: "[project]/Desktop/Book Tracking/book-tracker/src/app/dashboard/page.tsx",
                    lineNumber: 316,
                    columnNumber: 19
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'grid',
                        gap: 14,
                        marginTop: 12
                    },
                    children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            color: muted
                        },
                        children: "Loading…"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Book Tracking/book-tracker/src/app/dashboard/page.tsx",
                        lineNumber: 320,
                        columnNumber: 13
                    }, this) : visible.length ? visible.map((b, i)=>{
                        const st = b.status ?? 'wishlist';
                        const meta = statusMeta[st] ?? statusMeta.wishlist;
                        const isOpen = openMenuId === b.id;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: cardStyle(i),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        maxWidth: '68%'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontWeight: 800,
                                                fontSize: 20,
                                                marginBottom: 6
                                            },
                                            children: b.title
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Book Tracking/book-tracker/src/app/dashboard/page.tsx",
                                            lineNumber: 330,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                color: muted,
                                                fontStyle: 'italic'
                                            },
                                            children: [
                                                b.author && `${b.author} • ` || '',
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        textTransform: 'capitalize'
                                                    },
                                                    children: b.status ?? '—'
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Book Tracking/book-tracker/src/app/dashboard/page.tsx",
                                                    lineNumber: 333,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Book Tracking/book-tracker/src/app/dashboard/page.tsx",
                                            lineNumber: 331,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Book Tracking/book-tracker/src/app/dashboard/page.tsx",
                                    lineNumber: 329,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 12
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                position: 'relative',
                                                display: 'inline-block'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    onClick: (e)=>{
                                                        e.stopPropagation();
                                                        setOpenMenuId(isOpen ? null : b.id);
                                                    },
                                                    style: {
                                                        ...pillButton(meta.bg, meta.text),
                                                        background: isDark ? meta.bg : meta.bg,
                                                        color: meta.text
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                width: 10,
                                                                height: 10,
                                                                borderRadius: 999,
                                                                background: '#ffffff55',
                                                                display: 'inline-block'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Book Tracking/book-tracker/src/app/dashboard/page.tsx",
                                                            lineNumber: 347,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                textTransform: 'capitalize'
                                                            },
                                                            children: st
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/Book Tracking/book-tracker/src/app/dashboard/page.tsx",
                                                            lineNumber: 348,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Book Tracking/book-tracker/src/app/dashboard/page.tsx",
                                                    lineNumber: 339,
                                                    columnNumber: 23
                                                }, this),
                                                isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: menuStyle,
                                                    onClick: (e)=>e.stopPropagation(),
                                                    children: STATUS_ORDER.map((s)=>{
                                                        const m = statusMeta[s];
                                                        const itemBg = s === st ? isDark ? '#0b2b3a' : '#f6fbff' : isDark ? '#06202e' : '#fff';
                                                        const textColor = s === st ? m.text : isDark ? '#e6eef7' : '#07203a';
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            role: "button",
                                                            onClick: ()=>updateStatus(b.id, s),
                                                            style: {
                                                                padding: '12px 14px',
                                                                cursor: 'pointer',
                                                                background: itemBg,
                                                                color: textColor,
                                                                fontWeight: 800
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        width: 10,
                                                                        height: 10,
                                                                        borderRadius: 999,
                                                                        background: m.bg,
                                                                        display: 'inline-block',
                                                                        marginRight: 10
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/Book Tracking/book-tracker/src/app/dashboard/page.tsx",
                                                                    lineNumber: 359,
                                                                    columnNumber: 33
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        textTransform: 'capitalize'
                                                                    },
                                                                    children: s
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/Book Tracking/book-tracker/src/app/dashboard/page.tsx",
                                                                    lineNumber: 360,
                                                                    columnNumber: 33
                                                                }, this)
                                                            ]
                                                        }, s, true, {
                                                            fileName: "[project]/Desktop/Book Tracking/book-tracker/src/app/dashboard/page.tsx",
                                                            lineNumber: 358,
                                                            columnNumber: 31
                                                        }, this);
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Book Tracking/book-tracker/src/app/dashboard/page.tsx",
                                                    lineNumber: 352,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Book Tracking/book-tracker/src/app/dashboard/page.tsx",
                                            lineNumber: 338,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>removeBook(b.id),
                                            style: {
                                                padding: '10px 14px',
                                                borderRadius: 6,
                                                background: '#2563eb',
                                                color: '#fff',
                                                fontWeight: 700,
                                                border: 'none'
                                            },
                                            children: "Delete"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Book Tracking/book-tracker/src/app/dashboard/page.tsx",
                                            lineNumber: 368,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                color: muted,
                                                fontSize: 12
                                            },
                                            children: b.created_at ? formatIsoTimestamp(b.created_at) : ''
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Book Tracking/book-tracker/src/app/dashboard/page.tsx",
                                            lineNumber: 370,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Book Tracking/book-tracker/src/app/dashboard/page.tsx",
                                    lineNumber: 337,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, b.id, true, {
                            fileName: "[project]/Desktop/Book Tracking/book-tracker/src/app/dashboard/page.tsx",
                            lineNumber: 328,
                            columnNumber: 17
                        }, this);
                    }) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            color: muted
                        },
                        children: "No books yet — add one above."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Book Tracking/book-tracker/src/app/dashboard/page.tsx",
                        lineNumber: 376,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/Book Tracking/book-tracker/src/app/dashboard/page.tsx",
                    lineNumber: 318,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        marginTop: 12,
                        color: muted,
                        fontSize: 13
                    },
                    children: [
                        'Tip: click a colored pill to open the menu. If you see "Unauthorized" in console, ensure SUPABASE keys are set in ',
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                            children: ".env.local"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Book Tracking/book-tracker/src/app/dashboard/page.tsx",
                            lineNumber: 381,
                            columnNumber: 125
                        }, this),
                        "."
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Book Tracking/book-tracker/src/app/dashboard/page.tsx",
                    lineNumber: 380,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Book Tracking/book-tracker/src/app/dashboard/page.tsx",
            lineNumber: 270,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/Book Tracking/book-tracker/src/app/dashboard/page.tsx",
        lineNumber: 269,
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