const {
  get,
  visit,
  contains
} = cy;

class RandomPage {
  get header(){
    return get('[id=content-random-header]')
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
    visit("http://localhost:3000/random-square")
  }

  enterNumber(num){
    this.txtNumber.clear()
    this.txtNumber.type(num)
  }
  validateHeader(){
    this.assertTextElement(this.header, "Calculate random square (i.e. rand(0, n)^2), where random number is between 0 and n.")
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
export default new RandomPage();