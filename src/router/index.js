import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/nav1/Home.vue";

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
    component: () => import("../views/nav1/About.vue")
  },
  {
    path: "/axios",
    name: "Axios",
    component: () => import("../views/nav1/Axios.vue"),
    meta: {
      title: "阿西欧斯"
    }
  },
  {
    path: "/lin",
    name: "Lin",
    component: () => import("../views/nav1/Lin.vue"),
    meta: {
      title: "Lin"
    }
  },
  {
    path: "/todoList",
    name: "TodoList",
    component: () => import("../views/nav1/TodoList.vue"),
    meta: {
      title: "TodoList"
    }
  },
  {
    path: "/vModel",
    name: "VModel",
    component: () => import("../views/nav2/VModel.vue"),
    meta: {
      title: "VModel"
    }
  },
  {
    path: "/comment",
    name: "Comment",
    component: () => import("../views/nav1/Comment.vue"),
    meta: {
      title: "评论"
    }
  },
  {
    path: "/vuexx",
    name: "Vuexx",
    component: () => import("../views/nav1/Vuexx.vue"),
    meta: {
      title: "Vuexx"
    }
  },
  {
    path: "/attr",
    name: "Attr",
    component: () => import("../views/nav1/Attr.vue"),
    meta: {
      title: "计算监听属性"
    },
    children: [
      {
        path: "/attr/comment",
        name: "attr-comment",
        component: () => import("../views/nav1/Comment.vue"),
        meta: {
          title: "路由-评论"
        }
      },
      {
        path: "/attr/about",
        name: "attr-about",
        component: () => import("../views/nav1/About.vue"),
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
    component: () => import("../views/nav1/Router.vue"),
    children: [
      {
        path: "/router/comment",
        name: "router-comment",
        component: () => import("../views/nav1/Comment.vue"),
        meta: {
          title: "路由-评论"
        }
      },
      {
        path: "/router/about",
        name: "router-about",
        component: () => import("../views/nav1/About.vue"),
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
