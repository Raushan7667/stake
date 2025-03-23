import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  const [playerAName, setPlayerAName] = useState("");
  const [playerBName, setPlayerBName] = useState("");
  const [playerAInvestment, setPlayerAInvestment] = useState("");
  const [playerBInvestment, setPlayerBInvestment] = useState("");
  const [playerAGain, setPlayerAGain] = useState("");
  const [playerBGain, setPlayerBGain] = useState("");
  const [result, setResult] = useState("");

  const calculatePayment = () => {
    const aInv = parseFloat(playerAInvestment) || 0;
    const bInv = parseFloat(playerBInvestment) || 0;
    const aGain = parseFloat(playerAGain) || 0;
    const bGain = parseFloat(playerBGain) || 0;

    const totalInvestment = aInv + bInv;
    const equalInvestment = totalInvestment / 2;
    const investmentDiffA = equalInvestment - aInv;
    const investmentDiffB = bInv - equalInvestment;

    const totalGain = aGain + bGain;
    const equalGain = totalGain / 2;
    const gainDiffA = equalGain - aGain;
    const gainDiffB = bGain - equalGain;

    const netPaymentAtoB = investmentDiffA - gainDiffA;

    if (netPaymentAtoB > 0) {
      setResult(`${playerAName || "Player A"} pays ${netPaymentAtoB.toFixed(2)} rupees to ${playerBName || "Player B"}`);
    } else if (netPaymentAtoB < 0) {
      setResult(`${playerBName || "Player B"} pays ${Math.abs(netPaymentAtoB).toFixed(2)} rupees to ${playerAName || "Player A"}`);
    } else {
      setResult("No payment needed, both are equal!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
      <div className="bg-white bg-opacity-90 backdrop-blur-md p-8 rounded-xl shadow-2xl w-full max-w-4xl flex flex-col transform transition-all hover:scale-105">
        {/* Logo and Title */}
        <div className="flex items-center justify-center mb-6">
          <img src={logo} alt="Logo" className="w-12 h-12 animate-spin-slow" />
          <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-600 ml-4">
            Money Splitter
          </h1>
        </div>

        {/* Two-Part Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Player A Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-800 text-center">First Player</h2>
            <div>
              <label className="block text-sm font-semibold text-gray-800">
                Name
              </label>
              <input
                type="text"
                value={playerAName}
                onChange={(e) => setPlayerAName(e.target.value)}
                placeholder="Enter First Player Name"
                className="mt-2 w-full p-3 bg-gray-100 text-gray-800 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-800">
                Investment (₹)
              </label>
              <input
                type="number"
                value={playerAInvestment}
                onChange={(e) => setPlayerAInvestment(e.target.value)}
                placeholder="e.g., 100"
                className="mt-2 w-full p-3 bg-gray-100 text-gray-800 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-800">
                Gain (₹)
              </label>
              <input
                type="number"
                value={playerAGain}
                onChange={(e) => setPlayerAGain(e.target.value)}
                placeholder="e.g., 90"
                className="mt-2 w-full p-3 bg-gray-100 text-gray-800 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
              />
            </div>
          </div>

          {/* Player B Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-800 text-center">Second Player</h2>
            <div>
              <label className="block text-sm font-semibold text-gray-800">
                Name
              </label>
              <input
                type="text"
                value={playerBName}
                onChange={(e) => setPlayerBName(e.target.value)}
                placeholder="Enter Second Player Name"
                className="mt-2 w-full p-3 bg-gray-100 text-gray-800 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-800">
                Investment (₹)
              </label>
              <input
                type="number"
                value={playerBInvestment}
                onChange={(e) => setPlayerBInvestment(e.target.value)}
                placeholder="e.g., 120"
                className="mt-2 w-full p-3 bg-gray-100 text-gray-800 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-800">
                Gain (₹)
              </label>
              <input
                type="number"
                value={playerBGain}
                onChange={(e) => setPlayerBGain(e.target.value)}
                placeholder="e.g., 180"
                className="mt-2 w-full p-3 bg-gray-100 text-gray-800 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
              />
            </div>
          </div>
        </div>

        {/* Calculate Button */}
        <button
          onClick={calculatePayment}
          className="mt-8 w-full bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-3 rounded-lg font-semibold hover:from-indigo-700 hover:to-blue-600 transform hover:scale-105 transition duration-300"
        >
          Calculate Now
        </button>

        {/* Result */}
        {result && (
          <div className="mt-6 p-4 bg-gradient-to-r from-green-400 to-teal-400 text-white rounded-lg text-center font-medium animate-fade-in">
            {result}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;