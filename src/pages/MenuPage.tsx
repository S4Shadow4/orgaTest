import React, { useState } from "react";
import { Button, Input } from "../components/ui";
import { Plus, X, ChevronRight } from "lucide-react";

interface Article {
  id: number;
  name: string;
  prix: number;
}

interface Category {
  id: number;
  name: string;
  articles: Article[];
}

const MenuPage: React.FC = () => {

  // Données fictives
  const [categories, setCategories] = useState<Category[]>([
    {
      id: 1,
      name: "Boisson",
      articles: [
        { id: 1, name: "Coca", prix: 200 },
        { id: 2, name: "Cocktail", prix: 300 },
      ],
    },
    {
      id: 2,
      name: "Déjeuner",
      articles: [
        { id: 1, name: "riz", prix: 1500 },
      ],
    },
    {
      id: 3,
      name: "Apéritif",
      articles: [],
    },
    {
      id: 4,
      name: "Petit Déjeuner",
      articles: [],
    },
    {
      id: 5,
      name: "Dîner",
      articles: [],
    },
  ]);

  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [showAddCategory, setShowAddCategory] = useState<boolean>(false);
  const [newCategory, setNewCategory] = useState<string>("");

/*   const handleAddCategory = () => {
    if (newCategory.trim()) {
      setCategories([...categories, { name: newCategory.trim(), count: 0 }]);
      setNewCategory("");
      setShowAddCategory(false);
    }
  }; */

  return (
    <div className="flex h-screen">

      {/* Main Content */}
      <div className="flex-1 p-6 relative">
        <div className="flex items-center justify-between mb-6">
          <div className="flex">
            <Button className=" px-8 mr-2">Menu</Button>
            <Button className="px-1" onClick={() => setShowAddCategory(true)}>
              <Plus className=" mr-1 ml-1" />
            </Button>
          </div>
        </div>

        {/* Category List */}
        <div className="grid grid-cols-1 gap-4 w-2/5">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`flex justify-between items-center bg-gray-200 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-300 ${
                selectedCategory?.id === category.id
                ? "bg-gray-200"
                : "bg-gray-100"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              <span>{category.name}</span>
              <div className="flex items-center">
                <span className="mr-2 bg-DB4A2B text-white px-4 py-2 rounded-full">
                  {category.articles.length}
                </span>
                <ChevronRight />
              </div>
            </div>
          ))}
        </div>

        {/* Details de la catégorie sélectionnée  */}
        {selectedCategory ? (
          <div
            className="absolute top-6 left-32 bg-gray-50 p-6 rounded-lg shadow-lg border w-2/4 mt-16"
            style={{ transform: "translateX(400px)" }}
          >
            <>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">{selectedCategory.name}</h3>
                <div className="flex">                  
                  <span className="mr-2 bg-DB4A2B text-white px-3 py-1 rounded-full items-center"> 1 </span>
                  <Button className="px-0.5 py-0.5" onClick={() => setShowAddCategory(true)}>
                    <Plus className=" mr-1 ml-1" />
                  </Button>
                </div>
              </div>

              {selectedCategory.articles.length > 0 ? (
                <ul className="space-y-2 min-h-64">
                  {selectedCategory.articles.map((article) => (
                    <li
                      key={article.id}
                      className="flex justify-between py-2 border-b border-gray-200"
                    >
                      <span>{article.name}</span>
                      <span>{article.prix} F CFA</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">Aucun article dans cette catégorie.</p>
              )}
            </>
          </div>
        ) : (
          <p className="text-gray-500">Sélectionnez une catégorie pour afficher les détails.</p>
        )}

        {/* Add Category Modal */}
        {showAddCategory && (
          <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-end">
            <div className="bg-white p-6 rounded-lg w-1/3 relative shadow-lg">
              <button
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
                onClick={() => setShowAddCategory(false)}
              >
                <X size={24} />
              </button>
              <h3 className="text-lg font-semibold mb-4">Ajout de catégorie</h3>
              <Input
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                placeholder="Nom de la catégorie"
                className="mb-4"
              />
              <Button
                /* onClick={handleAddCategory} */
                className="bg-red-500 text-black w-full hover:bg-red-600"
              >
                Créer
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuPage;
