
chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, "getStudentName", (response) => {
      const studentNameElement = document.getElementById("student-name");
      if (response && response.name) {
        studentNameElement.textContent = response.name;
        
      } else {
        studentNameElement.textContent = "Student name not found.";
      }
    });
  });
  