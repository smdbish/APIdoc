
/**
 * @apiDefine MouseResp
 * @apiSuccess {Object[]} respObj Mouse Objects (Array)
 * @apiSuccess {Number} respObj.id Mouse Id
 * @apiSuccess {String} respObj.ownerUser Owner name
 * @apiSuccess {String} respObj.creatorUser Creator name
 * @apiSuccess {Number} respObj.guiSid Mouse SID
 * @apiSuccess {String} respObj.sex Sex
 * @apiSuccess {String} respObj.birthDate Birth date
 * @apiSuccess {Number=0,1,2,3,4,5} respObj.mouseState Mouse state 0-"Ended", 1-"Ended",2-"Mating",3-"Wealing",4-"Deleted",5-"Pup"
 * @apiSuccess {String} respObj.physicalTag Physical tag
 * @apiSuccess {String} respObj.litter_sid Litter SID
 * @apiSuccess {String} respObj.mouseLine MouseLine
 * @apiSuccess {String} respObj.protocol Protocol name
 * @apiSuccess {String} respObj.strain Strain
 * @apiSuccess {String} respObj.generation Generation
 * @apiSuccess {String} respObj.receivedDate Received date
 * @apiSuccess {String} respObj.endDate End date 
 * @apiSuccess {String} respObj.weanDate Wean date 
 * @apiSuccess {String} respObj.tailTagDate  TailTag date
 * @apiSuccess {String} respObj.matureDate 
 * @apiSuccess {String} respObj.phenoType 
 * @apiSuccess {String} respObj.comment 
 * @apiSuccess {String} respObj.sourceSupplier 
 * @apiSuccess {String} respObj.mouseStatus 
 * @apiSuccess {String} respObj.mouseCategory 
 * @apiSuccess {String} respObj.mouseNotice 
 * @apiSuccess {String} respObj.endType 
 * @apiSuccess {String} respObj.endReason 
 * @apiSuccess {String} respObj.createdDateTime 
 * @apiSuccess {String} respObj.altId alt ID / ear mark 
 * @apiSuccess {String} respObj.genoType 
 * @apiSuccess {String} respObj.sampleMass
  * @apiSuccessExample {json} Success-Response:
 *     	HTTP/1.1 200 OK
 *		{
 *			"messageCode": "200",
 *  			"messageDesc": "SUCCESS",
 *   			"respObj": [
 *       		{
 *           		"id": 914060,
 *     			"ownerUser": "Luis11 Liu",
 *          		"creatorUser": "Luis11 Liu",
 *          		"guiSid": 2278,
 *           		"sex": 0,
 *         		"birthDate": "2014-09-02T04:00:00Z",
 *           		"mouseState": 2,
 *           		"physicalTag": "5999ZZ",
 *           		"litter_sid": "193.1",
 *           		"mouseLine": "Adgrl3&lt;tm1Sud&gt;/J",
 *           		"protocol": "P2017-03",
 *           		"strain": null,
 *           		"generation": null,
 *           		"receivedDate": null,
 *          		"endDate": null,
 *          		"weanDate": "2014-09-23T04:00:00Z",
 *        		   	"tailTagDate": null,
 *           		"matureDate": "2014-10-14T04:00:00Z",
 *           		"phenoType": null,
 *           		"comment": "mouse comment2",
 *           		"sourceSupplier": null,
 *           		"mouseStatus": null,
 *           		"mouseCategory": "Kelly",
 *           		"mouseNotice": "Reserved for mating",
 *           		"endType": null,
 *           		"endReason": null,
 *           		"createdDateTime": "2015-04-17T12:32:21Z",
 *           		"altId": "Orange",
 *           		"genoType": "ATG-5(+/1), 2ans(+/+), Cre(+), hsf1a(+/-)",
 *           		"sampleMass": null
 *       		},
 *  	   		{
 *          		"id": 914061,
 *     			"ownerUser": "Luis11 Liu",
 *          		"creatorUser": "Luis11 Liu",
 *          		"guiSid": 2279,
 *           		"sex": 0,
 *         		"birthDate": "2014-09-02T04:00:00Z",
 *           		"mouseState": 2,
 *           		"physicalTag": "6000ZZ",
 *           		"litter_sid": "193.1",
 *           		"mouseLine": "Adgrl3&lt;tm1Sud&gt;/J",
 *           		"protocol": "P2017-03",
 *           		"strain": null,
 *           		"generation": null,
 *           		"receivedDate": null,
 *          		"endDate": null,
 *          		"weanDate": "2014-09-23T04:00:00Z",
 *        		   	"tailTagDate": null,
 *           		"matureDate": "2014-10-14T04:00:00Z",
 *           		"phenoType": null,
 *           		"comment": "mouse 20230119",
 *           		"sourceSupplier": null,
 *           		"mouseStatus": null,
 *           		"mouseCategory": "Kelly",
 *           		"mouseNotice": "Reserved for mating",
 *           		"endType": null,
 *           		"endReason": null,
 *           		"createdDateTime": "2015-04-17T12:32:21Z",
 *           		"altId": "Orange",
 *           		"genoType": "ATG-5(+/1), 2ans(+/+), Cre(+), hsf1a(+/-)",
 *           		"sampleMass": null
 *		     }
 *		 	 ]
 *		}
 * 
 */
 

 /**
 * @apiIgnore not in the doc
 * @apiVersion 1.0.0
 * @api {get} /external/v1/mouse Get Mouse
 * @apiName getMouse
 * @apiGroup Mouse
 * @apiDescription Get mouse information api
 * Get mouse information by id (array) 
 * OR owner name (full name or login name) + SID (array)
 * owner user id + SID (array)
 * 
 * @apiPermission Normal user. The customer should open API access.
 * 
 * @apiExample {curl} Example usage:
 *     curl -i "https://softmouse.net/external/v1/mouse
"  -H "Content-Type:application/json"  -H "Authorization:SMDB-oauthtoken CWKw%ij7h_&8c.VN0XDXwT#WqW!z.A70EmMI" -d "{\"ownerUser_name\":\"test\", \"mouseSID\":[2278,2279]}" -X GET
 *
 * @apiUse RequestHeader
 * @apiBody {Number[]} [mouseIds] Mouse Id array
 * @apiBody {String} [ownerUser_name] Owner login name or full name
 * @apiBody {Number} [ownerUser_id] Owner user id
 * @apiBody {Number[]} [mouseSID] Mouse SID array
 * 
 * @apiUse ResponseFormat
 * @apiUse MouseResp
 * 
 * @apiUse TokenErrorResp
 * @apiSampleRequest /v1/mouse 
 */
 
  /**
 * @apiVersion 1.0.0
 * @api {get} /external/v1/mouse/list Get Mouse list
 * @apiName getMouse
 * @apiGroup Mouse
 * @apiDescription Get mouse information api
 * Get mouse information by id (array) 
 * OR owner name (full name or login name) + SID (array)
 * owner user id + SID (array)
 * 
 * @apiPermission Normal user. The customer should open API access.
 * 
 * @apiExample {curl} Example usage:
 *     curl -i "https://softmouse.net/external/v1/mouse/list?ownerUser_name=test&mouseSID=2278&mouseSID=2279
"  -H "Content-Type:application/json"  -H "Authorization:SMDB-oauthtoken CWKw%ij7h_&8c.VN0XDXwT#WqW!z.A70EmMI" -X GET
 *
 * @apiUse RequestHeader
 * @apiParam {Number[]} [mouseIds] Mouse Id array
 * @apiParam {String} [ownerUser_name] Owner login name or full name
 * @apiParam {Number} [ownerUser_id] Owner user id
 * @apiParam {Number[]} [mouseSID] Mouse SID array
 * 
 * @apiUse ResponseFormat
 * @apiUse MouseResp
 *
 * @apiUse TokenErrorResp
 * @apiSampleRequest /v1/mouse/list 
 */