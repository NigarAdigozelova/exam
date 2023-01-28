import About from "../pages/About";
import Blog from "../pages/Blog";
import Home from "../pages/Home";
import MainRoot from "../components/MainRoot";
import NotFound from "../pages/NotFound";
import Portfolio from "../pages/Portfolio";
import Services from "../pages/Services";
import Testimonials from "../pages/Testimonials";
import Contact from "../pages/Contact";

const ROUTES = [
    {
        path: "/",
        element: <MainRoot />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "blog",
                element: <Blog />
            },
            {
                path: "contact",
                element: <Contact />
            },
            {
                path: "portfolio",
                element: <Portfolio />
            },
            {
                path: "services",
                element: <Services />
            },
            {
                path: "testimonial",
                element: <Testimonials />
            },

            {
                path: "*",
                element: <NotFound />
            },
        ]
    }
]
export default ROUTES