/**
 * @swagger
 *  /auth/getCode:
 *      post:
 *          summary: get code to login
 *          description: get code by email for login
 *          tags: [Auth]
 *          responses:
 *              201:
 *                  description: success
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
 *                          $ref: '#/components/schemas/getCode'
 * @swagger
 *  /auth/login:
 *      post:
 *          summary: login by code
 *          description: login by code
 *          tags: [Auth]
 *          responses:
 *              200:
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/definitions/loginResponse'
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
 *                          $ref: '#/components/schemas/login'
 */
