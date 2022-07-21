import React from "react";

const footer = () => {
    return (
        <footer className="p-4 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">¿Quieres un sitio como este? © {new Date().getFullYear()} <a href="https://xvimnt.github.io/" className="hover:underline">Xvimnt™</a>. All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                </li>
            </ul>
        </footer>
    )
}

export default footer