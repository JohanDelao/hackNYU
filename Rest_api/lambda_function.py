import json
import os
from dotenv import load_dotenv
import openai
import json
load_dotenv()
openai.api_key = os.getenv("OPENAI_API_KEY")

print(os.getenv("OPENAI_API_KEY"))


def lambda_handler(event, context):

    pars = event['queryStringParameters']['text'].replace("_", " ")
    print(f"parsed input:{pars}")
    Prompt = "respond to this as a therapist would: "+str(event)
    response = openai.Completion.create(
        model="text-davinci-003",
        prompt=Prompt,
        temperature=1,
        max_tokens=100,
        top_p=1,
        frequency_penalty=1,
        presence_penalty=1
    )
    print()
    response_str = json.dumps(response)
    response_dict = json.loads(response_str)
    output = response_dict['choices'][0]['text']
    print(output)
    outputs={
        "statusCode": 200,
        'text': output, 
    }
    return output
