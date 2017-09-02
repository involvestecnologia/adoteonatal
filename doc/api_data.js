define({ "api": [
  {
    "type": "post",
    "url": "/v1/auth/",
    "title": "Authenticate user",
    "version": "1.0.0",
    "name": "AuthToken",
    "group": "Auth",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Authenticates an user.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X POST http://localhost:3000/v1/auth \\\n -H 'content-type: application/x-www-form-urlencoded' \\\n -d 'username=teste&password=123'",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User's username.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User's password.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>User token.</p>"
          }
        ]
      }
    },
    "filename": "src/controllers/v1/auth.js",
    "groupTitle": "Auth",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/auth/"
      }
    ]
  },
  {
    "type": "get",
    "url": "/",
    "title": "Health check",
    "version": "1.0.0",
    "name": "HealthCheck",
    "group": "Health",
    "permission": [
      {
        "name": "any"
      }
    ],
    "description": "<p>Verify if the API server is running.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3000/",
        "type": "json"
      }
    ],
    "filename": "src/controllers/healthyCheck.js",
    "groupTitle": "Health",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/"
      }
    ]
  },
  {
    "type": "post",
    "url": "/v1/user/",
    "title": "Create user",
    "version": "1.0.0",
    "name": "CreateUser",
    "group": "User",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "description": "<p>Creates a new user.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X POST http://localhost:3000/v1/user -d name=myenv",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User username.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isAdmin",
            "description": "<p>User is admin.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>User id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User username.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isAdmin",
            "description": "<p>User is admin.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "creation_date",
            "description": "<p>User creation date.</p>"
          }
        ]
      }
    },
    "filename": "src/controllers/v1/user.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/user/"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/v1/user/:id",
    "title": "Delete user",
    "version": "1.0.0",
    "name": "DeleteUser",
    "group": "User",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Deletes an user.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>User id.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X DELETE http://localhost:3000/v1/user/12345",
        "type": "json"
      }
    ],
    "filename": "src/controllers/v1/user.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/user/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/user/:id",
    "title": "Find user by id",
    "version": "1.0.0",
    "name": "GetUser",
    "group": "User",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Finds an user by its id.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X GET http://localhost:3000/v1/user/597168b5f780cc3a48cf6215",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User username.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isAdmin",
            "description": "<p>User is admin.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>User id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User username.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isAdmin",
            "description": "<p>User is admin.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "creation_date",
            "description": "<p>User creation date.</p>"
          }
        ]
      }
    },
    "filename": "src/controllers/v1/user.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/user/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/user/",
    "title": "List users",
    "version": "1.0.0",
    "name": "ListUsers",
    "group": "User",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "description": "<p>Lists all users.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3000/v1/user",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "users",
            "description": "<p>Array of users.</p>"
          }
        ]
      }
    },
    "filename": "src/controllers/v1/user.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/user/"
      }
    ]
  },
  {
    "type": "put",
    "url": "/v1/user/:id",
    "title": "Update user",
    "version": "1.0.0",
    "name": "UpdateUser",
    "group": "User",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Updates an user.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User username.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isAdmin",
            "description": "<p>User is admin.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X PUT http://localhost:3000/v1/user/12345 -d myvar=myvalue",
        "type": "json"
      }
    ],
    "filename": "src/controllers/v1/user.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/user/:id"
      }
    ]
  }
] });
