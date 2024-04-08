function submitData(name, email) {
  const url = 'http://localhost:3000/users';
  const data = JSON.stringify({ name, email });

  const fetchRequest = fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: data
  })
  .then(response => response.json())
  .then(data => {
    const userId = document.createElement('p');
    userId.textContent = `New user ID: ${data.id}`;
    document.body.appendChild(userId);
  })
  .catch(error => {
    const errorMessage = document.createElement('p');
    errorMessage.textContent = `Error: ${error.message}`;
    document.body.appendChild(errorMessage);
  });

  return fetchRequest;
}


  