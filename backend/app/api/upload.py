from fastapi import APIRouter, UploadFile, File
from pathlib import Path
import shutil
import uuid

from app.services.video_info import get_video_info

router = APIRouter()

UPLOAD_FOLDER = Path("uploads")
UPLOAD_FOLDER.mkdir(exist_ok=True)


@router.post("/upload")
async def upload_video(file: UploadFile = File(...)):
    extension = Path(file.filename).suffix

    video_id = str(uuid.uuid4())

    save_path = UPLOAD_FOLDER / f"{video_id}{extension}"

    with open(save_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    info = get_video_info(str(save_path))

    return {
    "status": "success",
    "video_id": video_id,
    "filename": save_path.name,
    "video_url": f"http://127.0.0.1:8000/uploads/{save_path.name}",
    **info
}