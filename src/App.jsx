import React, { useState } from 'react';
import CurrencyForm from './components/currform';
import ConvertButton from './components/convBtn.jsx';
import UseCurr from './custHooks/UseCurr.js';
const App = () => {
  const [amount,setAmount]=useState();
  const [from,setFrom]=useState("usd");
  const [to,setTo]=useState("inr");
  const [convertedAmount,setConvertedAmount]=useState(0);
  const currencyInfo=UseCurr(from);
 const options= Object.keys(currencyInfo);
const swap=(e)=>{e.preventDefault();setFrom(to);setTo(from);setConvertedAmount(amount);setAmount(convertedAmount);}
const convert=()=>{setConvertedAmount(amount*currencyInfo[to])}
  return (
    <div className=" bg-[url('https://img.freepik.com/free-photo/top-view-bitcoin-dollar-bills_23-2148285338.jpg?ga=GA1.1.1826489200.1724339438&semt=ais_hybrid&w=740')] min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-purple-100 to-pink-100 px-4">
      <form    className="relative bg-white rounded-3xl shadow-2xl p-6 sm:p-8 w-100 h-120 max-w-lg sm:max-w-2xl">
        
       
        <div 
       
         className="relative z-10 ">
          <CurrencyForm  
           label="From"
        amount={amount}
        currencyOptions={options}
        onAmountChange={(amount)=>setAmount(amount)}
        onCurrencyChange={(currency)=>setFrom(currency)}
        selectCurrency={from}
          />
        </div>

        <div className="relative z-20 flex justify-center ">
          <button
          onClick={swap}
            className="z-20 mt-1 mb-1 flex items-center gap-2 px-1 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                       text-white font-semibold text-base sm:text-lg rounded-2xl shadow-lg
                       cursor-pointer select-none hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 4v6h6M20 20v-6h-6M4 10a9 9 0 0115.5-3.5M20 14a9 9 0 01-15.5 3.5"
              />
            </svg>
            Swap
          </button>
        </div>

        <div 
         
        className="relative z-10">
          <CurrencyForm 
          readonly={true}
           label="To"
        amount={convertedAmount}
        currencyOptions={options}
        onCurrencyChange={(currency)=>setTo(currency)}
        selectCurrency={to}
         />
        </div>

        <div onClick={(e)=>{
            e.preventDefault();
            convert();
          }} className="mt-8 flex justify-center">
          <ConvertButton />
        </div>
      </form>
    </div>
  );
};

export default App;
