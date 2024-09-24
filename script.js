document.getElementById('scrape-button').addEventListener('click', function () {
    // Check if the current URL is 'https://www.levels.fyi/internships/'
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      const tab = tabs[0];
      if (tab.url.startsWith('https://www.levels.fyi/internships/')) {
        // Your scraping code here
        const nameXpath = "//*[@id='internships-table']/tbody/tr/td[1]/div/div[2]/h6";
        const nameSnapshot = document.evaluate(nameXpath, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
        const names = [];
        for (let i = 0; i < nameSnapshot.snapshotLength; i++) {
            names.push(nameSnapshot.snapshotItem(i).textContent.trim());
        }
        
        const locationXpath = "//*[@id='internships-table']/tbody/tr/td[1]/div/div[2]/p";
        const locationSnapshot = document.evaluate(locationXpath, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
        const locations = [];
        for (let i = 0; i < locationSnapshot.snapshotLength; i++) {
            locations.push(locationSnapshot.snapshotItem(i).textContent.trim());
        }
        
        const monthlyRateXpath = "//*[@id='internships-table']/tbody/tr/td[2]/div[1]/div/p[1]";
        const monthlyRateSnapshot = document.evaluate(monthlyRateXpath, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
        const monthlyRates = [];
        for (let i = 0; i < monthlyRateSnapshot.snapshotLength; i++) {
            monthlyRates.push(monthlyRateSnapshot.snapshotItem(i).textContent.trim());
        }
        
        const statusXpath = "//*[@id='internships-table']/tbody/tr/td[4]/p/a";
        const statusSnapshot = document.evaluate(statusXpath, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
        const statuses = [];
        for (let i = 0; i < statusSnapshot.snapshotLength; i++) {
            statuses.push(statusSnapshot.snapshotItem(i).textContent.trim());
        }
        
        const linkXpath = "//*[@id='internships-table']/tbody/tr/td[4]/p/a";
        const linkSnapshot = document.evaluate(linkXpath, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
        const links = [];
        for (let i = 0; i < linkSnapshot.snapshotLength; i++) {
            links.push(linkSnapshot.snapshotItem(i).href);
        }
        
        // Generate CSV content
        let csvContent = `"Company Name","Location","Monthly Rate","Status","Link"\n`;
        for (let i = 0; i < names.length; i++) {
            csvContent += `"${names[i]}","${locations[i]}","${monthlyRates[i]}","${statuses[i]}","${links[i]}"\n`;
        }
        
        // Download the CSV
        const blob = new Blob([csvContent], { type: 'text/csv' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'internships.csv';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
      } else {
        alert("This extension only works on the levels.fyi internships page.");
      }
    });
  });
  