import React,{ useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import '@fortawesome/fontawesome-free/css/all.min.css';

const LoginPage: React.FC = () => {
  
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="flex min-h-screen bg-gray-50"> 

      {/* Section gauche : Formulaire de connexion */}
      <div className="flex-1 flex flex-col justify-center items-center p-6 lg:p-16 space-y-4">
        <div className="pr-64">
        <h1 className="text-4xl font-bold text-F82502">Connexion</h1>
        <p className="text-F82502 mt-2 pb-10">Vos clients vous attendent</p>
        </div>

        <form className="w-full max-w-md space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-0">

            <label htmlFor="">Identifiant</label>
            <input
                type="text"
                name="username"
                placeholder="Nom D'Utilisateur"
                value={formData.username}
                onChange={handleChange}
                required
                className="w-full p-3  border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
              />
          </div> 

          <div className="relative">
              <label htmlFor="password" className="block mb-2">Mot de passe</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Mot de passe"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 mt-8 right-5 flex items-center text-gray-500"
              >
                {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
              </button>
            </div>
          
          <div className="pt-20">
          <button
            type="submit"
            className="w-full p-6 bg-DB4A2B text-white rounded-lg hover:bg-orange-700 transition-colors font-semibold"
          >
            Connexion
          </button>
          </div>
        </form>

        <p className="mt-4 text-sm">
          Pas de compte ?{" "}
          <a href="/signup" className="text-CB2B21 hover:underline">
            S'inscrire
          </a>
        </p>
      </div>

      {/* section droite : visuel d'orgaAfrica */}


      <div className="hidden lg:flex flex-1 text-white flex-col justify-center items-center text-center p-8 rounded">

        <img
          src="/images/Rectangle 1.png"
          alt="orga image"
          className="relative w-4/4 max-w-xl"
        />  
        <img
          src="/images/Group 4505.png"
          alt="orga image"
          className="absolute"
          style={{ right: '1%',top: '8%' }}
        />
        <img
          src="../../images/Group 4506.png"
          alt="orga image"
          className="absolute bottom-20 w-4/4 max-w-md"
        />
      </div>
    </div>
  );
};

export default LoginPage;
