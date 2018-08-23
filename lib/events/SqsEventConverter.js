'use strict';

const utils = require('../utils');
const randomstring = require('randomstring');


class SqsEventConverter {
    constructor(serverless) {
        this.serverless = serverless;
    }

    getEventType() {
        return "SQS";
    }

    convertEvent(event, targetResourceName) {
        console.log("SQS event is:", event);
        let eventData = {
            Queue: "" ,
            BatchSize: null
        };
        let resources = {};
        eventData.Queue = "!GetAtt" + " " + event.arn['Fn::GetAtt'][0] + ".Arn";
        eventData.BatchSize = event.batchSize;
        return {
            event: eventData,
            resources: resources
        }
    }

}



module.exports = SqsEventConverter;