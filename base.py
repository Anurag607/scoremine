from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# In-memory data store for user registration (replace with a database in a real application)
users = []

@app.route('/')
def home():
    return 'Welcome to User Registration'

@app.route('/profile')
def my_profile():
    response_body = {
        "name": "Anurag",
        "about" :"Hello! I'm a full stack developer that loves python and javascript"
    }

    return response_body

@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        username = request.form.get('username')
        email = request.form.get('email')
        password = request.form.get('password')

        # In a real application, you would typically validate and store the user data in a database.
        # Here, we are just adding the user to an in-memory list.
        users.append({'username': username, 'email': email, 'password': password})

        return f"User {username} registered successfully!"

    return '''
        <form method="post">
            <p>Username: <input type="text" name="username"></p>
            <p>Email: <input type="email" name="email"></p>
            <p>Password: <input type="password" name="password"></p>
            <p><input type="submit" value="Register"></p>
        </form>
    '''

if __name__ == '__main__':
    app.run(debug=True)
