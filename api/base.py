import asyncio
import os
from flask import Flask, request
from flask_cors import CORS, cross_origin
from supabase import create_client, Client

url: str = os.environ.get("SUPABASE_URL")
key: str = os.environ.get("SUPABASE_KEY")
supabase: Client = create_client(url, key)
func = supabase.functions()

app = Flask(__name__)
CORS(app)

@asyncio.coroutine
async def test_func(loop):
    resp = await func.invoke("hello-world",invoke_options={'body':{}})
    return resp

loop = asyncio.get_event_loop()
resp = loop.run_until_complete(test_func(loop))
loop.close()

@app.route("/", methods=['GET', 'POST'])
@cross_origin()
def home():
    return "Welcome to the User API"

@app.route('/register', methods=['POST'])
@cross_origin()
def register():
    req_data = request.get_json()
    email = req_data["email"]
    password = req_data["password"]
    data = dict()
    data["status"] = 200
    data["email"] = email
    data["password"] = password
    print(f'Request Data: {data}')
    get_data = supabase.table("users").select("*").eq("email", email).execute()
    print(f'Get Data: {get_data}')
    if len(get_data.data) > 0 :
        get_data.data[0]["status"] = 200
        return get_data.data[0]
    
    post_data = supabase.table("users").insert({"email":email, "password": password}).execute()
    print(f'Post Data: {post_data.data[0]}')
    post_data.data[0]["status"] = 200
    return post_data.data[0]
        

if __name__ == '__main__':
    app.run(debug=True)
