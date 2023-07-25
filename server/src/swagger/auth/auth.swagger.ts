/**
 * @swagger
 *  /auth/getCode:
 *      post:
 *          summary: get code to login
 *          description: get code by email for login
 *          tags: [auth]
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
 */
