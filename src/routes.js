import SignUp from "./components/SignUp.vue";
import HomeComponent from "./components/HomeComponent.vue";
import {createRouter, createWebHistory} from "vue-router";
import LogIn from "./components/LogIn.vue";

const routes = [
    {
        name: 'SignUp',
        path: '/sign-up',
        component: SignUp,
    },
    {
        name: 'LogIn',
        path: '/login',
        component: LogIn,
    },
    {
        name: 'Home',
        path: '/',
        component: HomeComponent,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;