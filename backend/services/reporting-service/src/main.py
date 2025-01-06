import time
from fastapi import FastAPI

app = FastAPI()

@app.get("/health")
def health():
    return { "status": 200, "message": "OK", "prettyMessage": "The server is healthy", "data": time.time() }

if __name__ == "__main__":
    import uvicorn
    import os
    from dotenv import load_dotenv
    
    env_path = os.path.join(os.path.dirname(__file__), "../../../.env")
    print(f"Loading environment variables from: {env_path}")

    load_dotenv(dotenv_path=env_path)
    
    port = os.getenv("REPORTING_SERVICE_PORT")
    print(f"Starting the server on port: {port}")

    uvicorn.run(app, host="127.0.0.1", port=int(port))