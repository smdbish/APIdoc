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
 * @apiSuccess {Date} respObj.collectedDate collected date
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
 * @apiSuccess {Date} respObj.birthDate
 * @apiSuccess {Date} respObj.endDate
 * @apiSuccess {String} respObj.mouseComment
 * @apiSuccess {String} respObj.sampleComment
 * @apiSuccess {Number} respObj.mouseSID
 * @apiSuccess {Number} respObj.physicalTag
 * @apiSuccess {Number} totalPage Total pages
 * @apiSuccess {Number} currentPage Current page no
 * @apiSuccess {Number} collectedSyncNum The number of records that were collected and synchronized
 * @apiSuccess {Number} collectedNotSyncNum The number of records that were collected but not synchronized
 * @apiSuccess {Number} pendingNum The number of records that are pending
 * @apiSuccess {Number} archivedNum The number of records that were archived
 * @apiSuccess {Number} totalNum The total number
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
 *           		"birthDate": "2019-09-18",
 *           		"endDate": "2021-07-08",
 *           		"mouseComment": null,
 *           		"sampleComment": null,
 *           		"mouseSID": 611,
 *           		"physicalTag": "AS001"
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
 *		        "birthDate": "2019-09-18",
 *	            "endDate": "2021-07-08",
 *		        "mouseComment": null,
 *		        "sampleComment": null,
 *		        "mouseSID": 611,
 *           		"physicalTag": null
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



 /**
 * @apiDefine SampleRespNew
 * @apiSuccess {Object[]} respObj Sample Objects (Array)
 * @apiSuccess {Number} respObj.id Sample Id
 * @apiSuccess {String} respObj.barcode Sample barcode
 * @apiSuccess {String} respObj.tissueOrgan Tissue / Organ
 * @apiSuccess {String} respObj.anatomicRegion anatomic region
 * @apiSuccess {String} respObj.portion Portion
 * @apiSuccess {String} respObj.partialCollDetails partial collection detail
 * @apiSuccess {String="Archived", "Pending Collection","Collected","Deleted"} respObj.state Sample State
 * @apiSuccess {Date} respObj.collectedDate collected date
 * @apiSuccess {String} respObj.collectedBy collected by
 * @apiSuccess {Number} respObj.studyId Study unique Id
 * @apiSuccess {String} respObj.seqId sequence Id
 * @apiSuccess {String} respObj.litterSid Litter SID
 * @apiSuccess {String} respObj.altId alt Id / ear mark
 * @apiSuccess {String} respObj.aliquot aliquot
 * @apiSuccess {String} respObj.process 
 * @apiSuccess {String} respObj.bloodDerivative 
 * @apiSuccess {String="M","F","I"} respObj.sex  “M” - male, “F” -female, “I” -unknown
 * @apiSuccess {String} respObj.genotype 
 * @apiSuccess {String} respObj.studyName 
 * @apiSuccess {String} respObj.sampleVolume 
 * @apiSuccess {String} respObj.organWeight 
 * @apiSuccess {String="Not uploaded" ,"Uploaded","Modified"} respObj.syncStatus 
 * @apiSuccess {String} respObj.groupName 
 * @apiSuccess {String} respObj.strain Strain/Mouseline name
 * @apiSuccess {String} respObj.background
 * @apiSuccess {Date} respObj.birthDate
 * @apiSuccess {Date} respObj.endDate
 * @apiSuccess {String} respObj.animalComment
 * @apiSuccess {String} respObj.sampleComment
 * @apiSuccess {Number} respObj.animalSID
 * @apiSuccess {Number} respObj.physicalTag
 * @apiSuccess {Number} totalPage Total pages
 * @apiSuccess {Number} currentPage Current page no
 * @apiSuccess {Number} collectedSyncNum The number of records that were collected and synchronized
 * @apiSuccess {Number} collectedNotSyncNum The number of records that were collected but not synchronized
 * @apiSuccess {Number} pendingNum The number of records that are pending
 * @apiSuccess {Number} archivedNum The number of records that were archived
 * @apiSuccess {Number} totalNum The total number
 * @apiSuccessExample {json} Success-Response:
 *     	HTTP/1.1 200 OK
 *		{
 *			"messageCode": "200",
 *  			"messageDesc": "SUCCESS",
 *   			"respObj": [
 *       		{
 *           		"id": 2222,
 *           		"barcode": "SMAAA297",
 *           		"tissueOrgan": "Brain",
 *           		"anatomicRegion": "Midbrain",
 *           		"portion": "L",
 *           		"partialCollDetails": null,
 *           		"state": "Collected",
 *           		"collectedDate": "2021-07-08T04:57:05Z",
 *           		"collectedBy": "Test",
 *           		"studyId": 100,
 *           		"seqId": "12",
 *           		"litterSid": "622.2",
 *           		"altId": null,
 *           		"aliquot": "",
 *           		"process": "Frozen",
 *           		"bloodDerivative": "",
 *           		"sex": "M",
 *           		"genotype": "",
 *           		"studyName": "study-2021-06-2901",
 *           		"sampleVolume": 1,
 *           		"organWeight": "",
 *           		"sampleWeight": "",
 *           		"syncStatus": "Uploaded",
 *           		"groupName": "Without Group",
 *           		"vectorDescription": null,
 *           		"strain": "Adgrl3&lt;tm1Sud&gt;/J",
 *           		"background": null,
 *           		"birthDate": "2019-09-18",
 *           		"endDate": "2021-07-08",
 *           		"animalComment": null,
 *           		"sampleComment": null,
 *           		"animalSID": 611,
 *           		"physicalTag": "AS001"
 *			},
 *			{
 *          		"id": 2223,
 *           		"barcode": "SMAAA298",
 *		  		"tissueOrgan": "Brain",
 *		  		"anatomicRegion": "Midbrain",
 *		    	"portion": "L",
 *		    	"partialCollDetails": null,
 *		    	"state": "Collected",
 *		        "collectedDate": "2021-07-08T04:57:05Z",
 *		        "collectedBy": "Test",
 *		        "studyId": 100,
 *		        "seqId": "12",
 *	            "litterSid": "622.2",
 *	      		"altId": null,
 *		        "aliquot": "",
 *		        "process": "Frozen",
 *	            "bloodDerivative": "",
 *		        "sex": "M",
 *		        "genotype": "",
 *		        "studyName": "study-2021-06-2901",
 *		        "sampleVolume": 2,
 *				"organWeight": "",
 *		        "sampleWeight": "",
 *	 	        "syncStatus": "Uploaded",
 *	            "groupName": "Without Group",
 *		        "vectorDescription": null,
 *	   	        "strain": "Adgrl3&lt;tm1Sud&gt;/J",
 *	            "background": null,
 *		        "birthDate": "2019-09-18",
 *	            "endDate": "2021-07-08",
 *		        "animalComment": null,
 *		        "sampleComment": null,
 *		        "animalSID": 611,
 *           		"physicalTag": null
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


   /**
 * @apiVersion 1.0.0
 * @api {get} /external/v1/sample Get Sample
 * @apiName getSample
 * @apiGroup Sample
 * @apiDescription Get sample information api
 * 
 * @apiPermission Normal user. The customer should open API access.
 * @apiExample {curl} Example usage:
 *     curl -i "https://softmouse.net/external/v1/sample?studyName=study-2021-06-2901&syncStatus=0&state=0&numberPerPage=10&pageNo=1"  \
 *          -H "Content-Type:application/json"  \
 *          -H "Authorization:SMDB-oauthtoken MTAwMDAwMDAwMDU0.MEC-#uJGl->Bgv-7xbYqDdQH5cmN-9EjHR1u" \
 *          -X GET
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
 * @apiVersion 1.2.0
 * @api {get} /external/v1.2/sample Get Sample
 * @apiName getSample
 * @apiGroup Sample
 * @apiDescription Get sample information api
 * 
 * @apiPermission Normal user. The customer should open API access.
 * @apiExample {curl} Example usage:
 *     curl -i "https://softmouse.net/external/v1.2/sample?studyName=study-2021-06-2901&syncStatus=0&state=0&numberPerPage=10&pageNo=1"  \
 *          -H "Content-Type:application/json"  \
 *          -H "Authorization:SMDB-oauthtoken MTAwMDAwMDAwMDU0.MEC-#uJGl->Bgv-7xbYqDdQH5cmN-9EjHR1u" \
 *          -X GET
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
 * @apiUse SampleRespNew
 * @apiUse TokenErrorResp
 * @apiSampleRequest /v1.2/sample 
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
 *     curl -i "https://softmouse.net/external/v1/sample/status?sampleId=20"  \
 *          -H "Content-Type:application/json"  \
 *          -H "Authorization:SMDB-oauthtoken MTAwMDAwMDAwMDU0.MEC-#uJGl->Bgv-7xbYqDdQH5cmN-9EjHR1u" \
 *          -X PUT
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
