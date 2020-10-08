using NUnit.Framework;
using System;
namespace api.UnitTests.Tests
{
    public class RandomSquareCalculatorTests
    {

        [Test]
        public void Calculate_RandomSquareOf2_Returns4()
        {
            //Arrange
            var randomSquareCalculator = new api.Services.RandomSquareCalculator();

            //Act
            var result = randomSquareCalculator.Calculate(2);

            //Assert
            Assert.IsTrue(result.Equals(4));
        }
    }
}
