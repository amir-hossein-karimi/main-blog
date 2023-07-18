/**
 * @swagger
 *  /user/all:
 *      get:
 *          summary: all users
 *          description: get all users
 *          tags: [user]
 *          responses:
 *              200:
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/getAllUsersResponse'
 *              500:
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/internalError'
 */

/**
 * @swagger
 *  /user/one/{id}:
 *      get:
 *          summary: get one
 *          description: get one user by id
 *          tags: [user]
 *          responses:
 *              200:
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/getOneUserResponse'
 *              500:
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/internalError'
 *          parameters:
 *              -   name: id
 *                  in: path
 *                  type: string
 *                  required: true
 */

/**
 * @swagger
 *  /user/create:
 *      post:
 *          summary: create user
 *          description: create a user
 *          tags: [user]
 *          responses:
 *              201:
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/createUserResponse'
 *              400:
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/badRequestError'
 *              500:
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/internalError'
 *          requestBody:
 *              required: true
 *              content:
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/schemas/createUser'
 */

/**
 * @swagger
 *  /user/bulkCreate:
 *      post:
 *          summary: bulk create user
 *          description: create many user in once
 *          tags: [user]
 *          responses:
 *              204:
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/bulkCreateUserResponse'
 *              400:
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/badRequestError'
 *              500:
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/internalError'
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/bulkCreateUser'
 */

/**
 * @swagger
 *  /user/update/{id}:
 *      put:
 *          summary: update user
 *          description: update user with id
 *          tags: [user]
 *          responses:
 *              204:
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/updateUserResponse'
 *              400:
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/badRequestError'
 *              500:
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/internalError'
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/updateUser'
 *          parameters:
 *              -   name: id
 *                  in: path
 *                  required: true
 *                  type: string
 */

/**
 * @swagger
 *  /user/delete/{id}:
 *      delete:
 *          summary: delete user
 *          description: delete a user by id
 *          tags: [user]
 *          responses:
 *              204:
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/deleteUserResponse'
 *              400:
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/badRequestError'
 *              500:
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/internalError'
 *          parameters:
 *              -   name: id
 *                  in: path
 *                  required: true
 *                  type: string
 */
