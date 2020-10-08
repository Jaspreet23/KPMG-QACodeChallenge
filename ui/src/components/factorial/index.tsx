import React, { useState } from 'react';
import { Layout } from '../shared/layout';
import axios from 'axios';

export const Factorial = () => {

const [number, setNumber] = useState(0);
const [result, setResult] = useState();
const [validation, setValidation] = useState();

function myClick(){
  const regexp = new RegExp(`^-?[0-9]*$`);
  if (regexp.test(number)) {
  setValidation(false);
  axios.get(`http://localhost:3001/api/math/factorial/`+ number)
              .then(res => {console.log(res);
                const data = res.data;
                setResult(data.result);
            })
  }
  else{
    setValidation(true);

  }
}

    return (
        <Layout pageId="factorial">
            <p id="content-fact-header">
                Calculate factorial (n!)
            </p>
            <p id="content-fact-sub-header">
                User inputs a number (n) in a textbox, then clicks a button to calculate n! via a corresponding API call.
                Then the correct result is displayed on the page.
            </p>
            <form>
              <label>
                Enter a number<br/>
                <input id="txtNumber" type="text" name="name" value={number} onChange= {(e) =>{setNumber(e.target.value);}}/>
              </label>
              <input id="btnCalculate" type="button" value="Calculate" onClick={myClick}/>
              <br />
              {validation ===true && (
                  <div id="divErrorMsg" style={{color: "red"}}>Please enter the Integer value</div>
                )}
              <p>
                Result :
               <label id="lblResult">
               {result}
               </label>
               </p>
            </form>
        </Layout>
    );
};