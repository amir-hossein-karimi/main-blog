/**
 * @swagger
 *  components:
 *      schemas:
 *          getCode:
 *              type: object
 *              required:
 *                  -   email
 *              properties:
 *                  email:
 *                      type: string
 *                      description: enter your email
 *          login:
 *              type: object
 *              required:
 *                  -   email
 *                  -   code
 *              properties:
 *                  email:
 *                      type: string
 *                      description: enter your email
 *                  code:
 *                      type: string
 *                      description: enter otp code
 */

/**
 * @swagger
 *  definitions:
 *      logoutResponse:
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
 *                          example: "logout successfully"
 *      loginResponse:
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
 *                          example: "login successfully"
 *                      token:
 *                          type: string
 *                          example: "string"
 *                      refreshToken:
 *                          type: string
 *                          example: "string"
 */
