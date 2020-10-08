import factorialPage from "../page-objects/factorial-page";

describe('Verify that user is able to calculate factorial for number 1-10', () => {
  it('should return valid page', () => {
     factorialPage.navigate()
     factorialPage.validateHeader()

     factorialPage.assertElementIsVisible(factorialPage.txtNumber)

  });
  it('should return valid factorial value for num 1', () => {

        //Enter number
        factorialPage.enterNumber(1)

        // # Click calculate button
        factorialPage.submit()

        factorialPage.assertTextElement(factorialPage.lblResult, 1)

  });
  it('should return valid factorial value for num 10', () => {

      //Enter number
      factorialPage.enterNumber(10)

      // # Click calculate button
      factorialPage.submit()

      factorialPage.assertTextElement(factorialPage.lblResult, 3628800)

   });
});

describe('Verify that validation is working as expected for the input field', () => {

  it('should return valid page', () => {
     factorialPage.navigate()
     factorialPage.validateHeader()
     factorialPage.assertElementIsVisible(factorialPage.txtNumber)
  });

  it('should return validation error message for non-numeric input', () => {
      //Enter non numeric text
      factorialPage.enterNumber('abc')

      // # Click calculate button
      factorialPage.submit()

      //Assert that validation error message is displayed and matches as expected
      factorialPage.assertTextElement(factorialPage.divErrorMsg, "Please enter the Integer value")


  });
  it('should not return any validation error message for numeric input', () => {
       //Enter number
       factorialPage.enterNumber(1)

       // # Click calculate button
       factorialPage.submit()


  });
});

describe('Verify that user is able to calculate fibonacci for number > 10', () => {

  it('should return valid page', () => {
     factorialPage.navigate()
     factorialPage.validateHeader()
     factorialPage.assertElementIsVisible(factorialPage.txtNumber)
  });
  it('should return validation error message for number > 10', () => {
     //Enter number
     factorialPage.enterNumber(11)

     // # Click calculate button
     factorialPage.submit()

     factorialPage.assertTextElement(factorialPage.lblResult, '')
  });
});