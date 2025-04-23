import requests

def login_and_get_session(email, password):
    session = requests.session()
    login_url = 'https://app.outlier.ai/en/expert/login'
    data = {
        'email': email,
        'password': password
    }
    response = session.post(login_url, data=data, allow_redirects=True)
    print(f"Login response status code: {response.status_code}")
    print(f"Login response URL: {response.url}")
    print(f"Response text: {response.text}")
    if response.status_code == 200 and 'dashboard' in response.url:
        print("Login successful")
        return session
    else:
        print("Login failed")
        return None

if session:
      be done using various programming languages and libraries, such as Python with BeautifulSoup or Scrapy.")
    