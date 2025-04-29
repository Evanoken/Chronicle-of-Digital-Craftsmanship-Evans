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

def get_dashboard_data(session):
    dashboard_url = 'https://app.outlier.ai/en/expert/dashboard'
    response = session.get(dashboard_url)
    print(f"Dashboard response status code: {response.status_code}")
    print(f"Dashboard response URL: {response.url}")
    print(f"Response text: {response.text}")
    if response.status_code == 200:
        return response.text
    else:
        print("Failed to retrieve dashboard data")
        return None

def main():
    email = '       '
    password = '       '
    session = login_and_get_session(email, password)
    if session:
        dashboard_data = get_dashboard_data(session)
        if dashboard_data:
            print("Dashboard data retrieved successfully")
            # Process the dashboard data as needed
        else:
            print("Failed to retrieve dashboard data")
    else:
        print("Failed to log in")
if __name__ == "__main__":
    main()



