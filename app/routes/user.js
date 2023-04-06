
 
 
// normal get request
/**
 * @apiVersion 1.0.0
 * @api {post} /external/v1/user/login User Login
 * @apiName login
 * @apiGroup User
 * @apiDescription User login api
 * use user  login name and password, get access token
 * The customer should open API access
 * 
 * @apiPermission Normal user. The customer should open API access.
 * 
 * @apiBody {String} username User Name
 * @apiBody {String} password Password
 * 
 * @apiExample {curl} Example usage:
 *     curl -i "https://softmouse.net/external/v1/user/login"  \
 *          -H "Content-Type:application/json"  \
 *          -d "{\"username\":\"test\", \"password\":\"12345678\"}"  \
 *          -X POST
 *
 * @apiUse ResponseFormat
 * @apiSuccess {String} respObj Access Token
 * @apiSuccessExample {json} Success-Response:
 *     	HTTP/1.1 200 OK
 *		{
 *   			"messageCode": "200",
 *   			"messageDesc": "SUCCESS",
 *   			"respObj": "MTAwMDAwMDAwMDU0.DrW&c0@%Y^xwrWOCC9S$VO0lK&8@V^o-f7hY"
 *		}
 * 
 * @apiError (302) LoginFail Username or password is not correct.
 * @apiErrorExample {json} Error-Response:
 *		Error 302: 
 *		{
 *   			"messageCode": "406",
 *   			"messageDesc": "Login fail.Can't find the user !",
 *   			"respObj": ""
 *		}
 * @apiErrorExample {json} Error-Response:
 *		Error 302: 
 *		{
 *   			"messageCode": "406",
 *   			"messageDesc": "Login fail.Password is not correct ! you forget ? so Bye !",
 *   			"respObj": ""
 *		}
 * @apiSampleRequest /v1/user/login 
 */
 
 /**
 * @apiVersion 1.0.0
 * @api {post} /external/v1/user/logout User Logout
 * @apiName logout
 * @apiGroup User
 * @apiDescription User logout api
 * Destory the token (make it expired).
 * The customer should open API access
 * 
 * @apiPermission Normal user. The customer should open API access.
 * 
 * @apiExample {curl} Example usage:
 *     curl -i "https://softmouse.net/external/v1/user/logout"  \
 *          -H "Content-Type:application/json"  \
 *          -H "Authorization:SMDB-oauthtoken CWKw%ij7h_&8c.VN0XDXwT#WqW!z.A70EmMI" \
 *          -X POST
 * @apiUse RequestHeader
 * 
 * @apiUse ResponseFormat
 * @apiSuccessExample {json} Success-Response:
 *     	HTTP/1.1 200 OK
 *		{
 *   			"messageCode": "200",
 *   			"messageDesc": "SUCCESS"
 *		}
 * 
 * @apiUse TokenErrorResp
 * @apiSampleRequest /v1/user/logout 
 */
 
 /**
 * @apiVersion 1.0.0
 * @api {post} /external/v1/user/refreshToken Refresh Token
 * @apiName refreshToken
 * @apiGroup User
 * @apiDescription Used if the user token is expired. Call this API to get a new user token.
 * 
 * @apiPermission Normal user. The customer should open API access.
 * 
 * @apiExample {curl} Example usage:
 *     curl -i "https://softmouse.net/external/v1/user/login"  \
 *          -H "Content-Type:application/json"  \
 *          -d "{\"username\":\"test\", \"token\":\"CWKw%ij7h_&8c.VN0XDXwT#WqW!z.A70EmMI\"}"  \
 *          -X POST
 * @apiUse RequestHeader
 * 
 * @apiUse ResponseFormat
 * @apiSuccessExample {json} Success-Response:
 *     	HTTP/1.1 200 OK
 *		{
 *			"messageCode": "200",
 *			"messageDesc": "SUCCESS",
 *			"respObj": 
 *			{
 *				"token":"MTAwMDAwMDAwMDU0.DrW&c0@%Y^xwrWOCC9S$VO0lK&8@V^o-f7hY",
 *				"expireDate":"2020-10-24T02:06:57Z"
 *			}
 *		}
 * 
 * @apiUse TokenErrorResp
 * @apiSampleRequest /v1/user/logout 
 */
 


