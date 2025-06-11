import React from 'react';

const CurrencyForm = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions=[],
  selectCurrency="usd",
  amountDisable=false,
  currencyDisable=false,
  readonly =false,
  className="",
}) => {
  return (
    <div className="bg-gradient-to-br from-[#2a2a40] to-[#1c1c2a] rounded-2xl p-4 sm:p-6 space-y-4 w-full max-w-md">
      
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-10">
        
        <div className="flex flex-col w-full sm:w-auto">
          <label className="text-white font-medium text-sm mb-1">{label}</label>
          <input
            onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
            disabled={amountDisable}
            type="number"
            value={amount}
            placeholder="0"
            readOnly={readonly}
            className="w-full sm:w-24 bg-transparent outline-none text-white text-xl placeholder-gray-400"
          />
        </div>

        <div className="flex flex-col w-full sm:w-auto">
          <label className="text-white font-medium text-sm mb-1">Currency Type</label>
          <div className="relative w-full sm:w-40">
            <select
              disabled={currencyDisable}
              value={selectCurrency}
              onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value) }
              className="appearance-none w-full px-4 py-2 pr-10 bg-[#2e2e42] text-white rounded-lg focus:outline-none focus:ring-0 cursor-pointer transition"
            >
            {currencyOptions.map((currency)=>(
              <option
              key={currency}
               value={currency}
               >{currency}</option>
            ))}
             
            </select>
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CurrencyForm;
