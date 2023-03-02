
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
 *           		"comment": ",./;'[]\\\\<>?:\"{}|",
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
 *           		"comment": ",./;'[]\\\\<>?:\"{}|",
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
 * @apiDefine SampleResp
 * @apiSuccess {Object[]} respObj Sample Objects (Array)
 * @apiSuccess {Number} respObj.id Sample Id
 * @apiSuccess {String} respObj.barCode Sample barcode
 * @apiSuccess {String} respObj.tissueOorgan Tissue / Organ
 * @apiSuccess {String} respObj.anatomicRegion anatomic region
 * @apiSuccess {String} respObj.portion Portion
 * @apiSuccess {String} respObj.partialCollDetails partial collection detail
 * @apiSuccess {String="Archived", "Pending Collection","Collected","Deleted"} respObj.state Sample State
 * @apiSuccess {String} respObj.collectedDate collected date
 * @apiSuccess {String} respObj.collectedBy collected by
 * @apiSuccess {Number} respObj.studyId Study unique Id
 * @apiSuccess {String} respObj.seqId sequence Id
 * @apiSuccess {String} respObj.litterId Litter unique Id
 * @apiSuccess {String} respObj.altId alt Id / ear mark
 * @apiSuccess {String} respObj.aliquot aliquot
 * @apiSuccess {String} respObj.process 
 * @apiSuccess {String} respObj.bloodDerivative 
 * @apiSuccess {String="M","F","I"} respObj.sex  “M” - male, “F” -female, “I” -unknown
 * @apiSuccess {String} respObj.injectionVolume 
 * @apiSuccess {String} respObj.treatment 
 * @apiSuccess {String} respObj.genoType 
 * @apiSuccess {Number} respObj.vg 
 * @apiSuccess {String} respObj.studyName 
 * @apiSuccess {String} respObj.sampleVolume 
 * @apiSuccess {String} respObj.organWeight 
 * @apiSuccess {String="Not uploaded" ,"Uploaded","Modified"} respObj.syncStatus 
 * @apiSuccess {String} respObj.groupName 
 * @apiSuccess {String} respObj.routeOfAdm 
 * @apiSuccess {String} respObj.vectorTiter 
 * @apiSuccess {String} respObj.mouseline 
 * @apiSuccess {String} respObj.strain
 * @apiSuccess {String} respObj.birthDate
 * @apiSuccess {String} respObj.endDate
 * @apiSuccess {String} respObj.mouseComment
 * @apiSuccess {String} respObj.sampleComment
 * @apiSuccess {Number} respObj.mouseSID
 * @apiSuccessExample {json} Success-Response:
 *     	HTTP/1.1 200 OK
 *		{
 *			"messageCode": "200",
 *  			"messageDesc": "SUCCESS",
 *   			"respObj": [
 *       		{
 *           		"id": 2222,
 *           		"barCode": "SMAAA297",
 *           		"tissueOorgan": "Brain",
 *           		"anatomicRegion": "Midbrain",
 *           		"portion": "L",
 *           		"partialCollDetails": null,
 *           		"state": "Collected",
 *           		"collectedDate": "2021-07-08T04:57:05Z",
 *           		"collectedBy": "Test",
 *           		"studyId": 100,
 *           		"seqId": "12",
 *           		"litterId": "622.2",
 *           		"altId": null,
 *           		"aliquot": "",
 *           		"process": "Frozen",
 *           		"bloodDerivative": "",
 *           		"sex": "M",
 *           		"injectionVolume": "",
 *           		"treatment": "",
 *           		"genoType": "",
 *           		"vg": null,
 *           		"studyName": "study-2021-06-2901",
 *           		"sampleVolume": 1,
 *           		"organWeight": "",
 *           		"sampleWeight": "",
 *           		"syncStatus": "Uploaded",
 *           		"groupName": "Without Group",
 *           		"routeOfAdm": null,
 *           		"vectorTiter": null,
 *           		"vectorDescription": null,
 *           		"mouseline": "Adgrl3&lt;tm1Sud&gt;/J",
 *           		"strain": null,
 *           		"birthDate": "2019-09-18T04:00:00Z",
 *           		"endDate": "2021-07-08T04:00:00Z",
 *           		"mouseComment": null,
 *           		"sampleComment": null,
 *           		"mouseSID": 611
 *			},
 *			{
 *          		"id": 2223,
 *           		"barCode": "SMAAA298",
 *		  		"tissueOorgan": "Brain",
 *		  		"anatomicRegion": "Midbrain",
 *		    	"portion": "L",
 *		    	"partialCollDetails": null,
 *		    	"state": "Collected",
 *		        "collectedDate": "2021-07-08T04:57:05Z",
 *		        "collectedBy": "Test",
 *		        "studyId": 100,
 *		        "seqId": "12",
 *	            "litterId": "622.2",
 *	      		"altId": null,
 *		        "aliquot": "",
 *		        "process": "Frozen",
 *	            "bloodDerivative": "",
 *		        "sex": "M",
 *		        "injectionVolume": "",
 *		        "treatment": "",
 *		        "genoType": "",
 *		        "vg": null,
 *		        "studyName": "study-2021-06-2901",
 *		        "sampleVolume": 2,
 *				"organWeight": "",
 *		        "sampleWeight": "",
 *	 	        "syncStatus": "Uploaded",
 *	            "groupName": "Without Group",
 *		        "routeOfAdm": null,
 *		        "vectorTiter": null,
 *		        "vectorDescription": null,
 *	   	        "mouseline": "Adgrl3&lt;tm1Sud&gt;/J",
 *	            "strain": null,
 *		        "birthDate": "2019-09-18T04:00:00Z",
 *	            "endDate": "2021-07-08T04:00:00Z",
 *		        "mouseComment": null,
 *		        "sampleComment": null,
 *		        "mouseSID": 611
 *		    }
 *		    ],
 *		    "totalPage": 335,
 *		    "currentPage": 1,
 *		    "collectedSyncNum": 3,
 *		    "collectedNotSyncNum": 30,
 *		    "pendingNum": 622,
 *		    "archivedNum": 14,
 *		    "totalNum": 669
 *		}
 * 
 */


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
 *     curl -i "https://softmouse.net/external/v1/user/login"  -H "Content-Type:application/json"  -d "{\"username\":\"test\", \"password\":\"12345678\"}"  -X POST
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
 *     curl -i "https://softmouse.net/external/v1/user/logout"  -H "Content-Type:application/json"  -H "Authorization:SMDB-oauthtoken CWKw%ij7h_&8c.VN0XDXwT#WqW!z.A70EmMI" -X POST
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
 * @api {post} /external/v1/user/refreshToken Refresh token
 * @apiName refreshToken
 * @apiGroup User
 * @apiDescription Used if the user token is expired. Call this API to get a new user token.
 * 
 * @apiPermission Normal user. The customer should open API access.
 * 
 * @apiExample {curl} Example usage:
 *     curl -i "https://softmouse.net/external/v1/user/login"  -H "Content-Type:application/json"  -d "{\"username\":\"test\", \"token\":\"CWKw%ij7h_&8c.VN0XDXwT#WqW!z.A70EmMI\"}"  -X POST
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
 *     curl -i "https://softmouse.net/external/v1/mouse?ownerUser_name=test&mouseSID=2278&mouseSID=2279
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
 *     curl -i "https://softmouse.net/external/v1/mouse?ownerUser_name=test&mouseSID=2278&mouseSID=2279
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
 
   /**
 * @apiVersion 1.0.0
 * @api {get} /external/v1/sample Get Sample
 * @apiName getSample
 * @apiGroup Sample
 * @apiDescription Get sample information api
 * 
 * @apiPermission Normal user. The customer should open API access.
 * @apiExample {curl} Example usage:
 *     curl -i "https://softmouse.net/external/v1/sample?studyName=study-2021-06-2901&syncStatus=0&state=0&numberPerPage=10&pageNo=1"  -H "Content-Type:application/json"  -H "Authorization:SMDB-oauthtoken MTAwMDAwMDAwMDU0.MEC-#uJGl->Bgv-7xbYqDdQH5cmN-9EjHR1u" -X GET
 *
 * 
 * @apiUse RequestHeader
 * @apiParam {Number} [studyId] Study Id
 * @apiParam {String} [studyName] Study Name
 * @apiParam {Number[]} [sampleId] Sample Id Array
 * @apiParam {Number} [syncStatus] Synchronization Status
 * @apiParam {Number} [state] Sample State
 * @apiParam {Number} [numberPerPage] Number of Records per Page
  * @apiParam {Number} [pageNo] Page No.
 * 
 * @apiUse ResponseFormat
 * @apiUse SampleResp
 * @apiUse TokenErrorResp
 * @apiSampleRequest /v1/sample 
 */

/**
 * @apiVersion 1.0.0
 * @api {put} /external/v1/sample/status Update Sample SyncStatus
 * @apiName updateSampleSyncStatus
 * @apiGroup Sample
 * @apiDescription Used to update a sync column for samples in SoftMose.NET after a getSampleInformation pull to confirm the action was successful
 * 
 * @apiPermission Normal user. The customer should open API access.
 * @apiExample {curl} Example usage:
 *     curl -i "https://softmouse.net/external/v1/sample/status?sampleId=20"  -H "Content-Type:application/json"  -H "Authorization:SMDB-oauthtoken MTAwMDAwMDAwMDU0.MEC-#uJGl->Bgv-7xbYqDdQH5cmN-9EjHR1u" -X PUT
 * 
 * @apiUse RequestHeader
 * @apiParam {Number} [studyId] Study Id
 * @apiParam {Number[]} [sampleId] Sample Id Array
 * 
 * @apiUse ResponseFormat
 * @apiSuccessExample {json} Success-Response:
 *     	HTTP/1.1 200 OK
 *		{
 *			"messageCode": "200",
 *			"messageDesc": "SUCCESS"
 *		}
 * @apiUse TokenErrorResp
 * @apiSampleRequest /v1/sample/status
 */


/**
 * @apiVersion 1.0.0
 * @api {get} /external/v1/study Check Study Name
 * @apiName checkStudyName
 * @apiGroup Study
 * @apiDescription Used to check if a study already exists in SoftMouse.NET by Study Name.
 * 
 * @apiPermission Normal user. The customer should open API access.
 * @apiExample {curl} Example usage:
 *     curl -i "https://softmouse.net/external/v1/study?studyName=study20"  -H "Content-Type:application/json"  -H "Authorization:SMDB-oauthtoken MTAwMDAwMDAwMDU0.MEC-#uJGl->Bgv-7xbYqDdQH5cmN-9EjHR1u" -X GET
 * 
 * @apiUse RequestHeader
 * @apiParam {String} studyName Study Name
 * 
 * @apiUse ResponseFormat
 * @apiSuccessExample {json} Success-Response:
 *     	HTTP/1.1 200 OK
 *		{
 *			"messageCode": "200",
 *			"messageDesc": "The study exists."
 *		}
 * @apiSuccessExample {json} Success-Response:
 *     	HTTP/1.1 200 OK
 *		{
 *			"messageCode": "406",
 *			"messageDesc": "The study exists."
 *		}
 * @apiUse TokenErrorResp
 * @apiSampleRequest /v1/study
 */

/**
 * @apiVersion 1.0.0
 * @api {post} /external/v1/study Add a New Study
 * @apiName addNewStudy
 * @apiGroup Study
 * @apiDescription Used to create a new Study in SoftMouse.NET.
 * 
 * @apiPermission Normal user. The customer should open API access.
 * @apiExample {curl} Example usage:
 *     curl -v "http://127.0.0.1/SMDB-1.0/external/v1/study" -H "Content-Type:application/json" -H "Authorization:SMDB-oauthtoken MTAwMDAwMDAwMDU0.MEC-#uJGl->Bgv-7xbYqDdQH5cmN-9EjHR\!u" -d '{"projectName": "ISH234","protocols": ["protocol2"],"studyCode": "study2021-01-03-004","studyType": "2183578","studyGoals": "goals222","status": "status1","startDate": "2020-12-08","endDate": "2021-03-31"}' -X POST
 * 
 * @apiUse RequestHeader
 * @apiUse StudyRequest
 * 
 * @apiUse ResponseFormat
 * @apiSuccessExample {json} Success-Response:
 *     	HTTP/1.1 200 OK
 *		{
 *			"messageCode": "200",
 *			"messageDesc": "SUCCESS",
 *			"respObj": 
 *			{
 *				"id":423,
 *				"studyTitle":"study2023-01-03-004",
 *				"project":"ISH234",
 *				"status":"status1",
 *				"url":"https://softmouse.net/nproj/nproject/study/studyEditAction.do?reqCode=init&id=423&col=go"
 *			}
 *		}
 * @apiErrorExample {json} Error-Response:
 *     	HTTP/1.1 200 OK
 *		{
 *			"messageCode": "406",
 *			"messageDesc": "Duplicate Study Name."
 *		}
 * @apiUse TokenErrorResp
 * @apiSampleRequest /v1/study
 */
 
 
 /**
 * @apiDefine StudyRequest
 * @apiParam {String} projectName Project Name
 * @apiParam {String} studyCode Study Code
 * @apiParam {String[]} [protocols] Protocol Name Array
 * @apiParam {String} [studyType] Study Type
 * @apiParam {String} [studyGoals] Study Goals
 * @apiParam {String} [status] 
 * @apiParam {String} [startDate] 
 * @apiParam {String} [endDate] 
 * @apiParam {String} [details] 
 * @apiParam {Object[]} [groupInfos] 
 * @apiParam {String} [groupInfos.groupName]
 * @apiParam {String} [groupInfos.numofanimal]
 * @apiParam {String} [groupInfos.groupdetails]
 * @apiParam {String} [groupInfos.fromDate]
 * @apiParam {String} [groupInfos.toDate]
 * @apiParam {String} [groupInfos.treatment] 
 * @apiParam {String} [groupInfos.dose]
 * @apiParam {String} [groupInfos.route] 
 * @apiParam {String} [groupInfos.injedetails] 
 * @apiParam {String} [groupInfos.injectionvolumn]
 * @apiParam {String} [groupInfos.lotnumber]
 * @apiParam {Object[]} [groupInfos.animals]
 * @apiParam {String} [groupInfos.animals.animalId] 
 * @apiParam {String} [groupInfos.animals.addedDate] 
 * @apiParam {Object[]} [takedownInfos] 
 * @apiParam {String} [takedownInfos.name] 
 * @apiParam {String} [takedownInfos.date] 
 * @apiParam {Number} [takedownInfos.perfusion] 
 * @apiParam {Object[]}  [takedownInfos.samples]
 * @apiParam {String} [takedownInfos.samples.sample] 
 * @apiParam {String} [takedownInfos.samples.region] 
 * @apiParam {String} [takedownInfos.samples.portion] 
 * @apiParam {String} [takedownInfos.samples.processing] 
 * @apiParamExample {json} Request-Example:
 *     {
 *				"projectName": "ISH234",
 *				"studyCode": "study2023-03-01-001"
 *     }
 *
 * @apiParamExample {json} Request-Example:
 *		{
 *			 "projectName": "ISH234",
 *			 "protocols": [
 *				   "protocol2"
 *			 ],
 * 			"studyCode": "study2021-01-03-004",
 *			 "studyType": "2183578",
 *			 "studyGoals": "goals222",
 *			 "status": "status1",
 *			 "startDate": "2020-12-08",
 *			 "endDate": "2021-03-31",
 *			 "details": "Details",
 *			 "groupInfos": [
 *			   {
 *				     "groupName": "group1",
 *				     "numofanimal": "2",
 *				     "groupdetails": "fff",
 *				     "fromDate": "2020-12-09",
 *				     "toDate": "2020-12-16",
 * 				     "treatment": "fff",
 *				     "dose": "1",
 *				     "route": "route1",
 *				     "injedetails": "222",
 *				     "injectionvolumn" : "89",
 *				     "lotnumber" : "11;22;33;",
 *				     "animals":[
 *				       {
 *					         "animalId": "344877",
 *					          "addedDate": "2021-01-09"
 *				       },
 *				       {
 *					         "animalId": "344879",
 *					         "addedDate": "2021-01-10"
 *				       }
 *				       ]
 *			   },
 *			   {
 *				     "groupName": "group2",
 *				     "numofanimal": "2",
 *				     "groupdetails": "fff",
 *				     "fromDate": "2020-12-09",
 *				     "toDate": "2020-12-16",
 *				     "testarticle": "fff",
 *				     "vg": "1",
 *				     "route": "route1",
 *				     "injedetails": "222",
 *				     "animals":[
 *				       {
 *					         "animalId": "7162790",
 *					         "addedDate": "2021-01-08"
 *				       },
 *				       {
 *					         "animalId": "69991",
 *					         "addedDate": "2021-01-11"
 *				       }
 *				       ]
 *			   	}
 *				],
 *				 "takedownInfos": [
 *				   {
 *					     "name": "takedown1",
 *					     "date": "2020-12-15",
 *					     "perfusion": 2,
 *					     "samples": [
 *					       {
 *						         "sample": "Brain",
 *						         "region": "Hemisphere",
 *						         "portion": "Half Left",
 *						         "processing": "RNA Later"
 *					       },
 *					       {
 *						         "sample": "Brain",
 *						         "region": "Cortex",
 *						         "portion": "Half Right",
 *						         "processing": "Frozen"
 *					       }
 *					     ]
 *				   }
 *				 ]
 *		}
 * 
 */
 
 
  /**
 * @apiDefine StudyRequest2
 * @apiBody {String} projectName Project Name
 * @apiBody {String[]} [protocols] Protocol Name Array
 * @apiBody {String} studyCode Study Code
 * @apiBody {String} [studyType] Study Type
 * @apiBody {String} [studyGoals] Study Goals
 * @apiBody {String} [status] 
 * @apiBody {String} [startDate] 
 * @apiBody {String} [endDate] 
 * @apiBody {String} [details] 
 * @apiBody {Object} [groupInfos] 
 * @apiBody {String} groupInfos.[groupName] 
 * @apiBody {String} groupInfos.[numofanimal] 
 * @apiBody {String} groupInfos.[groupdetails] 
 * @apiBody {String} groupInfos.[fromDate] 
 * @apiBody {String} groupInfos.[toDate] 
 * @apiBody {String} groupInfos.[treatment] 
 * @apiBody {String} groupInfos.[dose] 
 * @apiBody {String} groupInfos.[route] 
 * @apiBody {String} groupInfos.[injedetails] 
 * @apiBody {String} groupInfos.[injectionvolumn] 
 * @apiBody {String} groupInfos.[lotnumber] 
 * @apiBody {Object[]} groupInfos.animals
 * @apiBody {String} groupInfos.animals.[animalId] 
 * @apiBody {String} groupInfos.animals.[addedDate] 
 * @apiBody {Object[]} takedownInfos 
 * @apiBody {String} takedownInfos.[name] 
 * @apiBody {String} takedownInfos.[date] 
 * @apiBody {Number} takedownInfos.[perfusion] 
 * @apiBody {Object[]}  takedownInfos.[samples]
 * @apiBody {String} takedownInfos.samples.[sample] 
 * @apiBody {String} takedownInfos.samples.[region] 
 * @apiBody {String} takedownInfos.samples.[portion] 
 * @apiBody {String} takedownInfos.samples.[processing] 
 * 
 */




