/**
 * @swagger
 *  definitions:
 *      getAllUsersResponse:
 *          type: object
 *          properties:
 *              success:
 *                  type: boolean
 *                  example: true
 *              statusCode:
 *                  type: integer
 *                  example: 200
 *              data:
 *                  type: array
 *                  items:
 *                      type: object
 *                      properties:
 *                          _id:
 *                              type: string
 *                              example: "id"
 *                          email:
 *                              type: string
 *                              example: "example@gmail.com"
 *                          role:
 *                              type: string
 *                              example: "user"
 */

/**
 * @swagger
 *  definitions:
 *      getOneUserResponse:
 *          type: object
 *          properties:
 *              success:
 *                  type: boolean
 *                  example: true
 *              statusCode:
 *                  type: integer
 *                  example: 200
 *              data:
 *                  type: object
 *                  properties:
 *                      _id:
 *                          type: string
 *                          example: "id"
 *                      email:
 *                          type: string
 *                          example: "example@gmail.com"
 *                      role:
 *                          type: string
 *                          example: "user"
 */

/**
 * @swagger
 *  definitions:
 *      createUserResponse:
 *          type: object
 *          properties:
 *              success:
 *                  type: boolean
 *                  example: true
 *              statusCode:
 *                  type: integer
 *                  example: 201
 *              data:
 *                  type: object
 *                  properties:
 *                      message:
 *                          type: string
 *                          example: "user created successfuly"
 */

/**
 * @swagger
 *  definitions:
 *      bulkCreateUserResponse:
 *          type: object
 *          properties:
 *              success:
 *                  type: boolean
 *                  example: true
 *              statusCode:
 *                  type: integer
 *                  example: 201
 *              data:
 *                  type: object
 *                  properties:
 *                      message:
 *                          type: string
 *                          example: "users created successfuly"
 *                      error:
 *                          type: object
 *                          properties:
 *                              emails:
 *                                  type: array
 *                                  items:
 *                                      type: string
 *                                      example: "example@gmail.com"
 *                              message:
 *                                  type: string
 *                                  example: "this emails are already exist"
 */

/**
 * @swagger
 *  definitions:
 *      deleteUserResponse:
 *          type: object
 *          properties:
 *              success:
 *                  type: boolean
 *                  example: true
 *              statusCode:
 *                  type: integer
 *                  example: 204
 *              data:
 *                  type: object
 *                  properties:
 *                      message:
 *                          type: string
 *                          example: "user deleted successfuly"
 */

/**
 * @swagger
 *  components:
 *      schemas:
 *          updateUser:
 *              type: object
 *              properties:
 *                  email:
 *                      type: string
 *                      description: enter new email for user
 *                  role:
 *                      type: string
 *                      enum:
 *                          -   user
 *                          -   admin
 *                          -   superAdmin
 *          bulkCreateUser:
 *              type: object
 *              properties:
 *                  users:
 *                      type: array
 *                      items:
 *                          type: object
 *                          required:
 *                              -   email
 *                          properties:
 *                              email:
 *                                  type: string
 *                                  description: enter user email
 *                              role:
 *                                  type: string
 *                                  enum:
 *                                      -   user
 *                                      -   admin
 *                                      -   superAdmin
 *          createUser:
 *              type: object
 *              required:
 *                  -   email
 *              properties:
 *                  email:
 *                      type: string
 *                      description: enter user email
 *                  role:
 *                      type: string
 *                      enum:
 *                          -   user
 *                          -   admin
 *                          -   superAdmin
 */

/**
 * @swagger
 *  definitions:
 *      updateUserResponse:
 *          type: object
 *          properties:
 *              success:
 *                  type: boolean
 *                  example: true
 *              statusCode:
 *                  type: integer
 *                  example: 204
 *              data:
 *                  type: object
 *                  properties:
 *                      message:
 *                          type: string
 *                          example: "user updated successfully"
 */
