
/**
 * @apiDefine MouseResp
 * @apiSuccess {Object[]} respObj Mouse Objects (Array)
 * @apiSuccess {Number} respObj.id Mouse Id
 * @apiSuccess {String} respObj.ownerUser Owner name
 * @apiSuccess {String} respObj.creatorUser Creator name
 * @apiSuccess {Number} respObj.guiSid Mouse SID
 * @apiSuccess {String} respObj.sex Sex
 * @apiSuccess {Date} respObj.birthDate Birth date
 * @apiSuccess {Number=0,1,2,3,4,5} respObj.mouseState Mouse state 0-"Ended", 1-"Ended",2-"Mating",3-"Wealing",4-"Deleted",5-"Pup"
 * @apiSuccess {String} respObj.physicalTag Physical tag
 * @apiSuccess {String} respObj.litter_sid Litter SID
 * @apiSuccess {String} respObj.mouseLine MouseLine
 * @apiSuccess {String} respObj.protocol Protocol name
 * @apiSuccess {String} respObj.strain Strain
 * @apiSuccess {String} respObj.generation Generation
 * @apiSuccess {Date} respObj.receivedDate Received date
 * @apiSuccess {Date} respObj.endDate End date 
 * @apiSuccess {Date} respObj.weanDate Wean date 
 * @apiSuccess {Date} respObj.tailTagDate  TailTag date
 * @apiSuccess {Date} respObj.matureDate 
 * @apiSuccess {String} respObj.phenoType 
 * @apiSuccess {String} respObj.comment 
 * @apiSuccess {String} respObj.sourceSupplier 
 * @apiSuccess {String} respObj.mouseStatus 
 * @apiSuccess {String} respObj.mouseCategory 
 * @apiSuccess {String} respObj.mouseNotice 
 * @apiSuccess {String} respObj.endType 
 * @apiSuccess {String} respObj.endReason 
 * @apiSuccess {DateTime} respObj.createdDateTime 
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
 * @apiDefine MouseRespNew
 * @apiSuccess {Object[]} respObj Mouse Objects (Array)
 * @apiSuccess {Number} respObj.id Mouse Id
 * @apiSuccess {String} respObj.ownerUser Owner name
 * @apiSuccess {String} respObj.creatorUser Creator name
 * @apiSuccess {Number} respObj.guiSid Mouse SID
 * @apiSuccess {String} respObj.sex Sex
 * @apiSuccess {Date} respObj.birthDate Birth date
 * @apiSuccess {Number=0,1,2,3,4,5,6} respObj.mouseState Mouse state 0-"Ended", 1-"Stock",2-"Mating",3-"Wealing",4-"Deleted",5-"Pup", 6-"Ordered"
 * @apiSuccess {String} respObj.physicalTag Physical tag
 * @apiSuccess {String} respObj.litter_sid Litter SID
 * @apiSuccess {String} respObj.mouseLine MouseLine
 * @apiSuccess {String} respObj.protocol Protocol name
 * @apiSuccess {String} respObj.strain Strain
 * @apiSuccess {String} respObj.generation Generation
 * @apiSuccess {Date} respObj.receivedDate Received date
 * @apiSuccess {Date} respObj.endDate End date 
 * @apiSuccess {Date} respObj.weanDate Wean date 
 * @apiSuccess {Date} respObj.tailTagDate  TailTag date
 * @apiSuccess {Date} respObj.matureDate 
 * @apiSuccess {String} respObj.phenoType 
 * @apiSuccess {String} respObj.comment 
 * @apiSuccess {String} respObj.sourceSupplier 
 * @apiSuccess {String} respObj.mouseStatus 
 * @apiSuccess {String} respObj.mouseCategory 
 * @apiSuccess {String} respObj.mouseNotice 
 * @apiSuccess {String} respObj.endType 
 * @apiSuccess {String} respObj.endReason 
 * @apiSuccess {DateTime} respObj.createdDateTime 
 * @apiSuccess {String} respObj.altId alt ID / ear mark 
 * @apiSuccess {String} respObj.genoType 
 * @apiSuccess {String} respObj.sampleMass
 * @apiSuccess {String} respObj.studyInfo
 * @apiSuccess {String} respObj.cageSid 
 * @apiSuccess {String} respObj.cageTag
 * @apiSuccess {String} respObj.cageBarcode
 * @apiSuccess {DateTime} respObj.lastUpdatedDateTime
 * @apiSuccess {Number} totalPage
 * @apiSuccess {Number} currentPage
 * @apiSuccess {Number} totalNum
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
 *         		"birthDate": "2014-09-02",
 *           		"mouseState": 2,
 *           		"physicalTag": "5999ZZ",
 *           		"litter_sid": "193.1",
 *           		"mouseLine": "Adgrl3&lt;tm1Sud&gt;/J",
 *           		"protocol": "P2017-03",
 *           		"strain": null,
 *           		"generation": null,
 *           		"receivedDate": null,
 *          		"endDate": null,
 *          		"weanDate": "2014-09-23",
 *        		   	"tailTagDate": null,
 *           		"matureDate": "2014-10-14",
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
 *           		"sampleMass": null,
 *           		"studyInfo": "Test1234 [1]",
 *           		"cageSid": "155",
 *           		"cageTag": "tag1001",
 *           		"cageBarcode": "b000001",
 *           		"lastUpdatedDateTime": "2023-03-29T22:00:39Z"
 *       		},
 *  	   		{
 *          		"id": 914061,
 *     			"ownerUser": "Luis11 Liu",
 *          		"creatorUser": "Luis11 Liu",
 *          		"guiSid": 2279,
 *           		"sex": 0,
 *         		"birthDate": "2014-09-02",
 *           		"mouseState": 2,
 *           		"physicalTag": "6000ZZ",
 *           		"litter_sid": "193.1",
 *           		"mouseLine": "Adgrl3&lt;tm1Sud&gt;/J",
 *           		"protocol": "P2017-03",
 *           		"strain": null,
 *           		"generation": null,
 *           		"receivedDate": null,
 *          		"endDate": null,
 *          		"weanDate": "2014-09-23",
 *        		   	"tailTagDate": null,
 *           		"matureDate": "2014-10-14",
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
 *           		"sampleMass": null,
 *           		"studyInfo": "Test1234 [1]",
 *           		"cageSid": "155",
 *           		"cageTag": null,
 *           		"cageBarcode": null,
 *           		"lastUpdatedDateTime": "2023-03-29T22:00:39Z"
 *		     }
 *		 	 ],
 *            "totalPage": 1,
 *            "currentPage": 1,
 *            "totalNum": 2
 *		}
 * 
 */

 /**
 * @apiDefine AnimalResp
 * @apiSuccess {Object[]} respObj Animal Objects (Array)
 * @apiSuccess {Number} respObj.id Animal Id
 * @apiSuccess {String} respObj.ownerUser Owner name
 * @apiSuccess {String} respObj.creatorUser Creator name
 * @apiSuccess {Number} respObj.guiSid Animal SID
 * @apiSuccess {String} respObj.sex Sex
 * @apiSuccess {Date} respObj.birthDate Birth date
 * @apiSuccess {Number=0,1,2,3,4,5,6} respObj.state Animal state 0-"Ended", 1-"Stock",2-"Mating",3-"Weanling",4-"Deleted",5-"Pup", 6-"Ordered"
 * @apiSuccess {String} respObj.physicalTag Physical tag
 * @apiSuccess {String} respObj.litterSid Litter SID
 * @apiSuccess {String} respObj.strain “Strain/Mouseline name”
 * @apiSuccess {String} respObj.protocol Protocol name
 * @apiSuccess {String} respObj.background Background
 * @apiSuccess {String} respObj.generation Generation
 * @apiSuccess {Date} respObj.receivedDate Received date
 * @apiSuccess {Date} respObj.endDate End date 
 * @apiSuccess {Date} respObj.weanDate Wean date 
 * @apiSuccess {Date} respObj.tailTagDate  TailTag date
 * @apiSuccess {Date} respObj.matureDate 
 * @apiSuccess {String} respObj.phenotype 
 * @apiSuccess {String} respObj.comment 
 * @apiSuccess {String} respObj.sourceSupplier 
 * @apiSuccess {String} respObj.status 
 * @apiSuccess {String} respObj.category 
 * @apiSuccess {String} respObj.notice 
 * @apiSuccess {String} respObj.endType 
 * @apiSuccess {String} respObj.endReason 
 * @apiSuccess {DateTime} respObj.createdDateTime 
 * @apiSuccess {String} respObj.altId alt ID / ear mark 
 * @apiSuccess {String} respObj.genotype 
 * @apiSuccess {String} respObj.studyInfo
 * @apiSuccess {String} respObj.cageSid 
 * @apiSuccess {String} respObj.cageTag
 * @apiSuccess {String} respObj.cageBarcode
 * @apiSuccess {DateTime} respObj.lastUpdatedDateTime
 * @apiSuccess {Number} totalPage
 * @apiSuccess {Number} currentPage
  * @apiSuccess {Number} totalNum
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
 *         		"birthDate": "2014-09-02",
 *           		"state": 2,
 *           		"physicalTag": "5999ZZ",
 *           		"litterSid": "193.1",
 *           		"strain": "Adgrl3&lt;tm1Sud&gt;/J",
 *           		"protocol": "P2017-03",
 *           		"background": null,
 *           		"generation": null,
 *           		"receivedDate": null,
 *          		"endDate": null,
 *          		"weanDate": "2014-09-23",
 *        		   	"tailTagDate": null,
 *           		"matureDate": "2014-10-14",
 *           		"phenotype": null,
 *           		"comment": "mouse comment2",
 *           		"sourceSupplier": null,
 *           		"status": null,
 *           		"category": "Kelly",
 *           		"notice": "Reserved for mating",
 *           		"endType": null,
 *           		"endReason": null,
 *           		"createdDateTime": "2015-04-17T12:32:21Z",
 *           		"altId": "Orange",
 *           		"genotype": "ATG-5(+/1), 2ans(+/+), Cre(+), hsf1a(+/-)",
 *           		"studyInfo": "Test1234 [1]",
 *           		"cageSid": "155",
 *           		"cageTag": "tag1001",
 *           		"cageBarcode": "b000001",
 *           		"lastUpdatedDateTime": "2023-03-29T22:00:39Z"
 *       		},
 *  	   		{
 *          		"id": 914061,
 *     			"ownerUser": "Luis11 Liu",
 *          		"creatorUser": "Luis11 Liu",
 *          		"guiSid": 2279,
 *           		"sex": 0,
 *         		"birthDate": "2014-09-02",
 *           		"state": 2,
 *           		"physicalTag": "6000ZZ",
 *           		"litterSid": "193.1",
 *           		"strain": "Adgrl3&lt;tm1Sud&gt;/J",
 *           		"protocol": "P2017-03",
 *           		"background": null,
 *           		"generation": null,
 *           		"receivedDate": null,
 *          		"endDate": null,
 *          		"weanDate": "2014-09-23",
 *        		   	"tailTagDate": null,
 *           		"matureDate": "2014-10-14",
 *           		"phenotype": null,
 *           		"comment": "mouse 20230119",
 *           		"sourceSupplier": null,
 *           		"status": null,
 *           		"category": "Kelly",
 *           		"notice": "Reserved for mating",
 *           		"endType": null,
 *           		"endReason": null,
 *           		"createdDateTime": "2015-04-17T12:32:21Z",
 *           		"altId": "Orange",
 *           		"genotype": "ATG-5(+/1), 2ans(+/+), Cre(+), hsf1a(+/-)",
 *           		"studyInfo": "Test1234 [1]",
 *           		"cageSid": "155",
 *           		"cageTag": null,
 *           		"cageBarcode": null,
 *           		"lastUpdatedDateTime": "2023-03-29T22:00:39Z"
 *		     }
 *		 	 ],
 *            "totalPage": 1,
 *            "currentPage": 1,
 *            "totalNum": 2
 *		}
 * 
 */

 /**
 * @apiDefine AnimalResp_v1_3
 * @apiSuccess {Object[]} respObj Animal Objects (Array)
 * @apiSuccess {Number} respObj.id Animal Id
 * @apiSuccess {String} respObj.ownerUser Owner name
 * @apiSuccess {String} respObj.creatorUser Creator name
 * @apiSuccess {Number} respObj.guiSid Animal SID
 * @apiSuccess {String} respObj.sex Sex
 * @apiSuccess {Date} respObj.birthDate Birth date
 * @apiSuccess {Number=0,1,2,3,4,5,6} respObj.state Animal state 0-"Ended", 1-"Stock",2-"Mating",3-"Weanling",4-"Deleted",5-"Pup", 6-"Ordered"
 * @apiSuccess {String} respObj.physicalTag Physical tag
 * @apiSuccess {String} respObj.litterSid Litter SID
 * @apiSuccess {String} respObj.strain “Strain/Mouseline name”
 * @apiSuccess {String} respObj.protocol Protocol name
 * @apiSuccess {String} respObj.background Background
 * @apiSuccess {String} respObj.generation Generation
 * @apiSuccess {Date} respObj.receivedDate Received date
 * @apiSuccess {Date} respObj.endDate End date 
 * @apiSuccess {Date} respObj.weanDate Wean date 
 * @apiSuccess {Date} respObj.tailTagDate  TailTag date
 * @apiSuccess {Date} respObj.matureDate 
 * @apiSuccess {String} respObj.phenotype 
 * @apiSuccess {String} respObj.comment 
 * @apiSuccess {String} respObj.sourceSupplier 
 * @apiSuccess {String} respObj.status 
 * @apiSuccess {String} respObj.category 
 * @apiSuccess {String} respObj.notice 
 * @apiSuccess {String} respObj.endType 
 * @apiSuccess {String} respObj.endReason 
 * @apiSuccess {DateTime} respObj.createdDateTime 
 * @apiSuccess {String} respObj.altId alt ID / ear mark 
 * @apiSuccess {String} respObj.genotype 
 * @apiSuccess {String} respObj.studyInfo
 * @apiSuccess {String} respObj.cageSid 
 * @apiSuccess {String} respObj.cageTag
 * @apiSuccess {String} respObj.cageBarcode
 * @apiSuccess {DateTime} respObj.lastUpdatedDateTime
 * @apiSuccess {Number} totalPage
 * @apiSuccess {Number} currentPage
 * @apiSuccess {Number} totalNum
 * @apiSuccessExample {json} Success-Response:
 *     {
 *   "messageCode": "200",
 *   "messageDesc": "SUCCESS",
 *   "respObj": [
 *       {
 *           "id": 914069,
 *           "ownerUser": "Raji Test",
 *           "creatorUser": "Raji Test",
 *           "guiSid": 2281,
 *           "sex": 1,
 *           "birthDate": "2014-11-07",
 *           "state": 2,
 *           "physicalTag": "1304",
 *           "litterSid": "153.1",
 *           "strain": "hsf1",
 *           "protocol": null,
 *           "background": null,
 *           "generation": null,
 *           "receivedDate": null,
 *           "endDate": null,
 *           "weanDate": "2014-11-28",
 *           "tailTagDate": null,
 *           "matureDate": "2014-12-19",
 *           "phenotype": null,
 *           "comment": null,
 *           "sourceSupplier": "Jax",
 *           "status": null,
 *           "category": "c2",
 *           "notice": "Reserved for study_512",
 *           "endType": null,
 *           "endReason": null,
 *           "createdDateTime": "2015-04-17T08:32:28Z",
 *           "altId": null,
 *           "genotype": "hsf1a(-/-)",
 *           "lastUpdatedDateTime": "2023-11-29T13:17:11Z",
 *           "cageSid": "1877",
 *           "cageTag": null,
 *           "cageBarcode": null,
 *           "studyInfo": [
 *               {
 *                   "code": "Study_302 B",
 *                   "group": "Without Group",
 *                   "status": "Inactive"
 *               },
 *               {
 *                   "code": "study_231127",
 *                   "group": "group1",
 *                   "status": "Active"
 *               }
 *           ]
 *       }
 *   ],
 *   "totalPage": 1,
 *   "currentPage": 1,
 *   "totalNum": 1
 *}
 * 
 */

 /**
 * @apiIgnore not in the doc
 * @apiVersion 1.0.0
 * @api {get} /external/v1/animal Get Animal List
 * @apiName getMouse
 * @apiGroup Mouse
 * @apiDescription The Get Animal api call is used to pull information on one, or a group of animals. The API user must have View access on those records.
 * 
 * @apiPermission Normal user. The customer should open API access.
 * 
 * @apiExample {curl} Example usage:
 *     curl -i "https://softmouse.net/external/v1/mouse" \
 *          -H "Content-Type:application/json"  \
 *          -H "Authorization:SMDB-oauthtoken CWKw%ij7h_&8c.VN0XDXwT#WqW!z.A70EmMI" \
 *          -d "{\"ownerUser_name\":\"test\", \"mouseSID\":[2278,2279]}" \
 *          -X GET
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
 * @apiVersion 1.1.0
 * @api {get} /external/v1.1/mouse Get Animal
 * @apiName getAnimal
 * @apiGroup Animal
 * @apiDescription Get mouse information api
 * used to pull information related to a mouse / a group of mice that the API user has Edit/View access to.
 * It supports querying by mouse identifier with owners / mouse state / studyCode / since date time. 
 * 
 * @apiPermission Normal user. The customer should open API access.
 * 
 * @apiExample {curl} Example usage:
 *     curl -i "https://softmouse.net/external/v1.1/mouse?ownerUser_name=test&mouseSID=2278&mouseSID=2279"  \
 *          -H "Content-Type:application/json"  \
 *          -H "Authorization:SMDB-oauthtoken CWKw%ij7h_&8c.VN0XDXwT#WqW!z.A70EmMI" \
 *          -X GET
 * 
 * @apiExample {curl} Example usage:
 *     curl -i "https://softmouse.net/external/v1.1/mouse?studyCode=study2021-01-04-004&studyCode=study2021-01-05-004" \
 *          -H "Content-Type:application/json"  \
 *          -H "Authorization:SMDB-oauthtoken CWKw%ij7h_&8c.VN0XDXwT#WqW!z.A70EmMI" \
 *          -X GET
 * 
 * @apiExample {curl} Example usage:
 *     curl -i "https://softmouse.net/external/v1.1/mouse?sinceDateTime=2021-02-08T00:00:01Z&ownerUser_name=David Yu&ownerUser_name=Meabc Lu"  \
 *          -H "Content-Type:application/json" \
 *          -H "Authorization:SMDB-oauthtoken CWKw%ij7h_&8c.VN0XDXwT#WqW!z.A70EmMI" \
 *          -X GET
 * 
 * @apiExample {curl} Example usage:
 *     curl -i "https://softmouse.net/external/v1.1/mouse?sinceDateTime=2023-02-08T00:00:01Z&pageNo=2"  \
 *          -H "Content-Type:application/json"  \
 *          -H "Authorization:SMDB-oauthtoken CWKw%ij7h_&8c.VN0XDXwT#WqW!z.A70EmMI" \
 *          -X GET
 * 
 * @apiExample {curl} Example usage:
 *     curl -i "https://softmouse.net/external/v1.1/mouse?sinceDateTime=2023-01-08T00:00:01Z&mouseState=ENDED&mouseState=ORDERED"  \
 *          -H "Content-Type:application/json"  \
 *          -H "Authorization:SMDB-oauthtoken CWKw%ij7h_&8c.VN0XDXwT#WqW!z.A70EmMI" \
 *          -X GET
 * 
 *      
 * @apiUse RequestHeader
 * @apiParam {Number[]} [mouseIds] Mouse Id array
 * @apiParam {String[]} [ownerUser_name] Owner login name or full name
 * @apiParam {Number[]} [ownerUser_id] Owner user id
 * @apiParam {Number[]} [mouseSID] Mouse SID array
 * @apiParam {String[]="ENDED","STOCK", "MATING", "WEANLING", "PUP","ORDERED"} [mouseState] Mouse State
 * @apiParam {String[]} [studyCode] Study Code
 * @apiParam {String="ACTIVE"} [studyState] Study State
 * @apiParam {DateTime} [sinceDateTime] Return all changed mice after this datetime
 * @apiParam {Number} [numberPerPage] Number of Records per Page, default is 200
 * @apiParam {Number} [pageNo] Page No
 * 
 * @apiUse ResponseFormat
 * @apiUse MouseRespNew
 *
 * @apiUse TokenErrorResp
 * @apiSampleRequest /v1.1/mouse 
 */




  /**
 * @apiVersion 1.2.0
 * @api {get} /external/v1.2/animal Get Animal
 * @apiName getAnimal 
 * @apiGroup Animal
 * @apiDescription The Get Animal api call is used to pull information on one, or a group of animals. The API user must have View access on those records.
 * 
 * @apiPermission Normal user. The customer should open API access.
 * 
 * @apiExample {curl} Example usage:
 *     curl -i "https://softmouse.net/external/v1.2/animal?ownerUser_name=test&animalSID=2278&animalSID=2279"  \
 *          -H "Content-Type:application/json"  \
 *          -H "Authorization:SMDB-oauthtoken CWKw%ij7h_&8c.VN0XDXwT#WqW!z.A70EmMI" \
 *          -X GET
 * 
 * @apiExample {curl} Example usage:
 *     curl -i "https://softmouse.net/external/v1.2/animal?studyCode=study2021-01-04-004&studyCode=study2021-01-05-004" \
 *          -H "Content-Type:application/json"  \
 *          -H "Authorization:SMDB-oauthtoken CWKw%ij7h_&8c.VN0XDXwT#WqW!z.A70EmMI" \
 *          -X GET
 * 
 * @apiExample {curl} Example usage:
 *     curl -i "https://softmouse.net/external/v1.2/animal?sinceDateTime=2021-02-08T00:00:01Z&ownerUser_name=David Yu&ownerUser_name=Meabc Lu"  \
 *          -H "Content-Type:application/json" \
 *          -H "Authorization:SMDB-oauthtoken CWKw%ij7h_&8c.VN0XDXwT#WqW!z.A70EmMI" \
 *          -X GET
 * 
 * @apiExample {curl} Example usage:
 *     curl -i "https://softmouse.net/external/v1.2/animal?sinceDateTime=2023-02-08T00:00:01Z&pageNo=2"  \
 *          -H "Content-Type:application/json"  \
 *          -H "Authorization:SMDB-oauthtoken CWKw%ij7h_&8c.VN0XDXwT#WqW!z.A70EmMI" \
 *          -X GET
 * 
 * @apiExample {curl} Example usage:
 *     curl -i "https://softmouse.net/external/v1.2/animal?sinceDateTime=2023-01-08T00:00:01Z&state=ENDED&state=ORDERED"  \
 *          -H "Content-Type:application/json"  \
 *          -H "Authorization:SMDB-oauthtoken CWKw%ij7h_&8c.VN0XDXwT#WqW!z.A70EmMI" \
 *          -X GET
 * 
 *      
 * @apiUse RequestHeader
 * @apiParam {Number[]} [AnimalIds] Animal Id array
 * @apiParam {String[]} [ownerUser_name] Owner login name or full name
 * @apiParam {Number[]} [ownerUser_id] Owner user id
 * @apiParam {Number[]} [animalSID] Animal SID array
 * @apiParam {String[]="ENDED","STOCK", "MATING", "WEANLING", "PUP","ORDERED"} [state] Animal State
 * @apiParam {String[]} [studyCode] Study Code
 * @apiParam {String="ACTIVE"} [studyState] Study State
 * @apiParam {DateTime} [sinceDateTime] Return all changed mice after this datetime
 * @apiParam {Number} [numberPerPage] Number of Records per Page, default is 200
 * @apiParam {Number} [pageNo] Page No
 * 
 * @apiUse ResponseFormat
 * @apiUse AnimalResp
 *
 * @apiUse TokenErrorResp
 * @apiSampleRequest /v1.2/animal 
 */

/**
 * @apiVersion 1.3.0
 * @api {get} /external/v1.3/animal Get Animal
 * @apiName getAnimal 
 * @apiGroup Animal
 * @apiDescription The Get Animal api call is used to pull information on one, or a group of animals. The API user must have View access on those records.
 * 
 * @apiPermission Normal user. The customer should open API access.
 * 
 * @apiExample {curl} Example usage:
 *     curl -i "https://softmouse.net/external/v1.2/animal?ownerUser_name=test&animalSID=2278&animalSID=2279"  \
 *          -H "Content-Type:application/json"  \
 *          -H "Authorization:SMDB-oauthtoken CWKw%ij7h_&8c.VN0XDXwT#WqW!z.A70EmMI" \
 *          -X GET
 * 
 * @apiExample {curl} Example usage:
 *     curl -i "https://softmouse.net/external/v1.2/animal?studyCode=study2021-01-04-004&studyCode=study2021-01-05-004" \
 *          -H "Content-Type:application/json"  \
 *          -H "Authorization:SMDB-oauthtoken CWKw%ij7h_&8c.VN0XDXwT#WqW!z.A70EmMI" \
 *          -X GET
 * 
 * @apiExample {curl} Example usage:
 *     curl -i "https://softmouse.net/external/v1.2/animal?sinceDateTime=2021-02-08T00:00:01Z&ownerUser_name=David Yu&ownerUser_name=Meabc Lu"  \
 *          -H "Content-Type:application/json" \
 *          -H "Authorization:SMDB-oauthtoken CWKw%ij7h_&8c.VN0XDXwT#WqW!z.A70EmMI" \
 *          -X GET
 * 
 * @apiExample {curl} Example usage:
 *     curl -i "https://softmouse.net/external/v1.2/animal?sinceDateTime=2023-02-08T00:00:01Z&pageNo=2"  \
 *          -H "Content-Type:application/json"  \
 *          -H "Authorization:SMDB-oauthtoken CWKw%ij7h_&8c.VN0XDXwT#WqW!z.A70EmMI" \
 *          -X GET
 * 
 * @apiExample {curl} Example usage:
 *     curl -i "https://softmouse.net/external/v1.2/animal?sinceDateTime=2023-01-08T00:00:01Z&state=ENDED&state=ORDERED"  \
 *          -H "Content-Type:application/json"  \
 *          -H "Authorization:SMDB-oauthtoken CWKw%ij7h_&8c.VN0XDXwT#WqW!z.A70EmMI" \
 *          -X GET
 * 
 *      
 * @apiUse RequestHeader
 * @apiParam {Number[]} [AnimalIds] Animal Id array
 * @apiParam {String[]} [ownerUser_name] Owner login name or full name
 * @apiParam {Number[]} [ownerUser_id] Owner user id
 * @apiParam {Number[]} [animalSID] Animal SID array
 * @apiParam {String[]="ENDED","STOCK", "MATING", "WEANLING", "PUP","ORDERED"} [state] Animal State
 * @apiParam {String[]} [studyCode] Study Code
 * @apiParam {String="ACTIVE"} [studyState] Study State
 * @apiParam {DateTime} [sinceDateTime] Return all changed mice after this datetime
 * @apiParam {Number} [numberPerPage] Number of Records per Page, default is 200
 * @apiParam {Number} [pageNo] Page No
 * 
 * @apiUse ResponseFormat
 * @apiUse AnimalResp_v1_3
 *
 * @apiUse TokenErrorResp
 * @apiSampleRequest /v1.2/animal 
 */

  
 /**
 * @apiDefine endAnimalResp
 *
 * @apiSuccessExample {json} Success-Response:
 * 
 *     	HTTP/1.1 200 OK
 *		{
 *          "messageCode": "200",
 *          "messageDesc": "2 animals are ended"
 *      }
 * 
 * 
 */

  /**
 * @apiVersion 1.2.0
 * @api {put} /external/v1.2/animal End Animals
 * @apiName endAnimals
 * @apiGroup Animal
 * @apiDescription The End Animal call is used to end one, or group of queried animals given an End Date and Type. The API user must have Edit access on those records.
 * 
 * @apiPermission Normal user. The customer should open API access.
 * 
 * @apiExample {curl} Example usage:
 *     curl -i "https://softmouse.net/external/v1.2/animal?ownerUser_name=test&animalSID=205&animalSID=206"  \
 *          -H "Content-Type:application/json"  \
 *          -H "Authorization:SMDB-oauthtoken CWKw%ij7h_&8c.VN0XDXwT#WqW!z.A70EmMI" \
 *          -d '{"endType" : "Missing",
 *              "endReason" : "Flood"
 *              }'
 *          -X PUT
 * 
 * @apiExample {curl} Example usage:
 *     curl -i "https://softmouse.net/external/v1.2/animal??animalSID=281&ownerUser_name=bluesky \
 *          -H "Content-Type:application/json"  \
 *          -H "Authorization:SMDB-oauthtoken CWKw%ij7h_&8c.VN0XDXwT#WqW!z.A70EmMI" \
 *          -D '{
 *                  "endDate":"2024-04-08T00:00:01Z",
 *                  "endType": "Found Dead",
 *                  "endReason":"Sick",
 *                  "comment":"Involved in study"
 *              }'
 *          -X PUT
 * 
 * 
 * @apiExample {curl} Example usage:
 *     curl -i "https://softmouse.net/external/v1.2/animal?animalSID=223&studyCode=sc56  \
 *          -H "Content-Type:application/json" \
 *          -H "Authorization:SMDB-oauthtoken CWKw%ij7h_&8c.VN0XDXwT#WqW!z.A70EmMI" \
 *          -D '{
 *                  "endType": "Found Dead"
 *              }'
 *          -X PUT
 * 
 * @apiExample {curl} Example usage:
 *     curl -i "https://softmouse.net/external/v1.2/animal?animalSID=1194515&animalSID=1194516"  \
 *          -H "Content-Type:application/json"  \
 *          -H "Authorization:SMDB-oauthtoken CWKw%ij7h_&8c.VN0XDXwT#WqW!z.A70EmMI" \
 *         -D '{
 *                  "endDate":"2024-02-08T00:00:01Z",
 *                  "endType": "Sacrificed"
 *              }'
 *          -X PUT
 * 
 * 
 *      
 * @apiUse RequestHeader
 * @apiParam {Number[]} [animalIds] Animal Id array
 * @apiParam {String[]} [ownerUser_name] Owner login name or full name
 * @apiParam {Number[]} [ownerUser_id] Owner user id
 * @apiParam {Number[]} [animalSID] Animal SID array
 * @apiParam {DateTime} [endDate] End date
 * @apiParam {String} endType End type
 * @apiParam {String} [endReason] End reason
 * @apiParam {String} [comment] Comment
 * @apiParam {String[]="ENDED","STOCK", "MATING", "WEANLING", "PUP","ORDERED"} [state] Animal State
 * @apiParam {String[]} [studyCode] Study Code
 * @apiParam {String="ACTIVE"} [studyState] Study State
 * @apiParam {DateTime} [sinceDateTime] Return all changed mice after this datetime
 * @apiParam {Number} [numberPerPage] Number of Records per Page, default is 200
 * @apiParam {Number} [pageNo] Page No
 * 
 * @apiUse ResponseFormat
 * @apiUse endAnimalResp
 *
 * @apiUse TokenErrorResp
 * @apiSampleRequest /v1.2/animal 
 */

