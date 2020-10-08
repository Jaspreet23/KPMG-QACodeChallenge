using NUnit.Framework;
using System;

namespace api.UnitTests.Tests
{
    public class FactorialCalculatorTests
    {
        [Test]
        public void Calculate_MaxNIsNotSupported_ThrowsException()
        {
            //Arrange
            var factorialCalculator = new api.Services.FactorialCalculator();

            //Act
            var result = factorialCalculator.Calculate(11); //Test with number > MaxN(10)

            //Assert
            Assert.IsTrue(result.Equals("n > 10 is not supported"));
        }
        [Test]
        public void Calculate_FactorialForNumber4_Returns24()
        {
            //Arrange
            var factorialCalculator = new api.Services.FactorialCalculator();

            //Act
            var result = factorialCalculator.Calculate(4); //Test with number <= MaxN(10)

            //Assert
            Assert.IsTrue(result.Equals(24));
        }
       
    }
}