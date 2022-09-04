export function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9
}
export function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32
}

export function converter(temperature, convertTo){
    const input = parseFloat(temperature);

    if(Number.isNaN(input)) return ''

   const output = convertTo(input);
   const roundedInput = Math.round(output) ;

   return roundedInput.toString();
    
}