﻿import { createWebHistory, createRouter } from "vue-router";
import { RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        alias: "/gilec",
        name: "gilec",
        component: () => import("./components/GilecList.vue"),
    },
    {
        path: "/gilec/:id",
        name: "gilec-details",
        component: () => import("./components/GilecDetails.vue"),
    },
    {
        path: "/add",
        name: "add",
        component: () => import("./components/AddGilec.vue"),
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;