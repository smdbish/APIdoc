/**
 * @apiVersion 1.0.0
 * @api {get} /external/v1/study Get Study
 * @apiName getStudyInformation
 * @apiGroup Study
 * @apiDescription The Get Study api call is used to pull information on one, or a group of studies. The API user must have View access on those records.
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
 * @apiVersion 1.2.0
 * @api {get} /external/v1.2/study Get Study
 * @apiName getStudyInformation
 * @apiGroup Study
 * @apiDescription The Get Study api call is used to pull information on one, or a group of studies. The API user must have View access on those records.
 * 
 * @apiPermission Normal user. The customer should open API access.
 * @apiExample {curl} Example usage:
 *     curl -i "https://softmouse.net/external/v1.2/study?code=study20"  \
 *          -H "Content-Type:application/json"  \
 *          -H "Authorization:SMDB-oauthtoken MTAwMDAwMDAwMDU0.MEC-#uJGl->Bgv-7xbYqDdQH5cmN-9EjHR1u" \
 *          -X GET
 *
 * @apiExample {curl} Example usage:
 *     curl -i "https://softmouse.net/external/v1.2/study?sinceDateTime=2022-01-01T01:01:01Z"  \
 *          -H "Content-Type:application/json"  \
 *          -H "Authorization:SMDB-oauthtoken MTAwMDAwMDAwMDU0.MEC-#uJGl->Bgv-7xbYqDdQH5cmN-9EjHR1u" \
 *          -X GET
 * 
 * @apiUse RequestHeader
 * @apiParam {String} [code] Study Code
 * @apiParam {DateTime} [sinceDateTime] Query all studies that were changed after this datetime
 * 
 * @apiUse ResponseFormat
 * @apiUse StudyResponseNew
 * @apiSuccessExample {json} Success-Response:
 *     	HTTP/1.1 200 OK
 *		{
 *			"messageCode": "200",
 *			"messageDesc": "SUCCESS",
 *			"respObj": [
 *			    {
 *			        "code": "ISH3432-228",
 *			        "projectName": "EG234",
 *			        "startDate": "2022-08-04T04:00:00Z",
 *			        "endDate": null,
 *			        "studyType": null,
 *			        "status": null,
 *			        "details": "",
 *			        "title": "test",
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
 * @apiSampleRequest /v1.2/study
 */

 
/**
 * @apiVersion 1.0.0
 * @api {post} /external/v1/study Add Study
 * @apiName addNewStudy
 * @apiGroup Study
 * @apiDescription The Add Study api call is used to create a new study. The API user must have Create permission for studies.
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
 * @apiVersion 1.2.0
 * @api {post} /external/v1.2/study Add Study
 * @apiName addNewStudy
 * @apiGroup Study
 * @apiDescription The Add Study api call is used to create a new study. The API user must have Create permission for studies.
 * 
 * @apiPermission Normal user. The customer should open API access.
 * @apiExample {curl} Example usage:
 *     curl -i "http://127.0.0.1/SMDB-1.0/external/v1.2/study" \
 *          -H "Content-Type:application/json" \
 *          -H "Authorization:SMDB-oauthtoken MTAwMDAwMDAwMDU0.MEC-#uJGl->Bgv-7xbYqDdQH5cmN-9EjHR\!u" \
 *          -d '{
 *                  "projectName": "ISH234",
 *                  "protocols": ["protocol2"],
 *                  "code": "study2021-01-03-004",
 *                  "studyType": "2183578",
 *                  "title": "goals222",
 *                  "status": "status1",
 *                  "startDate": "2020-12-08",
 *                  "endDate": "2021-03-31"
 *               }' \
 *         -X POST
 * 
 * @apiUse RequestHeader
 * @apiUse StudyRequestNew
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
 * @apiSampleRequest /v1.2/study
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
 * @apiDefine StudyRequestNew
 * @apiParam {String} projectName Project Name
 * @apiParam {String} code Study Code
 * @apiParam {String[]} [protocols] Protocol Name Array
 * @apiParam {String} [studyType] Study Type
 * @apiParam {String} [title] Study Title
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
 *				"code": "study2023-03-01-001"
 *     }
 *
 * @apiParamExample {json} Request-Example:
 *		{
 *			 "projectName": "ISH234",
 *			 "protocols": [
 *				   "protocol2"
 *			 ],
 * 			"code": "study2021-01-03-004",
 *			 "studyType": "2183578",
 *			 "title": "goals222",
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
 * @apiBody {String} code Study Code
 * @apiBody {String} [studyType] Study Type
 * @apiBody {String} [title] Study Title
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
 * @apiSuccess {Object[]} respObj Study Objects (Array)
 * @apiSuccess {String} respObj.studyCode Study Code
 * @apiSuccess {String} respObj.projectName Project Name
 * @apiSuccess {Date} respObj.startDate Start Date
 * @apiSuccess {Date} respObj.endDate End Date
 * @apiSuccess {String} respObj.studyType Study Type
 * @apiSuccess {String} respObj.studyStatus Study Status
 * @apiSuccess {String} respObj.details Study Details
 * @apiSuccess {String} respObj.studyGoals Study Goals
 * @apiSuccess {String[]} respObj.groupName Group Name List
 * @apiSuccess {String[]} respObj.groupDetails Group Details List
 * @apiSuccess {DateTime} respObj.lastUpdatedDateTime Last updated DateTime 
 */ 

/**
 * @apiDefine StudyResponseNew
 * @apiSuccess {Object[]} respObj Study Objects (Array)
 * @apiSuccess {String} respObj.code Study Code
 * @apiSuccess {String} respObj.projectName Project Name
 * @apiSuccess {Date} respObj.startDate Start Date
 * @apiSuccess {Date} respObj.endDate End Date
 * @apiSuccess {String} respObj.studyType Study Type
 * @apiSuccess {String} respObj.status Study Status
 * @apiSuccess {String} respObj.details Study Details
 * @apiSuccess {String} respObj.title Study Title
 * @apiSuccess {String[]} respObj.groupName Group Name List
 * @apiSuccess {String[]} respObj.groupDetails Group Details List
 * @apiSuccess {DateTime} respObj.lastUpdatedDateTime Last updated DateTime 
 */ 