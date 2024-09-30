import { jetbrains } from "@/fonts";
import clsx from "clsx";

import {
    faDiscord,
    faSquareGithub,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import LinkFooter from "./LinkFooter";

const Footer = () => {
    return (
        <footer className="bg-jsDark py-6 mt-auto">
            <div className="container mx-auto text-center">
                <p className={clsx("text-white mb-4", jetbrains.className)}>
                    © 2024 Luis Fajardo. All Rights Reserved.
                </p>
                <div className="flex justify-center space-x-0 md:space-x-5">
                    <LinkFooter
                        href={"https://github.com/LuisF-Dev"}
                        containerClassName="bg-transparent flex flex"
                        label="GitHub"
                        icon={faSquareGithub}
                    />
                    <LinkFooter
                        href={"https://discord.com/users/1289701559902408786"}
                        containerClassName="bg-transparent flex flex"
                        label="Discord"
                        icon={faDiscord}
                    />
                    <LinkFooter
                        href={"./"}
                        containerClassName="bg-transparent flex flex"
                        label="Linkedin proximamente"
                        icon={faLinkedin}
                    />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
