import homePage from "../page-objects/home-page";

describe('Verify that user is able to visit Home Page', () => {
  it('should return valid page', () => {
     homePage.navigate()
     homePage.validateHeader()
  });
  it('should show side menu', () => {
       homePage.navigate()
       homePage.validateHeader()
  });
});