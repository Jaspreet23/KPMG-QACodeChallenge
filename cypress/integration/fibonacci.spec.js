import fibonacciPage from "../page-objects/fibonacci-page";

describe('Verify that user is able to calculate fibonacci for number 1-10', () => {

  it('should return valid page', () => {
     fibonacciPage.navigate()
     fibonacciPage.validateHeader()
     fibonacciPage.assertElementIsVisible(fibonacciPage.txtNumber)
  });

  it('should return valid fibonacci value for num 1', () => {
      //Enter number
      fibonacciPage.enterNumber(1)

      // # Click calculate button
      fibonacciPage.submit()

      fibonacciPage.assertTextElement(fibonacciPage.lblResult, 1)
  });
  it('should return valid fibonacci value for num 10', () => {
       //Enter number
       fibonacciPage.enterNumber(10)

       // # Click calculate button
       fibonacciPage.submit()

       fibonacciPage.assertTextElement(fibonacciPage.lblResult, 55)
  });

});

describe('Verify that validation is working as expected for the input field', () => {

  it('should return valid page', () => {
     fibonacciPage.navigate()
     fibonacciPage.validateHeader()
     fibonacciPage.assertElementIsVisible(fibonacciPage.txtNumber)
  });

  it('should return validation error message for non-numeric input', () => {
      //Enter number
      fibonacciPage.enterNumber('abc')

      // # Click calculate button
      fibonacciPage.submit()

      //Assert that validation error message is displayed and matches as expected
      fibonacciPage.assertTextElement(fibonacciPage.divErrorMsg, "Please enter the Integer value")
  });
  it('should not return any validation error message for numeric input', () => {
       //Enter number
       fibonacciPage.enterNumber(1)

       // # Click calculate button
       fibonacciPage.submit()

       fibonacciPage.assertTextElement(fibonacciPage.lblResult, 1)
  });
});

describe('Verify that user is able to calculate fibonacci for number > 10', () => {

  it('should return valid page', () => {
     fibonacciPage.navigate()
     fibonacciPage.validateHeader()
     fibonacciPage.assertElementIsVisible(fibonacciPage.txtNumber)
  });

    it('should return validation error message for number > 10', () => {
      //Enter number
      fibonacciPage.enterNumber(11)

      //#Click calculate button
      fibonacciPage.submit()

      fibonacciPage.assertTextElement(fibonacciPage.lblResult, '')
    });
});