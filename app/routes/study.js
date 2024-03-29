



/**
 * @apiVersion 1.0.0
 * @api {get} /external/v1/study Get Study Information
 * @apiName getStudyInformation
 * @apiGroup Study
 * @apiDescription Used to get study information from SoftMouse.NET by Study Name.
 * 
 * @apiPermission Normal user. The customer should open API access.
 * @apiExample {curl} Example usage:
 *     curl -i "https://softmouse.net/external/v1/study?studyName=study20"  \
 *          -H "Content-Type:application/json"  \
 *          -H "Authorization:SMDB-oauthtoken MTAwMDAwMDAwMDU0.MEC-#uJGl->Bgv-7xbYqDdQH5cmN-9EjHR1u" \
 *          -X GET
 *
 * @apiExample {curl} Example usage:
 *     curl -i "https://softmouse.net/external/v1/study?sinceDateTime=2022-01-01T01:01:01Z"  \
 *          -H "Content-Type:application/json"  \
 *          -H "Authorization:SMDB-oauthtoken MTAwMDAwMDAwMDU0.MEC-#uJGl->Bgv-7xbYqDdQH5cmN-9EjHR1u" \
 *          -X GET
 * 
 * @apiUse RequestHeader
 * @apiParam {String} [studyCode] Study Name
 * @apiParam {DateTime} [sinceDateTime] Query all studies that were changed after this datetime
 * 
 * @apiUse ResponseFormat
 * @apiUse StudyResponse
 * @apiSuccessExample {json} Success-Response:
 *     	HTTP/1.1 200 OK
 *		{
 *			"messageCode": "200",
 *			"messageDesc": "SUCCESS",
 *			"respObj": [
 *			    {
 *			        "studyCode": "ISH3432-228",
 *			        "projectName": "EG234",
 *			        "startDate": "2022-08-04T04:00:00Z",
 *			        "endDate": null,
 *			        "studyType": null,
 *			        "studyStatus": null,
 *			        "details": "",
 *			        "studyGoals": "test",
 *			        "groupName": [
 *			            "g1",
 *			            "g2"
 *		            ],
 *			        "groupDetails": [
 * 			            "",
 * 			            ""
 * 			        ],
 *			        "lastUpdatedDateTime": "2022-08-06T03:27:54Z"
 * 			    }
 * 		    ]
 *		}
 * @apiErrorExample {json} Error-Response:
 *     	HTTP/1.1 200 OK
 *		{
 *			"messageCode": "406",
 *			"messageDesc": "The study does not exists."
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
 *     curl -i "http://127.0.0.1/SMDB-1.0/external/v1/study" \
 *          -H "Content-Type:application/json" \
 *          -H "Authorization:SMDB-oauthtoken MTAwMDAwMDAwMDU0.MEC-#uJGl->Bgv-7xbYqDdQH5cmN-9EjHR\!u" \
 *          -d '{
 *                  "projectName": "ISH234",
 *                  "protocols": ["protocol2"],
 *                  "studyCode": "study2021-01-03-004",
 *                  "studyType": "2183578",
 *                  "studyGoals": "goals222",
 *                  "status": "status1",
 *                  "startDate": "2020-12-08",
 *                  "endDate": "2021-03-31"
 *               }' \
 *         -X POST
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
 * @apiParam {Date} [startDate] 
 * @apiParam {Date} [endDate] 
 * @apiParam {String} [details] 
 * @apiParam {Object[]} [groupInfos] 
 * @apiParam {String} [groupInfos.groupName]
 * @apiParam {String} [groupInfos.numofanimal]
 * @apiParam {String} [groupInfos.groupdetails]
 * @apiParam {Date} [groupInfos.fromDate]
 * @apiParam {Date} [groupInfos.toDate]
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
 * @apiBody {Date} [startDate] 
 * @apiBody {Date} [endDate] 
 * @apiBody {String} [details] 
 * @apiBody {Object} [groupInfos] 
 * @apiBody {String} groupInfos.[groupName] 
 * @apiBody {String} groupInfos.[numofanimal] 
 * @apiBody {String} groupInfos.[groupdetails] 
 * @apiBody {Date} groupInfos.[fromDate] 
 * @apiBody {Date} groupInfos.[toDate] 
 * @apiBody {String} groupInfos.[treatment] 
 * @apiBody {String} groupInfos.[dose] 
 * @apiBody {String} groupInfos.[route] 
 * @apiBody {String} groupInfos.[injedetails] 
 * @apiBody {String} groupInfos.[injectionvolumn] 
 * @apiBody {String} groupInfos.[lotnumber] 
 * @apiBody {Object[]} groupInfos.animals
 * @apiBody {String} groupInfos.animals.[animalId] 
 * @apiBody {Date} groupInfos.animals.[addedDate] 
 * @apiBody {Object[]} takedownInfos 
 * @apiBody {String} takedownInfos.[name] 
 * @apiBody {Date} takedownInfos.[date] 
 * @apiBody {Number} takedownInfos.[perfusion] 
 * @apiBody {Object[]}  takedownInfos.[samples]
 * @apiBody {String} takedownInfos.samples.[sample] 
 * @apiBody {String} takedownInfos.samples.[region] 
 * @apiBody {String} takedownInfos.samples.[portion] 
 * @apiBody {String} takedownInfos.samples.[processing] 
 * 
 */


  


/**
 * @apiDefine StudyResponse
 * @apiSuccess {String} studyCode Study Code
 * @apiSuccess {String} projectName Project Name
 * @apiSuccess {Date} startDate Start Date
 * @apiSuccess {Date} endDate End Date
 * @apiSuccess {String} studyType Study Type
 * @apiSuccess {String} studyStatus Study Status
 * @apiSuccess {String} details Study Details
 * @apiSuccess {String} studyGoals Study Goals
 * @apiSuccess {String[]} groupName Group Name List
 * @apiSuccess {String[]} groupDetails Group Details List
 * @apiSuccess {DateTime} lastUpdatedDateTime Last updated DateTime 
 */ 