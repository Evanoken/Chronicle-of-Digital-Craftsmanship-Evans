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

def fetch_json_data(url, session):
    response = session.get(url)
    if response.status_code == 200:
        json_data = response.json()
        return json_data
    else:
        print(f"Failed to fetch data. Status code: {response.status_code}")
        return None

email = 'reymondbrlz@gmail.com'
password = 'Reymond123?'
session = login_and_get_session(email, password)

if session:
    url = 'https://app.outlier.ai/internal/experts/worker-skills'
    json_data = fetch_json_data(url, session)
    if json_data:
        print("Fetched JSON data:", json_data)
    else:
        print("No data fetched.")
else:
    print("Could not log in. Check your credentials.")
    
    ## Cyber Security (Web Scraping) ## web penetration testing
    ## Cyber Security (Web Scraping) ## web penetration testing
    
    print("Web scraping is the process of extracting data from websites. It involves making HTTP requests to a web server, retrieving the HTML content of a webpage, and then parsing that content to extract the desired information. Web scraping can be done using various programming languages and libraries, such as Python with BeautifulSoup or Scrapy.")
    