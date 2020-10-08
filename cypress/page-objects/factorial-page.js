const {
  get,
  visit,
  contains
} = cy;

class FactorialPage {

  get header(){
    return get('[id=content-fact-header]')
  }

  get txtNumber(){
    return get('#txtNumber')
  }

  get lblResult(){
    return get('#lblResult')
  }

  get btnCalculate(){
    return get('#btnCalculate')
  }

  get divErrorMsg(){
    return get('[id=divErrorMsg]')
  }

  navigate() {
    visit("http://localhost:3000/factorial")
  }

  enterNumber(num){
    this.txtNumber.clear()
    this.txtNumber.type(num)
  }
  validateHeader(){
    this.assertTextElement(this.header, "Calculate factorial (n!)")
  }
  submit(){
     this.btnCalculate.click();
  }

  //Todo: the following functions can be moved to a separate util file
  assertTextElement(el, expectedText){
    el.should('have.text', expectedText)
  }

  assertElementIsVisible(el){
    el.should('be.visible')
  }

  clickOnVisibleElement(el){
    el.should('be.visible')
    el.click()
  }


}
export default new FactorialPage();