import {createWebHistory, createRouter} from "vue-router";

const routes = [
    {
        path: "/",
        alias: "/things",
        name: "things",
        component: () => import("./components/ThingList")
    },
    {
        path: "/things/:id",
        name: "edit-thing",
        component: () => import("./components/ThingEdit")
    },
    {
        path: "/add",
        name: "add-thing",
        component: () => import("./components/AddThing")
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;