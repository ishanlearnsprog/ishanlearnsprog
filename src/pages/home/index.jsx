import { Introduction } from "./Introduction.jsx";
import { About } from "./About.jsx";
import { WebDev } from "./WebDev.jsx";
import { Contact } from "./Contact.jsx";

export const Home = () => {
    return (
        <main>
            <Introduction></Introduction>
            <About></About>
            <WebDev></WebDev>
            <Contact></Contact>
        </main>
    )
}