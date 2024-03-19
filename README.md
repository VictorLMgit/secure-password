# password-validation
Simple API to validate a password that must meet the following requirements:
<ul>
  <li>minimum of 8 characters</li>
  <li>Contain at least one lowercase character</li>
  <li>Contain at least one uppercase character</li>
  <li>Contain at least one special character</li>
</ul>

# Endpoints
<h3>Validate Password</h3>
<ul>
  <li>POST {host}/validate-password</li>
  <li>Request query fields: <pre>password</pre></li>
  <li>Responses</li>
  <ul>
    <li>204 No Content if the password meets all the requirements.</li>
    <li>400 Bad Request if the password fails the validation</li>
  </ul>
</ul>

## How to Run
<ol>
  <li>Install dependencies using: <pre>npm install</pre></li>
  <li>Start the server using the following command on your terminal: <pre>npm run start</pre></li>
</ol>
The application will be available by default at <code>http://localhost:3060/validate-password</code>