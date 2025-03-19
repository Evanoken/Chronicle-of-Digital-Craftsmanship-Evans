import requests
import json

def login_and_get_cookies(email, password):
    login_url = 'https://app.outlier.ai/en/expert/login'
    data = {
        'email': email,
        'password': password
    }
    response = requests.post(login_url, data=data, allow_redirects=True)
    if response.status_code == 200 and 'dashboard' in response.url:
        print("Login successful")
        return response.cookies
    else:
        print("Login failed")
        return None

def fetch_json_data(url, cookies):
    response = requests.get(url, cookies=cookies)
    if response.status_code == 200:
        json_data = response.json()
        return json_data
    else:
        print(f"Failed to fetch data. Status code: {response.status_code}")
        return None

# User credentials
email = 'reymondbrlz@gmail.com'
password = 'Reymond123?'

# Login and get cookies
cookies = login_and_get_cookies(email, password)

if cookies:
    url = 'https://app.outlier.ai/internal/experts/worker-skills'
    json_data = fetch_json_data(url, cookies)
    if json_data:
        print("Fetched JSON data:", json_data)
    else:
        print("No data fetched.")
else:
    print("Could not log in. Check your credentials.")