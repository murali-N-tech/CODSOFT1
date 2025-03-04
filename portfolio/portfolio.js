document.querySelector('.navbar a[href="#contact"]').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
  });
 
  document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.querySelector('#Name').value;
    const email = document.querySelector('#Email').value;
    const message = document.querySelector('#Message').value;

    if (name === '' || email === '' || message === '') {
      alert('Please fill in all fields');
      return;
    }

    
    console.log('Form submitted:', { name, email, message });
    alert('Thank you for your message!');
    document.querySelector('form').reset();
  });
  document.querySelector('form').addEventListener('submit', async function(e) {
    e.preventDefault();
    const name = document.querySelector('#Name').value;
    const email = document.querySelector('#Email').value;
    const message = document.querySelector('#Message').value;

    if (name === '' || email === '' || message === '') {
      alert('Please fill in all fields');
      return;
    }

    try {
      const response = await fetch('https://your-backend-endpoint.com/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, message })
      });

      if (response.ok) {
        alert('Thank you for your message!');
        document.querySelector('form').reset();
      } else {
        alert('There was a problem with your submission. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was a problem with your submission. Please try again.');
    }
  });


  
 
  