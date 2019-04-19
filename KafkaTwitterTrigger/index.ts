import { AzureFunction, Context } from "@azure/functions"

const kafkaTrigger: AzureFunction = async function (context: Context, event: string): Promise<void> {
    
    context.log('Kafka trigger fired!', event);   
};

export default kafkaTrigger;
