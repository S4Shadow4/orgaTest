import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Enregistrement des composants nécessaires pour Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  // Données pour le graphique
  const data = {
    labels: ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin"],
    datasets: [
      {
        label: "Ayimolou",
        data: [20, 30, -10, 40, -20, 10],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
      {
        label: "dèguè",
        data: [15, -25, 20, -15, 30, -10],
        backgroundColor: "rgba(255, 99, 132, 0.6)",
      },
      {
        label: "Spaghetti",
        data: [-10, 10, 15, -5, 20, 25],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  // Options pour le graphique
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        /* text: "Analyse des ventes (Fcfa)", */
      },
    },
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Barre latérale */}
      <aside className="w-64 bg-white border-r border-gray-200">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-orange-600">Pro Orga.</h1>
        </div>
        <nav className="mt-8">
          <ul className="space-y-4">
            <li>
              <a href="#" className="flex items-center text-orange-600 font-semibold">
                <span className="w-6 h-6 mr-3"></span> Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center text-gray-600 hover:text-orange-600">
                <span className="w-6 h-6 mr-3"></span> Commandes
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center text-gray-600 hover:text-orange-600">
                <span className="w-6 h-6 mr-3"></span> Finance
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Contenu principal */}
      <main className="flex-1 p-6">
        {/* En-tête */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Dashboard</h2>
          <a href="#" className="text-orange-600">Déconnexion</a>
        </div>

        {/* Section graphique */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-600">Fcfa</h3>
            <p className="text-4xl font-bold text-blue-600">5,987.34</p>
            <p className="text-gray-400">Analyse des ventes</p>
          </div>
          {/* Intégration du graphique */}
          <Bar data={data} options={options} />
        </div>

        {/* Section résumé */}
        <div className="mt-6">
          <div className="bg-orange-500 p-6 rounded-lg text-white shadow-md">
            <h3 className="text-4xl font-bold">320,000 F cfa</h3>
            <p className="mt-2">220 Ventes <span className="text-gray-300">0 Annulation</span></p>
            <div className="flex space-x-4 mt-4">
              <div>
                <label htmlFor="start-date" className="text-sm">Début</label>
                <input
                  type="date"
                  id="start-date"
                  className="block w-full bg-white text-black px-3 py-2 rounded-lg"
                />
              </div>
              <div>
                <label htmlFor="end-date" className="text-sm">Fin</label>
                <input
                  type="date"
                  id="end-date"
                  className="block w-full bg-white text-black px-3 py-2 rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
