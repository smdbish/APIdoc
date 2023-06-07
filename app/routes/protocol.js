
 /**
 * @apiDefine ProtocolResp
 * @apiSuccess {Object[]} respObj Protocol Objects (Array)
 * @apiSuccess {Number} respObj.name Protocol name
 * @apiSuccess {String} respObj.title Protocol title
 * @apiSuccess {String="Active","Archived","Deleted"} respObj.state State
 * @apiSuccess {Date} respObj.approvalDate Approval date
 * @apiSuccess {Date} respObj.renewalDate Renewal date
 * @apiSuccess {Number} respObj.approvedMice Approved mice
 * @apiSuccess {Number} respObj.usedMice Used mice
 * @apiSuccess {Number} respObj.leftMice Left mice
 * @apiSuccess {String} respObj.protocolPainCategory Protocol pain category
 * @apiSuccess {String} respObj.status Status
 * @apiSuccess {String} respObj.primaryInvestigator Primary investigator
 * @apiSuccess {String} respObj.creator Creator
 * @apiSuccess {Boolean} respObj.allowLimitBreach Allow limit Breach
 * @apiSuccess {String} respObj.comment Comment
 * @apiSuccess {Number} totalPage Total pages
 * @apiSuccess {Number} currentPage Current page no
 * @apiSuccess {Number} totalNum The total number
 * @apiSuccessExample {json} Success-Response:
 *     	HTTP/1.1 200 OK
 *		{
 *			"messageCode": "200",
 *  			"messageDesc": "SUCCESS",
 *   			"respObj": [
 *       		{
 *           		"name": "2018-05956HY",
 *           		"title": "",
 *           		"state": "Active",
 *           		"approvalDate": "2020-01-01T05:00:00Z",
 *           		"renewalDate": null,
 *           		"approvedMice": 600,
 *           		"usedMice": 350,
 *           		"leftMice": 250,
 *           		"protocolPainCategory": "",
 *           		"status": "",
 *           		"primaryInvestigator": "Test User",
 *           		"creator": "Baha Test",
 *           		"allowLimitBreach": true,
 *           		"comment": ""
 *			}
 *		    ],
 *		    "totalPage": 1,
 *		    "currentPage": 1,
 *		    "totalNum": 1
 *		}
 * 
 */


 
   /**
 * @apiVersion 1.0.0
 * @api {get} /external/v1/protocol Get Protocol
 * @apiName getProtocol
 * @apiGroup Protocol
 * @apiDescription Get protocol information api
 * 
 * @apiPermission Normal user. The customer should open API access.
 * @apiExample {curl} Example usage:
 *     curl -i "https://softmouse.net/external/v1/protocol?protocolName=2018-05956HY"  \
 *          -H "Content-Type:application/json"  \
 *          -H "Authorization:SMDB-oauthtoken MTAwMDAwMDAwMDU0.MEC-#uJGl->Bgv-7xbYqDdQH5cmN-9EjHR1u" \
 *          -X GET
 *
 * @apiExample {curl} Example usage:
 *     curl -i "https://softmouse.net/external/v1/protocol?numberPerPage=10&pageNo=1"  \
 *          -H "Content-Type:application/json"  \
 *          -H "Authorization:SMDB-oauthtoken MTAwMDAwMDAwMDU0.MEC-#uJGl->Bgv-7xbYqDdQH5cmN-9EjHR1u" \
 *          -X GET
 *
 * 
 * @apiUse RequestHeader
 * @apiParam {String} [protocolName] Protocol Name
 * @apiParam {Number} [numberPerPage] Number of Records per Page
  * @apiParam {Number} [pageNo] Page No.
 * 
 * @apiUse ResponseFormat
 * @apiUse ProtocolResp
 * @apiUse TokenErrorResp
 * @apiSampleRequest /v1/protocol 
 */


