import Characters from "views/Characters.js";

var routes = [
  {
    path: "/characters",
    name: "Characters",
    icon: "tim-icons icon-single-02",
    component: Characters,
    layout: "/admin",
  },
];
export default routes;
