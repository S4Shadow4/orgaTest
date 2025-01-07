import React, { useState } from "react";
import { commandes as commandesData } from "../data/commandes";

interface Commande {
  id: number;
  nom: string;
  emporter: boolean;
  pourcentage: number;
  articles: { nom: string; prix: number }[];
  total: number;
}

const CommandesPage = () => {
  const [commandes, setCommandes] = useState<Commande[]>(commandesData);
  const [selectedCommande, setSelectedCommande] = useState<Commande | null>(
    null
  );

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
              <a
                href="#"
                className="flex items-center text-gray-600 hover:text-orange-600"
              >
                 Commandes
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Contenu principal */}
      <main className="flex-1 p-6">
        {/* En-tête */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Commandes</h2>
          <div>
            <label className="mr-2 text-gray-600">31/07/2024</label>
          </div>
        </div>

        <div className="flex">
          {/* Liste des commandes */}
          <div className="w-1/2 space-y-4">
            {commandes.map((commande) => (
              <div
                key={commande.id}
                onClick={() => setSelectedCommande(commande)}
                className={`p-4 border rounded-lg cursor-pointer ${
                  selectedCommande?.id === commande.id
                    ? "border-orange-500"
                    : "border-gray-200"
                } bg-gray-100`}
              >
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-lg font-bold">{commande.nom}</h3>
                    <p className="text-gray-500">{commande.pourcentage}%</p>
                  </div>
                  <div>
                    <label className="inline-flex items-center">
                      <span className="mr-2">Emporter</span>
                      <input
                        type="checkbox"
                        checked={commande.emporter}
                        onChange={(e) =>
                          setCommandes((prev) =>
                            prev.map((c) =>
                              c.id === commande.id
                                ? { ...c, emporter: e.target.checked }
                                : c
                            )
                          )
                        }
                        className="form-checkbox"
                      />
                    </label>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Détails de la commande */}
          <div className="w-1/2 ml-4 bg-white p-6 rounded-lg shadow-md">
            {selectedCommande ? (
              <>
                <h3 className="text-4xl font-bold text-orange-500 mb-4">
                  {selectedCommande.total} F CFA
                </h3>
                <div className="mb-4">
                  <label className="inline-flex items-center">
                    <span className="mr-2">Emporter</span>
                    <input
                      type="checkbox"
                      checked={selectedCommande.emporter}
                      onChange={(e) =>
                        setCommandes((prev) =>
                          prev.map((c) =>
                            c.id === selectedCommande.id
                              ? { ...c, emporter: e.target.checked }
                              : c
                          )
                        )
                      }
                      className="form-checkbox"
                    />
                  </label>
                </div>
                <div>
                  {selectedCommande.articles.map((article, index) => (
                    <div
                      key={index}
                      className="flex justify-between py-2 border-b border-gray-200"
                    >
                      <span>{article.nom}</span>
                      <span>{article.prix} F CFA</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <button className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg">
                    Valider
                  </button>
                </div>
              </>
            ) : (
              <p className="text-gray-500">Sélectionnez une commande</p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default CommandesPage;
