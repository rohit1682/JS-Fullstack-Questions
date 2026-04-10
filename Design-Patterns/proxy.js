// Step 1: The original object
const realServer = {
    fetchData: function () {
      console.log("Fetching data from the real server...");
      return "Data from the real server";
    }
  };
  
  // Step 2: The proxy object
  const proxyServer = {
    server: realServer, // Reference to the real object
    fetchData: function () {
      console.log("Proxy: Checking permissions before fetching data...");
      // Adding extra layer before calling realServer's method
      return this.server.fetchData();
    }
  };
  
  // Step 3: Use the proxy to interact with the real object
  console.log(proxyServer.fetchData());
  // Output:
  // Proxy: Checking permissions before fetching data...
  // Fetching data from the real server...
  // "Data from the real server"