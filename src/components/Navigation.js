import React from 'react'

export default function Navigation() {
    return (
        <nav className="fixed top-0 font-sans flex flex-col text-center content-center py-2 px-6 bg-transparent w-full text-white z-50">
            <div className="mb-2 sm:mb-0 flex flex-row
  ">
            </div>
            <div className="sm:mb-0 self-center">
                <a href="#" className="text-md no-underline ml-2 px-1 py-1 border-b-2 border-transparent transition duration-500 ease-in-out transform hover:border-white">Accueil </a>
                <a href="#" className="text-md no-underline ml-2 px-1 py-1 border-b-2 border-transparent transition duration-500 ease-in-out transform hover:border-white">A propos </a>
                <a href="#" className="text-md no-underline ml-2 px-1 py-1 border-b-2 border-transparent transition duration-500 ease-in-out transform hover:border-white">Compétences </a>
                <a href="#" className="text-md no-underline ml-2 px-1 py-1 border-b-2 border-transparent transition duration-500 ease-in-out transform hover:border-white">Diplômes </a>
                <a href="#" className="text-md no-underline ml-2 px-1 py-1 border-b-2 border-transparent transition duration-500 ease-in-out transform hover:border-white">Contact </a>
            </div>
        </nav>

    )
}
