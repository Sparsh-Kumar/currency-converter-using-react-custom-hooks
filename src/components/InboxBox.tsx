import React, { useId } from 'react';

function InputBox({
  label,
  amount,
  className,
  selectedCurrency = 'usd',
  amountDisable = false,
  currencyDisable = false,
  currencyOptions = [],
  onAmountChange,
  onCurrencyChange,
}: {
  label?: string,
  amount?: number,
  className?: string,
  selectedCurrency?: string,
  amountDisable?: boolean,
  currencyDisable?: boolean,
  currencyOptions?: string[],
  onAmountChange?: (e: number) => void,
  onCurrencyChange?: (e: string) => void,
}) {
  const uniqueId = useId();
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label htmlFor={uniqueId} className="text-black/40 mb-2 inline-block">
          {label}
        </label>
        <input
          id={uniqueId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          disabled={currencyDisable}
          value={selectedCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {
            currencyOptions.map((currency: string, idx: number) => (
              <option value={currency} key={idx}>
                {currency}
              </option>
            ))
          }
        </select>
      </div>
    </div>
  )
}

export default InputBox;
