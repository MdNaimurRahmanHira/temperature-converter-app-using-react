export default function Calculator({scale, temperature,ontemperatureChange}) {


    return (
      <>
        <fieldset>
          <legend>Enter the temperature value in {scale}</legend>
          <input type="text" value={temperature} onChange={(e)=>{ontemperatureChange(e, scale)}} />
        </fieldset>
      </>
    )
}
