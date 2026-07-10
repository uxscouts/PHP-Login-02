// 1. Capture the base server URL at the very top of your file (outside the component)
const getBackendUrl = (path) => {
  // Captures 'https://github.dev'
  const baseUrl = `${window.location.protocol}//${window.location.host}`;
  
  // Appends your backend path to the root domain
  return `${baseUrl}/${path.replace(/^\//, '')}`;
};

// 2. Use it inside your React Component
function YourComponent() {
  useEffect(() => {
    // This safely resolves to your Codespace root + backend path
    const targetUrl = getBackendUrl('backend/file.php'); 
    
    fetch(targetUrl)
      .then(res => res.json())
      .then(data => console.log(data));
  }, []);

  return <div>Your UI Here</div>;
}
