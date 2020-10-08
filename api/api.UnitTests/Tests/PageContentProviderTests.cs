using NUnit.Framework;
using System;

namespace api.UnitTests.Tests
{
    public class PageContentProviderTests
    {
        [Test]
        public void Calculate_PageContentGetForHome_ReturnsHome()
        {
            //Arrange
            var pageContentProviderTests = new api.Services.PageContentProvider();

            //Act
            var result = pageContentProviderTests.Get("home"); 

            //Assert
            Assert.IsTrue(result.Equals("Home"));
        }
        [Test]
        public void Calculate_PageContentGetForFactorial_ReturnsN()
        {
            //Arrange
            var pageContentProviderTests = new api.Services.PageContentProvider();

            //Act
            var result = pageContentProviderTests.Get("factorial"); 

            //Assert
            Assert.IsTrue(result.Equals("N!"));
        }
        [Test]
        public void Calculate_PageContentGetForFibonacci_ReturnsFib()
        {
            //Arrange
            var pageContentProviderTests = new api.Services.PageContentProvider();

            //Act
            var result = pageContentProviderTests.Get("fibonacci"); 

            //Assert
            Assert.IsTrue(result.Equals("Fib(n)"));
        }
        [Test]
        public void Calculate_PageContentGetForRandomSquare_ReturnsFib()
        {
            //Arrange
            var pageContentProviderTests = new api.Services.PageContentProvider();

            //Act
            var result = pageContentProviderTests.Get("randomSquare");

            //Assert
            Assert.IsTrue(result.Equals("Random square"));
        }
    }
}
