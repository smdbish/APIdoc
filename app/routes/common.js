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
 *   			"messageDesc": "Authrization fail.",
 *		}
 * @apiErrorExample {json} Error-Response:
 *		{
 *   			"messageCode": "455",
 *   			"messageDesc": "Authrization fail - invalid token.",
 *		}
 * @apiErrorExample {json} Error-Response:
 *		{
 *   			"messageCode": "452",
 *   			"messageDesc": "Authrization fail, Token expired.",
 *		}
 * @apiErrorExample {json} Error-Response:
 *		{
 *   			"messageCode": "401",
 *   			"messageDesc": "Please Login and try again.",
 *		}
*/
