// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){
  test("organization should be nonprofit", function(){
    expect(launchcode.organization).toBe("nonprofit");
  });
  test("executive director should be Jeff", function(){
    expect(launchcode.executiveDirector).toBe("Jeff");
  });
  test("percentage of cool employees should be 100", function(){
    expect(launchcode.percentageCoolEmployees).toBe(100);
  });
  test("programs offered should be ", function(){
    expect(launchcode.programsOffered).toContain("Web Development");
    expect(launchcode.programsOffered).toContain("Data Analysis");
    expect(launchcode.programsOffered).toContain("Liftoff");
    expect(launchcode.programsOffered.length).toEqual(3);
  });
  test('When passed a number that is NOT divisible by 2, 3, or 5, return "Rutabagas! That doesnt work."', function(){
    expect(launchcode.launchOutput(7)).toBe("Rutabagas! That doesn't work.");
  })
  test('When passed a number that is divisible by 2, 3, AND 5, return "LaunchCode Rocks!"', function(){
    expect(launchcode.launchOutput(30)).toBe("LaunchCode Rocks!");
  })
  test('When passed a number that is divisible by 2 AND 5, return "Launch Rocks!"', function(){
    expect(launchcode.launchOutput(10)).toBe("Launch Rocks! (CRASH!!!!)");
  })
  test('When passed a number that is divisible by 3 AND 5, return "Code Rocks!"', function(){
    expect(launchcode.launchOutput(15)).toBe("Code Rocks!");
  })
  test('When passed a number that is divisible by 2 AND 3, return "LaunchCode!"', function(){
    expect(launchcode.launchOutput(6)).toBe("LaunchCode!");
  })
  test('When passed a number that is ONLY divisible by 5, return "Rocks!"', function(){
    expect(launchcode.launchOutput(5)).toBe("Rocks!");
  })
  test('When passed a number that is ONLY divisible by 3, return "Code!"', function(){
    expect(launchcode.launchOutput(3)).toBe("Code!");
  })
  test('When passed a number that is ONLY divisible by 2, return "Launch!"', function(){
    expect(launchcode.launchOutput(2)).toBe("Launch!");
  })
   
});