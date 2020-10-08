import React, { useState } from 'react';
import { Layout } from '../shared/layout';
import axios from 'axios';

export const RandomSquare = () => {
   const [number, setNumber] = useState(0);
   const [result, setResult] = useState();
   const [validation, setValidation] = useState();

    function myClick(){
       const regexp = new RegExp(`^-?[0-9]*$`);
       if (regexp.test(number)) {
         setValidation(false);
         axios.get(`http://localhost:3001/api/math/random-square/`+ number)
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
        <Layout pageId="randomSquare">
            <p id="content-random-header">
                Calculate random square (i.e. rand(0, n)^2), where random number is between 0 and n.
            </p>
            <p>
                User inputs a number (n) in a textbox, then clicks a button to calculate Power square of a random number between (0,n).
                Then the correct result is displayed on the page.
            </p>
            <form>
              <label>
                Enter a number<br/>
              </label>
              <input id="txtNumber" type="text" name="name" value={number} onChange= {(e) =>{setNumber(e.target.value);}}/>
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