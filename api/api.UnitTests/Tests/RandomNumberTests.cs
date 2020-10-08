using NUnit.Framework;
using System;
namespace api.UnitTests.Tests
{
    public class RandomNumberTests
    {
        [Test]
        public void Calculate_MaxIsNotGreaterThan0_ThrowsException()
        {
            //Arrange
            var randomNumber = new api.Services.RandomNumber();

            //Act
            var result = randomNumber.Get(0); 

            //Assert
            Assert.IsTrue(result.Equals("n > 10 is not supported"));
        }
        [Test]
        public void Calculate_MaxNumberIs4_ReturnsRandomNumber()
        {
            //Arrange
            var randomNumber = new api.Services.RandomNumber();

            //Act
            var result = randomNumber.Get(4);

            //Assert
            Assert.IsTrue(result.Equals(3));
        }
    }
}
