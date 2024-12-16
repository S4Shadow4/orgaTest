import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FaChevronDown } from "react-icons/fa";

const SignUpPage: React.FC = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    phone: "",
    city: "",
  });


  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordRepeated, setShowPasswordRepeated] = useState(false);



  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="min-h-screen flex">
      {/* section gauche : visuel d'orgaAfrica */}
        
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
          style={{ left: '35%', top: '8%' }}
        />
        <img
          src="../../images/Group 4506.png"
          alt="orga image"
          className="absolute bottom-20 w-4/4 max-w-md"
        />
      </div>

      {/* section droite : formulaire d'inscription */}

      <div className="flex-1 flex flex-col justify-center items-center p-6 lg:p-16">
        <div className="pr-72">
        <h2 className= "text-3xl font-bold text-F82502 mb-2 inline-start">Inscription</h2>
        <p className= "text-F82502 mb-6">Passer au level des Pro</p>
        </div>

        <form className="w-full max-w-md space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-0">

            <label htmlFor="" className="mt-0 mb-0">Identifiant</label>
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

          <div className="space-y-4">
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

            <div className="relative">
                <label htmlFor="confirmPassword" className="block mb-2">Répéter le Mot de passe</label>
                <input
                  type={showPasswordRepeated ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Répéter Le Mot De Passe"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                />
                <button
                  type="button"
                  onClick={() => setShowPasswordRepeated(!showPasswordRepeated)}
                  className="absolute inset-y-0 mt-8 right-5 flex items-center text-gray-500"
                >
                  {showPasswordRepeated ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
                </button>
              </div>
          </div>


          <div className="space-y-0">
            <label htmlFor="">Pays / Téléphone</label>
            <input
                type="tel"
                name="phone"
                placeholder="00-00-00-00"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
            />
          </div>

          <div className="space-y-0">
            <label htmlFor="">Ville</label>
            <input
                type="text"
                name="city"
                placeholder="LOME"
                value={formData.city}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
            />
          </div>

          <button
            type="submit"
            className="w-full p-6 bg-DB4A2B text-white rounded-lg hover:bg-orange-700 transition-colors font-semibold"
          >
            Inscription
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-600">
          Pas de compte ? <a href="#" className="text-CB2B21 underline">S'inscrire</a>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
