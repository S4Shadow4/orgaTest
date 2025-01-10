import React, { useState } from "react";
import axios  from "axios";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FaChevronDown } from "react-icons/fa";
import { handleApiCall,ApiResponse } from "../utils/api";


const SignUpPage: React.FC = () => {
  const [signupData, setSignupData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    phone_number: "",
    city: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordRepeated, setShowPasswordRepeated] = useState(false);

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [responseMessage, setResponseMessage] = useState<ApiResponse | null>(
    null
  );
  
/*   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }; */

    const handleSignup = async (e: React.FormEvent) => {
      e.preventDefault();
      const { username, password, confirmPassword, phone_number, city } = signupData;
  
      if (password !== confirmPassword) {
        setErrorMessage("Les mots de passe ne correspondent pas.");
        return;
      }
      console.log(username, password, confirmPassword, phone_number, city)
  
      setErrorMessage(null); // effacement des erreurs précédentes
      const response = await handleApiCall("/api/v1/auth/vendor/sign-up", "POST", { username, password, phone_number, city });
      setResponseMessage(response);
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

        <form onSubmit={handleSignup} className="w-full max-w-md space-y-4">
          <div className="space-y-0">

            <label htmlFor="" className="mt-0 mb-0">Identifiant</label>
            <input
                type="text"
                name="username"
                placeholder="Nom D'Utilisateur"
                value={signupData.username}
                onChange={(e) =>
                  setSignupData({ ...signupData, username: e.target.value})
                }
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
                value={signupData.password}
                onChange={(e) =>{
                  setSignupData({ ...signupData, password: e.target.value})
                }}
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
                  value={signupData.confirmPassword}
                  onChange={(e) =>{
                    setSignupData({
                      ...signupData,
                      confirmPassword: e.target.value
                    })
                  }}
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
          
          {errorMessage && (
            <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
          )}


          <div className="space-y-0">
            <label htmlFor="">Téléphone</label>
            <input
                type="tel"
                inputMode="numeric"
                pattern="\d*"
                maxLength={8} 
                name="phone_number"
                placeholder="00-00-00-00"
                onChange={(e) => {
                  const value = e.target.value;
                  if (/^\d*$/.test(value)) {
                    setSignupData({
                      ...signupData,
                      phone_number: value,
                    });
                  }
                }}
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
                value={signupData.city}
                onChange={(e)=>{
                  setSignupData({
                    ...signupData,
                    city: e.target.value
                  })
                }}
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
        
        {responseMessage && (
          <div
            className={`p-4 rounded ${
              responseMessage.success
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {responseMessage.message}
          </div>
        )}

        <p className="mt-4 text-sm text-gray-600">
          Votre compte existe ? <a href="/login" className="text-CB2B21 underline">Se connecter</a>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
