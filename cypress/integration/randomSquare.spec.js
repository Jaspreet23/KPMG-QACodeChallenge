import randomPage from "../page-objects/randomSquare-page";

describe('Verify that user is able to calculate random square', () => {
  it('should return valid page', () => {
     randomPage.navigate()
     randomPage.validateHeader()
     randomPage.assertElementIsVisible(randomPage.txtNumber)
  });
  it('should return valid square value for a random number', () => {
     //Enter number
     randomPage.enterNumber(1)

     // # Click calculate button
     randomPage.submit()

  });
});
describe('Verify that validation is working as expected for the input field', () => {

  it('should return valid page', () => {
     randomPage.navigate()
     randomPage.validateHeader()
     randomPage.assertElementIsVisible(randomPage.txtNumber)
  });

  it('should return validation error message for non-numeric input', () => {
      //Enter number
      randomPage.enterNumber('abc')

      // # Click calculate button
      randomPage.submit()

      //Assert that validation error message is displayed and matches as expected
      randomPage.assertTextElement(randomPage.divErrorMsg, "Please enter the Integer value")
  });
  it('should not return any validation error message for numeric input', () => {
       //Enter number
       randomPage.enterNumber(1)

       // # Click calculate button
       randomPage.submit()

       randomPage.divErrorMsg.should('not.exist');
  });
});
