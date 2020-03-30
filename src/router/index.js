import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "主页"
    }
  },
  {
    path: "/about",
    name: "About",
    meta: {
      title: "关于我们"
    },
    component: () => import("../views/About.vue")
  },
  {
    path: "/axios",
    name: "Axios",
    component: () => import("../views/Axios.vue"),
    meta: {
      title: "阿西欧斯"
    }
  },
  {
    path: "/comment",
    name: "Comment",
    component: () => import("../views/Comment.vue"),
    meta: {
      title: "评论"
    }
  },
  {
    path: "/vuexx",
    name: "Vuexx",
    component: () => import("../views/Vuexx.vue"),
    meta: {
      title: "Vuexx"
    }
  },
  {
    path: "/attr",
    name: "Attr",
    component: () => import("../views/Attr.vue"),
    meta: {
      title: "计算监听属性"
    },
    children: [
      {
        path: "/attr/comment",
        name: "attr-comment",
        component: () => import("../views/Comment.vue"),
        meta: {
          title: "路由-评论"
        }
      },
      {
        path: "/attr/about",
        name: "attr-about",
        component: () => import("../views/About.vue"),
        meta: {
          title: "路由-关于我们"
        }
      }
    ]
  },
  {
    path: "/router",
    name: "Router",
    redirect: "/router/comment",
    component: () => import("../views/Router.vue"),
    children: [
      {
        path: "/router/comment",
        name: "router-comment",
        component: () => import("../views/Comment.vue"),
        meta: {
          title: "路由-评论"
        }
      },
      {
        path: "/router/about",
        name: "router-about",
        component: () => import("../views/About.vue"),
        meta: {
          title: "路由-关于我们"
        }
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
