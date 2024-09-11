describe("Webpage Layout", function() {
  // Test Case 1: Check if the navigation bar is present
  it("should include a navigation bar", function() {
      var navbar = document.querySelector('nav');
      expect(navbar).not.toBeNull(); // Ensure the navigation bar is present
  });

  

  // Test Case 3: Check if there is at least one element with relative positioning
  it("should have an element with relative positioning", function() {
      var aboutSection = document.getElementById('about');
      var aboutPosition = window.getComputedStyle(aboutSection).position;
      expect(aboutPosition).toBe("relative"); // Ensure the about section is relatively positioned
  });

  // Test Case 4: Check if there is at least one element with absolute positioning
  it("should have an element with absolute positioning", function() {
      var serviceBox = document.querySelector('.service-box');
      var serviceBoxPosition = window.getComputedStyle(serviceBox).position;
      expect(serviceBoxPosition).toBe("absolute"); // Ensure the service box is absolutely positioned
  });

  // Test Case 5: Check if there is at least one element with fixed positioning
  it("should have an element with fixed positioning", function() {
      var footer = document.querySelector('footer');
      var footerPosition = window.getComputedStyle(footer).position;
      expect(footerPosition).toBe("fixed"); // Ensure the footer is fixed positioned
  });

  // Test Case 6: Check if there is at least one element with sticky positioning
  it("should have an element with sticky positioning", function() {
      var header = document.querySelector('header');
      var headerPosition = window.getComputedStyle(header).position;
      expect(headerPosition).toBe("sticky"); // Ensure the header is sticky positioned
  });
});
