import React, { useState } from 'react';
import '../styles/login.css'

const Login = () => {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Iniciando sesión con:', usuario, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-100 via-green-100 to-amber-200 p-6">
      <div className="w-full max-w-md backdrop-blur-md bg-white/40 border border-white/20 rounded-2xl shadow-2xl p-8">
        <h1 className="text-3xl font-extrabold text-green-800 text-center mb-6 drop-shadow-sm">
          Bienvenido al Tempisque
        </h1>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-semibold text-green-900 mb-1">
              Usuario
            </label>
            <input
              type="text"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              placeholder="Ingresa tu usuario"
              required
              className="w-full px-4 py-2 rounded-lg bg-white/70 border border-green-300 text-green-900 placeholder-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-green-900 mb-1">
              Contraseña
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Ingresa tu contraseña"
              required
              className="w-full px-4 py-2 rounded-lg bg-white/70 border border-green-300 text-green-900 placeholder-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 shadow-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-700 hover:bg-green-800 text-white font-bold py-2 rounded-lg transition duration-300 shadow-md hover:shadow-lg"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
