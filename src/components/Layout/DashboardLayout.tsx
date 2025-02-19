import React from 'react'
import { Outlet, Link } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Barre latérale */}
      <aside className="w-64 bg-white border-r border-gray-200">
        <div className="p-4">
        <img
          src="../../images/logo_orga.svg"
          alt="orga image"
          className="ml-2"
        />
        </div>
        <nav className="mt-8">
          <ul className="space-y-4 text-dashboard-link">
            <li>
                <Link to="dashboard" className="flex items-center hover:text-orange-600">
                    <span className="w-6 h-6 mr-8">
                      <img
                        src=" ../../images/dashboard_icon.svg"
                        alt="orga image"
                        className="ml-6"
                      />
                    </span>
                      Dashboard 
                </Link>
            </li>
            <li>
                <Link to="commandes" className="flex items-center hover:text-orange-600">
                    <span className="w-6 h-6 mr-8">
                      <img
                        src=" ../../images/commandes_icon.svg"
                        alt="orga image"
                        className="ml-6"
                      />
                    </span> 
                    Commandes
                </Link>
            </li>
            <li>
                <Link to="finance" className="flex items-center hover:text-orange-600">
                    <span className="w-6 h-6 mr-8">
                      <img
                        src=" ../../images/finance_icon.svg"
                        alt="orga image"
                        className="ml-6"
                      />
                    </span> 
                    Finance
                </Link>
            </li>
            <li>
                <Link to="#" className="flex items-center hover:text-orange-600">
                    <span className="w-6 h-6 mr-8">
                      <img
                        src=" ../../images/ia_icon.svg"
                        alt="orga image"
                        className="ml-6"
                      />
                    </span> 
                    IA
                </Link>
            </li>
            <li>
                <Link to="historique" className="flex items-center hover:text-orange-600">
                    <span className="w-6 h-6 mr-8">
                      <img
                        src=" ../../images/historique_icon.svg"
                        alt="orga image"
                        className="ml-6"
                      />
                    </span> 
                    Historique
                </Link>
            </li>
            <li>
                <Link to="#" className="flex items-center hover:text-orange-600">
                    <span className="w-6 h-6 mr-8">
                      <img
                        src=" ../../images/compte_icon.svg"
                        alt="orga image"
                        className="ml-6"
                      />
                    </span> 
                    Compte
                </Link>
            </li>
            <li>
                <Link to="menu" className="flex items-center hover:text-orange-600">
                    <span className="w-6 h-6 mr-8"></span> 
                    Produits
                </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Contenu principal */}
        <main className="flex-1 p-6">
            {/* En-tête */}
            <div className="flex justify-between items-center mb-6">
            <span></span>
            <a href="#" className="text-orange-600">Déconnexion</a>
            </div>
            <Outlet />
        </main>
    </div>
  )
}

export default DashboardLayout
