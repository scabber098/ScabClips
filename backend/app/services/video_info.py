import subprocess
import json
from pathlib import Path


def get_video_info(video_path: str):
    command = [
        "ffprobe",
        "-v",
        "quiet",
        "-print_format",
        "json",
        "-show_format",
        "-show_streams",
        video_path,
    ]

    result = subprocess.run(command, capture_output=True, text=True)

    data = json.loads(result.stdout)

    video_stream = next(
        stream for stream in data["streams"]
        if stream["codec_type"] == "video"
    )

    return {
        "duration": round(float(data["format"]["duration"]), 2),
        "width": video_stream["width"],
        "height": video_stream["height"],
        "size": int(data["format"]["size"]),
    }