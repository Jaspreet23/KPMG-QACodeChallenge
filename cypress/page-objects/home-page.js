const {
  get,
  visit,
  contains
} = cy;

class HomePage {
  get header(){
    return get('.header h1')
  }
  get sideMenu(){
      return get('.side-menu')
  }

  navigate() {
    visit("http://localhost:3000/home")
  }
  validateHeader(){
    this.assertTextElement(this.header, "Home")
  }

  //Todo: the following functions can be moved to a separate util file
  assertTextElement(el, expectedText){
    el.should('have.text', expectedText)
  }

  assertElementIsVisible(el){
    el.should('be.visible')
  }

}
export default new HomePage();