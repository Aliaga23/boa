import React, { useState } from 'react';
import logoBoa from '../assets/boa.png'; 
import fondo from '../assets/fondo.jpg'; 
import {  FaPlaneDeparture, FaPlane, FaBell, FaClock, FaWheelchair, FaBuilding } from 'react-icons/fa'; 

const airports = [
  { city: 'La Paz', country: 'BOLIVIA', iata: 'LPB', airport: 'Airport Internacional El Alto' },
  { city: 'Cochabamba', country: 'BOLIVIA', iata: 'CBB', airport: 'Airport Internacional Jorge Wilstermann' },
  { city: 'Santa Cruz', country: 'BOLIVIA', iata: 'VVI', airport: 'Airport Internacional Viru Viru' },
  { city: 'Potosí', country: 'BOLIVIA', iata: 'POI', airport: 'Airport Capitán Nicolas Rojas' },
  { city: 'Oruro', country: 'BOLIVIA', iata: 'ORU', airport: 'Airport Internacional Juan Mendoza' },
  { city: 'Sucre', country: 'BOLIVIA', iata: 'SRE', airport: 'Airport Internacional Alcantari' },
  { city: 'Tarija', country: 'BOLIVIA', iata: 'TJA', airport: 'Airport Capitán Oriel Lea Plaza' },
];

function Landing() {
  const [tripType, setTripType] = useState('ida_vuelta'); 
  const [selectedOrigin, setSelectedOrigin] = useState('Santa Cruz');
  const [selectedOriginIATA, setSelectedOriginIATA] = useState('VVI');
  const [selectedDestination, setSelectedDestination] = useState('La Paz');
  const [selectedDestinationIATA, setSelectedDestinationIATA] = useState('LPB');
  const [showOriginList, setShowOriginList] = useState(false);
  const [showDestinationList, setShowDestinationList] = useState(false);

  const handleSelectOrigin = (city, iata) => {
    setSelectedOrigin(city);
    setSelectedOriginIATA(iata);
    setShowOriginList(false);
  };

  const handleSelectDestination = (city, iata) => {
    setSelectedDestination(city);
    setSelectedDestinationIATA(iata);
    setShowDestinationList(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="absolute top-0 w-full z-50">
        <div className="flex justify-between items-center px-8 py-4">
          <img src={logoBoa} alt="BoA Logo" className="h-12" />
          <nav className="space-x-8 text-white text-lg font-medium">
            <a href="#viajes" className="hover:text-blue-300">Viajes</a>
            <a href="#elevate" className="hover:text-blue-300">Elévate</a>
            <a href="#ayuda" className="hover:text-blue-300">Centro de Ayuda</a>
          </nav>
          <div className="flex space-x-2 items-center">
            <span className="text-white font-medium">ES</span>
            <span className="text-white font-medium">BOLIVIA</span>
          </div>
        </div>
      </header>

      <div className="relative bg-cover bg-center h-[500px] flex items-center justify-center" style={{ backgroundImage: `url(${fondo})` }}>
        <div className="absolute inset-0 bg-blue-900 bg-opacity-50"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-white text-6xl font-extrabold">¡Haz tus sueños realidad!</h1>
          <p className="text-white mt-4 text-2xl font-light">Descubre nuevas emociones en cada uno de nuestros destinos</p>
        </div>
      </div>

      <section className="relative -mt-20 max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-lg z-20">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-700">Reserva</h2>
          <div className="flex space-x-4">
            <button
              className={`px-6 py-2 rounded-lg ${tripType === 'ida_vuelta' ? 'bg-yellow-400 text-white' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => setTripType('ida_vuelta')}
            >
              Ida y Vuelta
            </button>
            <button
              className={`px-6 py-2 rounded-lg ${tripType === 'solo_ida' ? 'bg-yellow-400 text-white' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => setTripType('solo_ida')}
            >
              Solo Ida
            </button>
          </div>
        </div>
        <form className="grid grid-cols-12 gap-4 items-center">
          {/* Origen */}
          <div className="col-span-2 relative">
            <label className="block text-gray-700 mb-2">Origen</label>
            <div
              className="flex items-center justify-between p-3 border border-gray-300 rounded-lg bg-white cursor-pointer"
              onClick={() => setShowOriginList(!showOriginList)}
            >
              <span>{selectedOrigin}</span>
              <span className="bg-blue-600 text-white px-2 py-1 rounded-lg">{selectedOriginIATA}</span>
            </div>
            {showOriginList && (
              <div className="absolute z-10 bg-white border border-gray-300 mt-2 w-full max-h-64 overflow-y-auto rounded-lg shadow-lg">
                {airports.map((airport) => (
                  <div
                    key={airport.iata}
                    className="flex justify-between items-center p-3 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleSelectOrigin(airport.city, airport.iata)}
                  >
                    <div className="flex items-center space-x-2">
                      <FaPlane className="text-blue-600" />
                      <div>
                        <span className="font-bold">{airport.city}</span>
                        <span className="block text-gray-600 text-sm">{airport.country}</span>
                      </div>
                    </div>
                    <div>
                      <span className="block text-gray-500 text-sm">{airport.iata}</span>
                      <span className="block text-gray-500 text-xs">{airport.airport}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Destino */}
          <div className="col-span-2 relative">
            <label className="block text-gray-700 mb-2">Destino</label>
            <div
              className="flex items-center justify-between p-3 border border-gray-300 rounded-lg bg-white cursor-pointer"
              onClick={() => setShowDestinationList(!showDestinationList)}
            >
              <span>{selectedDestination}</span>
              <span className="bg-blue-600 text-white px-2 py-1 rounded-lg">{selectedDestinationIATA}</span>
            </div>
            {showDestinationList && (
              <div className="absolute z-10 bg-white border border-gray-300 mt-2 w-full max-h-64 overflow-y-auto rounded-lg shadow-lg">
                {airports.map((airport) => (
                  <div
                    key={airport.iata}
                    className="flex justify-between items-center p-3 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleSelectDestination(airport.city, airport.iata)}
                  >
                    <div className="flex items-center space-x-2">
                      <FaPlane className="text-blue-600" />
                      <div>
                        <span className="font-bold">{airport.city}</span>
                        <span className="block text-gray-600 text-sm">{airport.country}</span>
                      </div>
                    </div>
                    <div>
                      <span className="block text-gray-500 text-sm">{airport.iata}</span>
                      <span className="block text-gray-500 text-xs">{airport.airport}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Salida */}
          <div className="col-span-2 relative">
            <label className="block text-gray-700 mb-2">Salida</label>
            <input type="date" className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200" />
          </div>
          {/* Regreso (Solo aparece si es ida y vuelta) */}
          {tripType === 'ida_vuelta' && (
            <div className="col-span-2 relative">
              <label className="block text-gray-700 mb-2">Regreso</label>
              <input type="date" className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200" />
            </div>
          )}
          {/* Pasajeros */}
          <div className="col-span-2">
            <label className="block text-gray-700 mb-2">Pasajeros</label>
            <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200">
              <option>1 Adulto</option>
              <option>2 Adultos</option>
              <option>3 Adultos</option>
            </select>
          </div>
          {/* Botón de búsqueda */}
          <div className="col-span-2">
            <button className="bg-blue-600 text-white w-full py-3 rounded-md hover:bg-blue-700 transition-all flex items-center justify-center">
              <FaPlaneDeparture className="mr-2" /> Buscar vuelo
            </button>
          </div>
        </form>
      </section>

      {/* Sección de Accesos Rápidos */}
      <section className="mt-16 px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-left mb-8">Accesos Rápidos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-4">
            <FaBell className="text-blue-600 text-4xl" />
            <div>
              <h3 className="text-xl font-semibold text-blue-700">Avisos Importantes</h3>
              <p className="text-gray-600">Entérate de las últimas noticias, eventos y anuncios importantes.</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-4">
            <FaBuilding className="text-blue-600 text-4xl" />
            <div>
              <h3 className="text-xl font-semibold text-blue-700">Nuestras Oficinas</h3>
              <p className="text-gray-600">Descubre nuestras oficinas y horarios de atención. Estamos aquí para ayudarte cuando lo necesites.</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-4">
            <FaClock className="text-blue-600 text-4xl" />
            <div>
              <h3 className="text-xl font-semibold text-blue-700">Hora Límite</h3>
              <p className="text-gray-600">Asegúrate de llegar a tiempo para iniciar tu viaje y mejorar tu experiencia.</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-4">
            <FaWheelchair className="text-blue-600 text-4xl" />
            <div>
              <h3 className="text-xl font-semibold text-blue-700">Asistencia Especial</h3>
              <p className="text-gray-600">Nos preocupamos por tus necesidades. Contamos con servicio exclusivo para atenderte.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pie de página */}
      <footer className="bg-blue-900 text-white mt-16 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h4 className="text-lg font-bold mb-4">Acerca de BoA</h4>
            <ul>
              <li><a href="/" className="hover:underline">BoA Institucional</a></li>
              <li><a href="/" className="hover:underline">Responsabilidad Social</a></li>
              <li><a href="/" className="hover:underline">Perfil Corporativo</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Información Legal</h4>
            <ul>
              <li><a href="/" className="hover:underline">Nuestras Tarifas</a></li>
              <li><a href="/" className="hover:underline">Contrato de Transporte</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Contáctanos</h4>
            <ul>
              <li><a href="/" className="hover:underline">Contact Center</a></li>
              <li><a href="/" className="hover:underline">Nuestras Oficinas</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8">
          <p>© 2024 Boliviana de Aviación. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default Landing;
