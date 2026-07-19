"use client";

import { useRef, useState } from "react";

import api from "@/services/api";

import UploadZone from "@/components/UploadZone";
import VideoCard from "@/components/VideoCard";

export default function Home() {
  const inputRef = useRef<HTMLInputElement>(null);

  const [uploading, setUploading] = useState(false);
  const [result, setResult] = useState<any>(null);

  async function uploadVideo(file: File) {
    const formData = new FormData();
    formData.append("file", file);

    setUploading(true);

    try {
      const res = await api.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setResult(res.data);
    } catch (err) {
      console.error(err);
      alert("Upload Failed");
    }

    setUploading(false);
  }

  return (
    <main className="min-h-screen bg-neutral-950 text-white flex items-center justify-center">

      <input
        hidden
        ref={inputRef}
        type="file"
        accept="video/*"
        onChange={(e) => {
          if (!e.target.files?.length) return;
          uploadVideo(e.target.files[0]);
        }}
      />

      <div className="w-full max-w-5xl p-10">

        <h1 className="text-6xl font-bold text-center">
          🎬 ScabClips
        </h1>

        <p className="text-center text-neutral-400 mt-3 text-xl">
          AI Powered Shorts Generator
        </p>

        <UploadZone
          inputRef={inputRef}
          uploading={uploading}
        />

        <VideoCard
          result={result}
        />

      </div>

    </main>
  );
}