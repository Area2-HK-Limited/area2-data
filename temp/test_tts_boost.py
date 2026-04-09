import json, urllib.request

text = "你好，Boost測試。"
model = "speech-2.8-hd"
voice = "Cantonese_professional_reporter_vv2"
api_key = "sk-cp-r6L8_ijDjiJixiPMeBwY3UbbRlKvka_fz59yFrm5C_UEA2ORidt-qB3OWQtRQbByB2hbslMQqPj6YmcFfeKG7cKhY6anD8ypu_FC2mOkD6lAa8eG2x22qH4"
group_id = "2015059256918679575"
output = "/home/ubuntu/.openclaw/workspace/data/temp/tts_boost_test.mp3"

payload = {
    "model": model,
    "text": text,
    "stream": False,
    "voice_setting": {
        "voice_id": voice,
        "speed": 1.0,
        "volume": 1.0,
        "pitch": 0
    },
    "audio_setting": {
        "audio_format": "mp3",
        "sample_rate": 32000
    },
    "language_boost": ["Chinese", "Yue"]
}

data = json.dumps(payload, ensure_ascii=False).encode("utf-8")
print("Payload:", data.decode("utf-8")[:200])

req = urllib.request.Request(
    "https://api.minimax.io/v1/t2a_v2",
    data=data,
    headers={
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json",
        "GroupId": group_id
    }
)

try:
    with urllib.request.urlopen(req, timeout=30) as resp:
        result = json.loads(resp.read())
    base_resp = result.get("base_resp", {})
    print("base_resp:", base_resp)
    if base_resp.get("status_code", 0) != 0:
        print("ERROR:", base_resp.get("status_msg"))
    else:
        audio_hex = result["data"]["audio"]
        audio_bytes = bytes.fromhex(audio_hex)
        with open(output, "wb") as f:
            f.write(audio_bytes)
        print(f"OK: {len(audio_bytes)} bytes")
except Exception as e:
    print("Exception:", e)
