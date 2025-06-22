import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/login.css';

const Login = () => {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría tu lógica de autenticación
    // Si es exitosa, navega al dashboard
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#243D1D] via-[#2a4a22] to-[#243D1D] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#988E42] rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#988E42] rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-[#988E42] rounded-full blur-2xl"></div>
      </div>

      {/* Contenedor principal */}
      <div className="w-full max-w-md relative z-10">
        {/* Logo y título */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-2xl">
            Sistema de Gestión
          </h1>
          <p className="text-2xl text-[#988E42] font-semibold">
            Finca El Tempisque
          </p>
        </div>

        {/* Formulario */}
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl border border-[#988E42]/20 p-10">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-[#243D1D] mb-3">
              Iniciar Sesión
            </h2>
            <p className="text-lg text-[#988E42] font-medium">
              Ingrese sus credenciales para acceder al sistema
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Campo Usuario */}
            <div>
              <label htmlFor="usuario" className="block text-lg font-bold text-[#243D1D] mb-4">
                Usuario
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                  <svg className="h-6 w-6 text-[#988E42] group-focus-within:text-[#243D1D] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <input
                  id="usuario"
                  type="text"
                  value={usuario}
                  onChange={(e) => setUsuario(e.target.value)}
                  placeholder="Ingrese su nombre de usuario"
                  required
                  className="block w-full pl-14 pr-5 py-5 border-2 border-[#988E42]/30 rounded-2xl text-lg placeholder-[#988E42]/60 focus:outline-none focus:ring-4 focus:ring-[#988E42]/20 focus:border-[#988E42] transition-all bg-white/80 text-[#243D1D] font-medium shadow-inner"
                />
              </div>
            </div>

            {/* Campo Contraseña */}
            <div>
              <label htmlFor="password" className="block text-lg font-bold text-[#243D1D] mb-4">
                Contraseña
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                  <svg className="h-6 w-6 text-[#988E42] group-focus-within:text-[#243D1D] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Ingrese su contraseña"
                  required
                  className="block w-full pl-14 pr-16 py-5 border-2 border-[#988E42]/30 rounded-2xl text-lg placeholder-[#988E42]/60 focus:outline-none focus:ring-4 focus:ring-[#988E42]/20 focus:border-[#988E42] transition-all bg-white/80 text-[#243D1D] font-medium shadow-inner"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-5 flex items-center hover:bg-[#988E42]/10 rounded-r-2xl transition-colors"
                >
                  {showPassword ? (
                    <svg className="h-6 w-6 text-[#988E42] hover:text-[#243D1D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                    </svg>
                  ) : (
                    <svg className="h-6 w-6 text-[#988E42] hover:text-[#243D1D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Opciones adicionales */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="rememberMe"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  className="h-5 w-5 text-[#988E42] focus:ring-[#988E42]/30 border-[#988E42]/50 rounded transition-colors"
                />
                <label htmlFor="rememberMe" className="ml-3 block text-base font-semibold text-[#243D1D]">
                  Recordar sesión
                </label>
              </div>
              <Link 
                to="/forgot-password" 
                className="text-base font-semibold text-[#988E42] hover:text-[#243D1D] hover:underline transition-colors"
              >
                ¿Olvidó su contraseña?
              </Link>
            </div>

            {/* Botón de envío */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#988E42] to-[#8a7f3a] hover:from-[#8a7f3a] hover:to-[#7a7235] focus:ring-4 focus:ring-[#988E42]/30 text-white font-bold py-5 px-6 rounded-2xl text-xl transition-all duration-300 transform hover:scale-[1.02] focus:outline-none shadow-xl hover:shadow-2xl"
            >
              Iniciar Sesión
            </button>
          </form>

          {/* Información adicional */}
          <div className="mt-10 pt-8 border-t-2 border-[#988E42]/20">
            <p className="text-sm text-[#988E42] text-center font-medium">
              Si tiene problemas para acceder, contacte al administrador del sistema
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-10">
          <p className="text-lg text-[#988E42] font-medium">
            © 2025 Finca El Tempisque. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
