/**
 * @swagger
 *  definitions:
 *      notFoundError:
 *          type: object
 *          properties:
 *              status:
 *                  type: integer
 *                  example: 404
 *              success:
 *                  type: boolean
 *                  example: false
 *              data:
 *                  type: object
 *                  properties:
 *                      message:
 *                          type: string
 *                          example: "not found"
 */

/**
 * @swagger
 *  definitions:
 *      internalError:
 *          type: object
 *          properties:
 *              status:
 *                  type: integer
 *                  example: 500
 *              success:
 *                  type: boolean
 *                  example: false
 *              data:
 *                  type: object
 *                  properties:
 *                      message:
 *                          type: string
 *                          example: "internal server error"
 */

/**
 * @swagger
 *  definitions:
 *      badRequestError:
 *          type: object
 *          properties:
 *              status:
 *                  type: integer
 *                  example: 400
 *              success:
 *                  type: boolean
 *                  example: false
 *              data:
 *                  type: object
 *                  properties:
 *                      message:
 *                          type: string
 *                          example: "bad request"
 */
