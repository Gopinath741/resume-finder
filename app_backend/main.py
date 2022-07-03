from flask import Flask, request
from flask_cors import CORS, cross_origin
import json
import pymysql

db = pymysql.connect(host = "localhost", 
                    user = "mysql",
                    password="helplena",
                    database="TESTDB")

cursor = db.cursor()

app = Flask(__name__)
cors = CORS(app)

@app.route('/login', methods=['GET', 'POST'])
def login():
    print('Login Request : {}'.format(request.json))
    response = {}
    if 'username' in request.json and 'password' in request.json:
        # Create variables for easy access
        # request_json = json.loads(request.json)
        username = request.json['username']
        password = request.json['password']

        cursor.execute('SELECT * FROM Users WHERE username = %s AND password = %s', (username, password))
        # Fetch one record and return result
        account = cursor.fetchone()
        print('Found Details in DB : {}'.format(account))
        # If account exists in accounts table in out database
        if account:
            response['status'] = 200
            response['message'] = "User login successful"
            response['details'] = account
            return response
            
    response['status'] = 400
    response['message'] = "Incorrect username/password!"
    return response
        
@app.route('/register', methods=['GET', 'POST'])
def register():
    print('Register Request : {}'.format(request.json))
    response = {}
    if 'username' in request.json and 'password' in request.json:
        username = request.json['username']
        password = request.json['password']
        # role = request.json['role']
        # industry = request.json['industry']
        # isActive = request.json['is_active']
        # token=''
        # Check if account exists using MySQL
        cursor.execute( "SELECT * FROM Users WHERE username = %s", (username))
        account = cursor.fetchone()
        # If account exists show error and validation checks
        if account:
            response['status'] = 400
            response['message'] = "Account already exists!"
            return response

        else:
            # cursor.execute("INSERT INTO user (id, username, password, role, is_active,industry,token ) VALUES ({}, '{}', '{}', '{}', '{}', '{}', '{}')".format(id,username, password,role,isActive,industry,token))
            cursor.execute("SELECT * from Users")
            id = len(cursor.fetchall()) + 1
            cursor.execute('INSERT INTO Users VALUES (%s,%s)', (username, password))
            db.commit()
            response['status'] = 200
            response['message'] = "Account created successfully"
            return response
    else:
        response['status'] = 400
        response['message'] = "Fill the details"
        return response

@app.route('/list_users', methods=['GET'])
def list_users():
    response={}
    cursor.execute( "SELECT * FROM Users")
    accounts = cursor.fetchall() 
    response['status'] = 200
    response['users']=list(accounts)
    return response  

@app.route('/add_resume',methods=['POST'])
def add_resume():
    response={}
    print('Add Resume : ', request.json)
    cursor.execute("SELECT * from Resumes")
    id = len(cursor.fetchall()) + 1
    name = request.json['username']
    email = request.json['email']
    phoneNumber = int(request.json['phone'])
    jobTitle = request.json['job']
    keywords = request.json['keywords']
    industry = request.json['industry']
    certification = request.json['certification']
    visa = request.json['visa']
    state = request.json['state']
    city = request.json['city']
    remarks = request.json['remarks']
    filePath = request.json['file_path']
    last_modified = 1
    try :
        cursor.execute("INSERT INTO Resumes (id, username, email, phone, job, keywords, industry, certification, visa, state, city, remarks, file_path, last_modified) VALUES ({}, '{}', '{}', {}, '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', {})".format(id,name, email,phoneNumber,jobTitle,keywords,industry,certification,visa,state,city,remarks,filePath,last_modified))
        db.commit()
        response['status'] = 200
        response['message'] = "Resume Added successfully"
        return response
    except Exception as e:
        print(e)
        response['status'] = 400
        response['message'] = "Resume Added failed"
        return response

@app.route('/search_resume',methods=['POST'])
def search_resume():
    base_query = 'SELECT * FROM Resumes WHERE '
    for key,value in request.json.items():
        if value != '':
            if key== 'keywords' or key =='industry':
                base_query += key + " like '%" + value+"%' and "
            else:
                base_query += key + "='" + value +"' and "

    base_query=base_query.strip('and ')
    base_query= base_query.strip('WHERE ')
    print(base_query)
    try:
        cursor.execute(base_query)
        accounts = cursor.fetchall()
        list_accounts = []
        for account in accounts:
            list_accounts.append(list(account))

        for i, a in enumerate(list_accounts):
            list_accounts[i][0] = int(list_accounts[i][0])
            list_accounts[i][3] = int(list_accounts[i][3])
            list_accounts[i][-1] = int(list_accounts[i][-1])
        
        print(list_accounts)
        return {"status":200,"details":list_accounts}
    except Exception as e:
        print(e)
        response={}
        response['status'] = 400
        response['message'] = "Resume search failed"
        return response

if __name__ =='__main__':
	app.run(debug=True)