using NUnit.Framework;
using System;
namespace api.UnitTests.Tests
{
    public class FibonacciCalculatorTests
    {
        [Test]
        public void Calculate_MaxNIsNotSupported_ThrowsException()
        {
            //Arrange
            var fibonacciCalculator = new api.Services.FibonacciCalculator();

            //Act
            var result = fibonacciCalculator.Calculate(11); //Test with number > MaxN(10)

            //Assert
            Assert.IsTrue(result.Equals("n > 10 is not supported"));
        }
        [Test]
        public void Calculate_FactorialForNumber10_Returns55()
        {
            //Arrange
            var fibonacciCalculator = new api.Services.FibonacciCalculator();

            //Act
            var result = fibonacciCalculator.Calculate(10); //Test with number <= MaxN(10)

            //Assert
            Assert.IsTrue(result.Equals(55));
        }
    }
}

