/**
 * @apiDefine ResponseFormat
 * @apiSuccess {String} messageCode Return Code
 * @apiSuccess {String} messageDesc Return Message
 */
 
 
 /**
 * @apiDefine RequestHeader
 * @apiHeader {String} Authorization Access token.
 */

 /**
 * @apiDefine TokenErrorResp
 * @apiError (4xx) Fail to validate the token.
 * @apiErrorExample {json} Error-Response:
 *		{
 *   			"messageCode": "406",
 *   			"messageDesc": "Authorization fail.",
 *		}
 * @apiErrorExample {json} Error-Response:
 *		{
 *   			"messageCode": "455",
 *   			"messageDesc": "Authorization fail - invalid token.",
 *		}
 * @apiErrorExample {json} Error-Response:
 *		{
 *   			"messageCode": "452",
 *   			"messageDesc": "Authorization fail, Token expired.",
 *		}
 * @apiErrorExample {json} Error-Response:
 *		{
 *   			"messageCode": "401",
 *   			"messageDesc": "Please Login and try again.",
 *		}
*/
