module.exports = [
"[project]/Desktop/Book Tracking/book-tracker/.next-internal/server/app/api/books/[id]/route/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/punycode [external] (punycode, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("punycode", () => require("punycode"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[project]/Desktop/Book Tracking/book-tracker/src/app/api/books/[id]/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/app/api/books/[id]/route.ts
__turbopack_context__.s([
    "DELETE",
    ()=>DELETE,
    "PATCH",
    ()=>PATCH
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Book Tracking/book-tracker/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Book Tracking/book-tracker/node_modules/@supabase/supabase-js/dist/module/index.js [app-route] (ecmascript) <locals>");
;
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://ynjhypfadmthfpmpiqnk.supabase.co");
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!supabaseUrl || !serviceRoleKey) {
    console.error('Missing SUPABASE env vars on server. Ensure NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are set.');
}
const serverSupabase = supabaseUrl && serviceRoleKey ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, serviceRoleKey) : null;
async function PATCH(req, { params }) {
    const id = params.id;
    if (!serverSupabase) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Server configuration error: missing Supabase keys'
        }, {
            status: 500
        });
    }
    try {
        const body = await req.json();
        if (!body || Object.keys(body).length === 0) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'No update payload provided'
            }, {
                status: 400
            });
        }
        // allow only certain fields
        const allowed = {};
        if (body.status) allowed.status = body.status;
        if (body.title) allowed.title = body.title;
        if ('author' in body) allowed.author = body.author;
        if (Object.keys(allowed).length === 0) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'No valid fields to update'
            }, {
                status: 400
            });
        }
        const { data, error, status } = await serverSupabase.from('books').update(allowed).eq('id', id).select().single();
        if (error) {
            console.error(`Supabase PATCH /books/${id} error`, error);
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: error.message || 'Supabase update error'
            }, {
                status: status ?? 500
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(data, {
            status: 200
        });
    } catch (err) {
        console.error(`Unexpected PATCH /api/books/${id} error`, err);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: String(err)
        }, {
            status: 500
        });
    }
}
async function DELETE(_req, { params }) {
    const id = params.id;
    if (!serverSupabase) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Server configuration error: missing Supabase keys'
        }, {
            status: 500
        });
    }
    try {
        const { data, error, status } = await serverSupabase.from('books').delete().eq('id', id);
        if (error) {
            console.error(`Supabase DELETE /books/${id} error`, error);
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: error.message || 'Supabase delete error'
            }, {
                status: status ?? 500
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true
        }, {
            status: 200
        });
    } catch (err) {
        console.error(`Unexpected DELETE /api/books/${id} error`, err);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Book__Tracking$2f$book$2d$tracker$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: String(err)
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__b07bcd83._.js.map